package tn.khotwa.service.messaging;

import org.springframework.beans.factory.annotation.Autowired;
import tn.khotwa.config.websocket.WebSocketEventPublisher;
import tn.khotwa.dto.messaging.*;
import tn.khotwa.entity.Message;
import tn.khotwa.entity.MessageStatus;
import tn.khotwa.entity.MessageType;
import tn.khotwa.entity.NotificationType;
import tn.khotwa.repository.messaging.MessageRepository;
import tn.khotwa.repository.UserRepo.UserRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;
import java.time.Duration;
import java.time.Instant;
import org.springframework.ai.chat.client.ChatClient;

@Service
@RequiredArgsConstructor
@Slf4j

public class MessageService {
    private static final Duration SUGGESTION_CACHE_TTL = Duration.ofMinutes(5);
    private static final Duration SUGGESTION_QUOTA_BACKOFF = Duration.ofSeconds(30);

    private final MessageRepository messageRepository;
    private final NotificationService notificationService;
    private final WebSocketEventPublisher eventPublisher;
    private final UserRepository userRepository;
    private final ChatClient.Builder chatClientBuilder;

    @Autowired
    private ProfanityFilterService profanityFilterService;
    private final Map<String, CachedSuggestions> suggestionCache = new ConcurrentHashMap<>();
    private final Map<String, Instant> suggestionQuotaBlockedUntil = new ConcurrentHashMap<>();

    public MessageDTO sendMessage(Message message) {
        if (message.getBody() != null) {
            String cleanBody = profanityFilterService.filter(message.getBody());
            message.setBody(cleanBody);
        }
        if (message.getSubject() != null) {
            String cleanSubject = profanityFilterService.filter(message.getSubject());
            message.setSubject(cleanSubject);
        }
        if (message.getParentMessage() != null && message.getParentMessage().getId() != null) {
            Message parent = messageRepository.findById(message.getParentMessage().getId())
                    .orElseThrow(() -> new RuntimeException("Parent message not found"));
            message.setParentMessage(parent);
        }
        Message saved = messageRepository.save(message);

        String senderName = userRepository.findById(saved.getSenderId())
                .map(u -> u.getFirstName() + " " + u.getLastName())
                .orElse("Khotwa User");
        String receiverName = userRepository.findById(saved.getReceiverId())
                .map(u -> u.getFirstName() + " " + u.getLastName())
                .orElse("Khotwa User");


        MessageDTO dto = MessageMapper.toMessageDTO(saved, senderName, receiverName);
        eventPublisher.publishNewMessage(dto);

        NotificationDTO notif = notificationService.createNotification(
                saved.getReceiverId(),
                saved.getSenderId(),
                "You have a new message from: " + senderName,
                NotificationType.NEW_MESSAGE
        );
        eventPublisher.publishNotification(notif);
        return dto;
    }

    public MessageDTO sendSystemAutoMessage(Long senderId, Long receiverId, String content) {
        Message autoMsg = new Message();
        autoMsg.setSenderId(senderId);
        autoMsg.setReceiverId(receiverId);
        autoMsg.setSubject("Nouvelle Collaboration");
        autoMsg.setBody(content);
        autoMsg.setType(MessageType.DIRECT_MESSAGE);
        autoMsg.setStatus(MessageStatus.PENDING);
        return this.sendMessage(autoMsg);
    }

    public Page<MessageDTO> getInbox(Long receiverId, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("createdAt").descending());
        return messageRepository.findByReceiverId(receiverId, pageable).map(msg -> {
            String sname = userRepository.findById(msg.getSenderId())
                    .map(u -> u.getFirstName() + " " + u.getLastName())
                    .orElse("Unknown User");
            String rname = userRepository.findById(msg.getSenderId())
                    .map(u -> u.getFirstName() + " " + u.getLastName())
                    .orElse("Unknown User");

            return MessageMapper.toMessageDTO(msg, sname, rname);
        });
    }

    public Page<MessageDTO> getSent(Long senderId, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("createdAt").descending());
        return messageRepository.findBySenderId(senderId, pageable)
                .map(msg -> MessageMapper.toMessageDTO(msg, getFullName(msg.getSenderId()), getFullName(msg.getReceiverId())));
    }

    public List<MessageDTO> getInboxByType(Long receiverId, MessageType type) {
        return messageRepository.findByReceiverIdAndType(receiverId, type)
                .stream()
                .map(msg -> MessageMapper.toMessageDTO(msg, getFullName(msg.getSenderId()), getFullName(msg.getReceiverId())))
                .collect(Collectors.toList());
    }

    public Page<MessageDTO> getActiveInbox(Long receiverId, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("createdAt").descending());
        return messageRepository.findByReceiverIdAndStatusNot(receiverId, MessageStatus.ARCHIVED, pageable)
                .map(msg -> MessageMapper.toMessageDTO(
                        msg,
                        getFullName(msg.getSenderId()),
                        getFullName(msg.getReceiverId())
                ));
    }

    public List<MessageDTO> searchMessages(Long userId, String query) {
        return messageRepository.searchMessages(userId, query)
                .stream()
                .map(msg -> MessageMapper.toMessageDTO(msg, getFullName(msg.getSenderId()), getFullName(msg.getReceiverId())))
                .collect(Collectors.toList());
    }

    public MessageDTO updateStatus(Long messageId, MessageStatus newStatus) {
        Message message = messageRepository.findById(messageId)
                .orElseThrow(() -> new RuntimeException("Message not found"));

        MessageStatus currentStatus = message.getStatus();

        if (newStatus == MessageStatus.ARCHIVED) {
            message.setStatus(MessageStatus.ARCHIVED);
        } else if (currentStatus == MessageStatus.PENDING && newStatus == MessageStatus.READ) {
            message.setStatus(MessageStatus.READ);
        } else if (currentStatus == MessageStatus.READ && newStatus == MessageStatus.RESOLVED) {
            message.setStatus(MessageStatus.RESOLVED);
            NotificationDTO notif = notificationService.createNotification(
                    message.getSenderId(),
                    message.getSenderId(),
                    "Your ticket has been resolved: " + message.getSubject(),
                    NotificationType.TICKET_RESOLVED
            );
            eventPublisher.publishNotification(notif);
        } else {
            throw new IllegalArgumentException("Invalid status transition from " + currentStatus + " to " + newStatus);
        }

        Message saved = messageRepository.save(message);
        MessageDTO dto = MessageMapper.toMessageDTO(saved, getFullName(saved.getSenderId()), getFullName(saved.getReceiverId()));
        eventPublisher.publishMessageUpdate(dto);
        return dto;
    }

    public MessageDTO archiveMessage(Long messageId) {
        return updateStatus(messageId, MessageStatus.ARCHIVED);
    }

    public void deleteMessage(Long messageId) {
        Message message = messageRepository.findById(messageId)
                .orElseThrow(() -> new RuntimeException("Message not found"));
        messageRepository.delete(message);
    }

    public MessageDTO deleteForAll(Long messageId) {
        Message message = messageRepository.findById(messageId)
                .orElseThrow(() -> new RuntimeException("Message not found"));
        message.setDeletedForAll(true);
        message.setBody("message deleted");
        message.setFileUrl(null);
        Message saved = messageRepository.save(message);
        MessageDTO dto = MessageMapper.toMessageDTO(saved, getFullName(saved.getSenderId()), getFullName(saved.getReceiverId()));
        eventPublisher.publishMessageUpdate(dto);
        return dto;
    }

    public MessageDTO deleteForMe(Long messageId, Long userId) {
        Message message = messageRepository.findById(messageId)
                .orElseThrow(() -> new RuntimeException("Message not found"));
        String existing = message.getDeletedForUsers();
        if (existing == null || existing.isEmpty()) {
            message.setDeletedForUsers(String.valueOf(userId));
        } else if (!existing.contains(String.valueOf(userId))) {
            message.setDeletedForUsers(existing + "," + userId);
        }
        Message saved = messageRepository.save(message);
        MessageDTO dto = MessageMapper.toMessageDTO(saved, getFullName(saved.getSenderId()), getFullName(saved.getReceiverId()));
        eventPublisher.publishMessageUpdate(dto);
        return dto;
    }

        private String getFullName(Long userId) {
        return userRepository.findById(userId)
                .map(u -> u.getFirstName() + " " + u.getLastName())
                .orElse("Unknown User");
    }

    public ConversationSummary generateRecap(Long user1, Long user2) {
        ChatClient chatClient = chatClientBuilder
                .defaultSystem("""
                        You are a professional business coach.
                        You must produce a recap using ONLY these actor placeholders:
                        - {{USER_1}}
                        - {{USER_2}}
                        Never output real names for conversation participants.
                        Keep placeholders exactly as written.
                        """)
                .build();
        List<Message> history = messageRepository.findRecentConversation(user1, user2, PageRequest.of(0, 30));
        String chatLog = history.stream()
                .map(m -> actorLabel(m.getSenderId(), user1, user2) + ": " + m.getBody())
                .collect(Collectors.joining("\n"));
        return chatClient.prompt()
                .user(u -> u.text("""
                        Recap this conversation log.
                        Return concise JSON matching ConversationSummary with fields:
                        - summary (string)
                        - keyMilestones (array of strings)
                        - nextSteps (array of strings)

                        Mandatory rule:
                        - Refer to participants ONLY as {{USER_1}} or {{USER_2}}.
                        - Do not use first/last names.

                        Conversation:
                        {chatLog}
                        """).param("chatLog", chatLog))
                .call()
                .entity(ConversationSummary.class);
    }

    private String actorLabel(Long senderId, Long user1, Long user2) {
        if (senderId != null && senderId.equals(user1)) return "{{USER_1}}";
        if (senderId != null && senderId.equals(user2)) return "{{USER_2}}";
        return "{{USER_2}}";
    }

    public SmartSuggestions generateSuggestions(Long currentUserId, Long otherUserId) {
        try {
            List<Message> lastMessageList = messageRepository.findRecentConversationDesc(currentUserId, otherUserId, PageRequest.of(0, 1));
            if (lastMessageList.isEmpty()) {
                return new SmartSuggestions(List.of());
            }

            Message lastMessage = lastMessageList.get(0);
            if (lastMessage.getSenderId() == null || lastMessage.getSenderId().equals(currentUserId)) {
                return new SmartSuggestions(List.of());
            }
            String conversationKey = currentUserId + ":" + otherUserId;
            String cacheKey = conversationKey + ":" + lastMessage.getId();
            Instant now = Instant.now();

            CachedSuggestions cached = suggestionCache.get(cacheKey);
            if (cached != null && cached.expiresAt().isAfter(now)) {
                return new SmartSuggestions(cached.suggestions());
            }

            Instant quotaBlockedUntil = suggestionQuotaBlockedUntil.get(conversationKey);
            if (quotaBlockedUntil != null && quotaBlockedUntil.isAfter(now)) {
                return new SmartSuggestions(List.of());
            }

            ChatClient chatClient = chatClientBuilder
                    .defaultSystem("You are a helpful assistant for an Entrepreneurship platform. " +
                            "Provide 3 short, professional reply suggestions (max 6 words each).")
                    .build();

            List<Message> history = messageRepository.findRecentConversationDesc(currentUserId, otherUserId, PageRequest.of(0, 10))
                    .stream()
                    .filter(m -> m.getBody() != null && !m.getBody().trim().isEmpty())
                    .sorted(Comparator.comparing(Message::getCreatedAt))
                    .collect(Collectors.toList());

            if (history.isEmpty()) {
                return new SmartSuggestions(List.of());
            }

            String chatLog = history.stream()
                    .map(m -> getFullName(m.getSenderId()) + ": " + m.getBody())
                    .collect(Collectors.joining("\n"));

            SmartSuggestions suggestions = chatClient.prompt()
                    .user(u -> u.text("Suggest replies for the user to send next based on this:\n{chatLog}")
                            .param("chatLog", chatLog))
                    .call()
                    .entity(SmartSuggestions.class);

            if (suggestions == null || suggestions.suggestions() == null || suggestions.suggestions().isEmpty()) {
                return new SmartSuggestions(List.of());
            }
            List<String> cleaned = suggestions.suggestions().stream()
                    .filter(s -> s != null && !s.trim().isEmpty())
                    .limit(3)
                    .collect(Collectors.toList());
            if (cleaned.isEmpty()) {
                return new SmartSuggestions(List.of());
            }
            suggestionCache.put(cacheKey, new CachedSuggestions(cleaned, now.plus(SUGGESTION_CACHE_TTL)));
            return new SmartSuggestions(cleaned);
        } catch (Exception ex) {
            if (isQuotaExceeded(ex)) {
                log.warn("Suggestions AI quota exceeded for currentUserId={} otherUserId={}", currentUserId, otherUserId);
                suggestionQuotaBlockedUntil.put(currentUserId + ":" + otherUserId, Instant.now().plus(SUGGESTION_QUOTA_BACKOFF));
            } else {
                log.error("Failed to generate smart suggestions for currentUserId={} otherUserId={}", currentUserId, otherUserId, ex);
            }
            return new SmartSuggestions(List.of());
        }
    }

    private boolean isQuotaExceeded(Throwable throwable) {
        Throwable current = throwable;
        while (current != null) {
            String message = current.getMessage();
            if (message != null && message.contains("429")) {
                return true;
            }
            current = current.getCause();
        }
        return false;
    }

    private record CachedSuggestions(List<String> suggestions, Instant expiresAt) {}
}