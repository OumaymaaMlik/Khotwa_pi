package tn.khotwa.service.messaging;

import org.springframework.beans.factory.annotation.Autowired;
import tn.khotwa.config.websocket.WebSocketEventPublisher;
import tn.khotwa.DTO.messaging.*;
import tn.khotwa.entity.Conversation;
import tn.khotwa.entity.ConversationMemberRole;
import tn.khotwa.entity.ConversationParticipant;
import tn.khotwa.entity.ConversationType;
import tn.khotwa.entity.Message;
import tn.khotwa.entity.MessageStatus;
import tn.khotwa.entity.MessageType;
import tn.khotwa.entity.MessageReadReceipt;
import tn.khotwa.entity.NotificationType;
import tn.khotwa.repository.messaging.ConversationParticipantRepository;
import tn.khotwa.repository.messaging.ConversationRepository;
import tn.khotwa.repository.messaging.MessageRepository;
import tn.khotwa.repository.messaging.MessageReadReceiptRepository;
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
import java.util.ArrayList;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;
import java.time.Duration;
import java.time.Instant;
import java.util.HashSet;
import java.util.Set;
import org.springframework.ai.chat.client.ChatClient;


@Service
@RequiredArgsConstructor
@Slf4j

public class MessageService {
    private static final Duration SUGGESTION_CACHE_TTL = Duration.ofMinutes(5);
    private static final Duration SUGGESTION_QUOTA_BACKOFF = Duration.ofSeconds(30);

    private final MessageRepository messageRepository;
    private final ConversationRepository conversationRepository;
    private final ConversationParticipantRepository conversationParticipantRepository;
    private final MessageReadReceiptRepository messageReadReceiptRepository;
    private final NotificationService notificationService;
    private final WebSocketEventPublisher eventPublisher;
    private final UserRepository userRepository;
    private final ChatClient.Builder chatClientBuilder;

    @Autowired
    private ProfanityFilterService profanityFilterService;
    private final Map<String, CachedSuggestions> suggestionCache = new ConcurrentHashMap<>();
    private final Map<String, Instant> suggestionQuotaBlockedUntil = new ConcurrentHashMap<>();

    public MessageDTO sendMessage(Message message) {
        if (message.getConversation() == null) {
            if (message.getReceiverId() == null) {
                throw new IllegalArgumentException("conversationId or receiverId is required");
            }
            Conversation direct = resolveOrCreateDirectConversation(message.getSenderId(), message.getReceiverId());
            message.setConversation(direct);
        }
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
        if (saved.getConversation() != null) {
            Conversation conversation = saved.getConversation();
            conversation.setUpdatedAt(saved.getCreatedAt());
            conversationRepository.save(conversation);
        }

        String senderName = userRepository.findById(saved.getSenderId())
                .map(u -> u.getFirstName() + " " + u.getLastName())
                .orElse("Khotwa User");
        String receiverName = saved.getReceiverId() == null
                ? "Group"
                : userRepository.findById(saved.getReceiverId())
                    .map(u -> u.getFirstName() + " " + u.getLastName())
                    .orElse("Khotwa User");


        MessageDTO dto = MessageMapper.toMessageDTO(saved, senderName, receiverName);
        enrichReadBy(dto);
        eventPublisher.publishConversationMessage(saved.getConversation().getId(), dto);

        if (saved.getConversation() != null) {
            List<ConversationParticipant> recipients = conversationParticipantRepository
                    .findByConversationIdAndActiveTrue(saved.getConversation().getId())
                    .stream()
                    .filter(p -> !p.getUserId().equals(saved.getSenderId()))
                    .toList();

            for (ConversationParticipant recipient : recipients) {
                NotificationDTO notif = notificationService.createNotification(
                        recipient.getUserId(),
                        saved.getSenderId(),
                        saved.getConversation().getId(),
                        "You have a new message from: " + senderName,
                        NotificationType.NEW_MESSAGE
                );
                eventPublisher.publishNotification(notif);
            }
        }
        return dto;
    }

    public Conversation ensureDirectConversation(Long userA, Long userB, Long createdBy, String title) {
        return conversationRepository.findDirectBetween(ConversationType.DIRECT, userA, userB)
                .orElseGet(() -> {
                    Conversation created = new Conversation();
                    created.setType(ConversationType.DIRECT);
                    created.setCreatedBy(createdBy);
                    created.setTitle(title == null ? "Direct conversation" : title);
                    Conversation saved = conversationRepository.save(created);
                    addParticipant(saved, userA, userA.equals(createdBy) ? ConversationMemberRole.OWNER : ConversationMemberRole.MEMBER);
                    addParticipant(saved, userB, userB.equals(createdBy) ? ConversationMemberRole.OWNER : ConversationMemberRole.MEMBER);
                    return saved;
                });
    }

    public Conversation ensureGroupConversationByProject(Long projectId, Long createdBy, String title, List<Long> participantIds) {
        Conversation c = conversationRepository.findFirstByProjectIdAndTypeOrderByUpdatedAtDesc(projectId, ConversationType.GROUP)
                .orElse(null);
        if (c != null) {
            Set<Long> wanted = new HashSet<>(participantIds);
            List<ConversationParticipant> all = conversationParticipantRepository.findByConversationId(c.getId());
            for (ConversationParticipant p : all) {
                if (wanted.contains(p.getUserId())) {
                    if (!p.isActive()) {
                        p.setActive(true);
                        p.setLeftAt(null);
                        conversationParticipantRepository.save(p);
                    }
                } else if (p.isActive()) {
                    p.setActive(false);
                    p.setLeftAt(java.time.LocalDateTime.now());
                    conversationParticipantRepository.save(p);
                }
            }
            Set<Long> existingAllIds = all.stream().map(ConversationParticipant::getUserId).collect(Collectors.toSet());
            for (Long pid : wanted) {
                if (!existingAllIds.contains(pid)) {
                    addParticipant(c, pid, ConversationMemberRole.MEMBER);
                }
            }
            return c;
        }

        Conversation created = new Conversation();
        created.setType(ConversationType.GROUP);
        created.setCreatedBy(createdBy);
        created.setProjectId(projectId);
        created.setTitle(title == null ? "Project group" : title);
        Conversation saved = conversationRepository.save(created);
        for (Long pid : participantIds) {
            addParticipant(saved, pid, pid.equals(createdBy) ? ConversationMemberRole.OWNER : ConversationMemberRole.MEMBER);
        }
        return saved;
    }

    public MessageDTO sendSystemMessageToConversation(Long conversationId, Long senderId, String content) {
        Conversation conversation = conversationRepository.findById(conversationId)
                .orElseThrow(() -> new RuntimeException("Conversation not found"));
        Message message = new Message();
        message.setSenderId(senderId);
        message.setSubject("System");
        message.setBody(content);
        message.setType(MessageType.DIRECT_MESSAGE);
        message.setConversation(conversation);
        return sendMessage(message);
    }

    public MessageDTO sendConversationMessage(Long conversationId, SendConversationMessageRequest request) {
        ensureMember(conversationId, request.getSenderId());
        Message message = new Message();
        message.setSenderId(request.getSenderId());
        message.setSubject(request.getSubject() == null ? "Conversation Message" : request.getSubject());
        message.setBody(request.getBody());
        message.setType(request.getType() == null ? MessageType.DIRECT_MESSAGE : request.getType());
        message.setFileUrl(request.getFileUrl());
        if (request.getParentMessageId() != null) {
            Message parent = messageRepository.findById(request.getParentMessageId())
                    .orElseThrow(() -> new RuntimeException("Parent message not found"));
            message.setParentMessage(parent);
        }
        Conversation conversation = conversationRepository.findById(conversationId)
                .orElseThrow(() -> new RuntimeException("Conversation not found"));
        message.setConversation(conversation);
        return sendMessage(message);
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
                    message.getConversation() != null ? message.getConversation().getId() : null,
                    "Your ticket has been resolved: " + message.getSubject(),
                    NotificationType.TICKET_RESOLVED
            );
            eventPublisher.publishNotification(notif);
        } else {
            throw new IllegalArgumentException("Invalid status transition from " + currentStatus + " to " + newStatus);
        }

        Message saved = messageRepository.save(message);
        MessageDTO dto = MessageMapper.toMessageDTO(saved, getFullName(saved.getSenderId()), getFullName(saved.getReceiverId()));
        enrichReadBy(dto);
        eventPublisher.publishConversationMessageUpdate(saved.getConversation().getId(), dto);
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
        enrichReadBy(dto);
        eventPublisher.publishConversationMessageUpdate(saved.getConversation().getId(), dto);
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
        enrichReadBy(dto);
        eventPublisher.publishConversationMessageUpdate(saved.getConversation().getId(), dto);
        return dto;
    }

    public List<ConversationDTO> getConversationsForUser(Long userId, OnlineUserResolver onlineUserResolver) {
        List<Conversation> conversations = conversationRepository.findAllForUser(userId);
        return conversations.stream().map(conversation -> toConversationDTO(conversation, userId, onlineUserResolver)).toList();
    }

    public Page<MessageDTO> getMessagesForConversation(Long conversationId, Long userId, int page, int size) {
        ensureMember(conversationId, userId);
        Pageable pageable = PageRequest.of(page, size, Sort.by("createdAt").ascending());
        return messageRepository.findByConversationIdOrderByCreatedAtAsc(conversationId, pageable)
                .map(m -> {
                    MessageDTO dto = MessageMapper.toMessageDTO(m, getFullName(m.getSenderId()), getFullName(m.getReceiverId()));
                    enrichReadBy(dto);
                    return dto;
                });
    }

    public void markConversationRead(Long conversationId, Long userId) {
        ensureMember(conversationId, userId);
        Pageable single = PageRequest.of(0, 1, Sort.by("createdAt").descending());
        Page<Message> latest = messageRepository.findByConversationIdOrderByCreatedAtDesc(conversationId, single);
        if (!latest.isEmpty()) {
            Message last = latest.getContent().get(0);
            ConversationParticipant participant = conversationParticipantRepository
                    .findByConversationIdAndUserIdAndActiveTrue(conversationId, userId)
                    .orElseThrow(() -> new RuntimeException("Participant not found"));
            participant.setLastReadMessageId(last.getId());
            participant.setLastReadAt(java.time.LocalDateTime.now());
            conversationParticipantRepository.save(participant);
        }

        List<Message> messages = messageRepository.findByConversationIdOrderByCreatedAtAsc(
                conversationId, PageRequest.of(0, 500, Sort.by("createdAt").descending())
        ).getContent();
        for (Message message : messages) {
            if (message.getSenderId().equals(userId)) continue;
            boolean exists = messageReadReceiptRepository.findByMessageIdAndReaderId(message.getId(), userId).isPresent();
            if (!exists) {
                MessageReadReceipt receipt = new MessageReadReceipt();
                receipt.setMessage(message);
                receipt.setReaderId(userId);
                messageReadReceiptRepository.save(receipt);
                MessageDTO updated = MessageMapper.toMessageDTO(message, getFullName(message.getSenderId()), getFullName(message.getReceiverId()));
                enrichReadBy(updated);
                eventPublisher.publishConversationMessageUpdate(conversationId, updated);
            }
        }
    }

    private String getFullName(Long userId) {
        if (userId == null) {
            return "Unknown User";
        }
        return userRepository.findById(userId)
                .map(u -> u.getFirstName() + " " + u.getLastName())
                .orElse("Unknown User");
    }

    public ConversationSummary generateRecap(Long conversationId, Long userId) {
        if (conversationId == null || userId == null) {
            return new ConversationSummary("", List.of(), List.of());
        }
        try {
            ensureMember(conversationId, userId);
            List<Message> history = messageRepository
                    .findByConversationIdOrderByCreatedAtAsc(conversationId, PageRequest.of(0, 30))
                    .getContent();
            if (history.isEmpty()) {
                return new ConversationSummary("", List.of(), List.of());
            }

            ChatClient chatClient = chatClientBuilder
                    .defaultSystem("""
                            You are a professional business coach.
                            Produce a concise recap of the conversation for the user.
                            """)
                    .build();
            String chatLog = history.stream()
                    .filter(m -> m.getBody() != null && !m.getBody().trim().isEmpty())
                    .map(m -> getFullName(m.getSenderId()) + ": " + m.getBody())
                    .collect(Collectors.joining("\n"));
            if (chatLog.isBlank()) {
                return new ConversationSummary("No text messages to recap yet.", List.of(), List.of());
            }
            String recapText = chatClient.prompt()
                    .user(u -> u.text("""
                            Recap this conversation log.
                            Return plain text in this exact structure:
                            SUMMARY: <one paragraph>
                            MILESTONES:
                            - <milestone 1>
                            - <milestone 2>
                            NEXT_STEPS:
                            - <step 1>
                            - <step 2>

                            Conversation:
                            {chatLog}
                            """).param("chatLog", chatLog))
                    .call()
                    .content();
            return parseRecapContent(recapText);
        } catch (Exception ex) {
            if (isQuotaExceeded(ex)) {
                log.warn("Recap AI quota exceeded for conversationId={} userId={}", conversationId, userId);
            } else {
                log.error("Failed to generate recap for conversationId={} userId={}", conversationId, userId, ex);
            }
            return new ConversationSummary("", List.of(), List.of());
        }
    }

    public SmartSuggestions generateSuggestions(Long conversationId, Long currentUserId) {
        try {
            if (conversationId == null || currentUserId == null) {
                return new SmartSuggestions(List.of());
            }
            ensureMember(conversationId, currentUserId);
            List<Message> lastMessageList = messageRepository
                    .findByConversationIdOrderByCreatedAtDesc(conversationId, PageRequest.of(0, 1))
                    .getContent();
            if (lastMessageList.isEmpty()) {
                return new SmartSuggestions(List.of());
            }

            Message lastMessage = lastMessageList.get(0);
            String conversationKey = conversationId + ":" + currentUserId;
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

            List<Message> history = messageRepository
                    .findByConversationIdOrderByCreatedAtDesc(conversationId, PageRequest.of(0, 10))
                    .getContent().stream()
                    .filter(m -> m.getBody() != null && !m.getBody().trim().isEmpty())
                    .sorted(Comparator.comparing(Message::getCreatedAt))
                    .collect(Collectors.toList());

            if (history.isEmpty()) {
                return new SmartSuggestions(List.of());
            }

            String chatLog = history.stream()
                    .map(m -> getFullName(m.getSenderId()) + ": " + m.getBody())
                    .collect(Collectors.joining("\n"));

            String rawSuggestions = chatClient.prompt()
                    .user(u -> u.text("""
                            Suggest 3 short reply options for the current user based on this conversation.
                            Return plain text with one suggestion per line and no numbering.
                            Conversation:
                            {chatLog}
                            """)
                            .param("chatLog", chatLog))
                    .call()
                    .content();

            SmartSuggestions suggestions = parseSuggestionsContent(rawSuggestions);
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
                log.warn("Suggestions AI quota exceeded for conversationId={} currentUserId={}", conversationId, currentUserId);
                suggestionQuotaBlockedUntil.put(conversationId + ":" + currentUserId, Instant.now().plus(SUGGESTION_QUOTA_BACKOFF));
            } else {
                log.error("Failed to generate smart suggestions for conversationId={} currentUserId={}", conversationId, currentUserId, ex);
            }
            return new SmartSuggestions(List.of());
        }
    }

    private ConversationSummary parseRecapContent(String recapText) {
        if (recapText == null || recapText.isBlank()) {
            return new ConversationSummary("", List.of(), List.of());
        }
        String summary = "";
        List<String> milestones = new ArrayList<>();
        List<String> nextSteps = new ArrayList<>();
        String section = "";
        for (String rawLine : recapText.split("\\R")) {
            String line = rawLine == null ? "" : rawLine.trim();
            if (line.isEmpty()) continue;
            String upper = line.toUpperCase();
            if (upper.startsWith("SUMMARY:")) {
                summary = line.substring("SUMMARY:".length()).trim();
                section = "SUMMARY";
                continue;
            }
            if (upper.startsWith("MILESTONES:")) {
                section = "MILESTONES";
                continue;
            }
            if (upper.startsWith("NEXT_STEPS:") || upper.startsWith("NEXT STEPS:")) {
                section = "NEXT_STEPS";
                continue;
            }
            String normalized = line.replaceFirst("^[-*\\d.\\s]+", "").trim();
            if (normalized.isEmpty()) continue;
            if ("MILESTONES".equals(section)) milestones.add(normalized);
            else if ("NEXT_STEPS".equals(section)) nextSteps.add(normalized);
            else if (summary.isEmpty()) summary = normalized;
        }
        return new ConversationSummary(summary, milestones, nextSteps);
    }

    private SmartSuggestions parseSuggestionsContent(String rawSuggestions) {
        if (rawSuggestions == null || rawSuggestions.isBlank()) {
            return new SmartSuggestions(List.of());
        }
        List<String> suggestions = new ArrayList<>();
        for (String rawLine : rawSuggestions.split("\\R")) {
            String line = rawLine == null ? "" : rawLine.trim();
            if (line.isEmpty()) continue;
            String normalized = line.replaceFirst("^[-*\\d.\\s]+", "").trim();
            if (normalized.isEmpty()) continue;
            suggestions.add(normalized);
            if (suggestions.size() >= 3) break;
        }
        return new SmartSuggestions(suggestions);
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

    private void ensureMember(Long conversationId, Long userId) {
        boolean allowed = conversationParticipantRepository.existsByConversationIdAndUserIdAndActiveTrue(conversationId, userId);
        if (!allowed) {
            throw new RuntimeException("User is not part of this conversation");
        }
    }

    private Conversation resolveOrCreateDirectConversation(Long senderId, Long receiverId) {
        return conversationRepository.findDirectBetween(ConversationType.DIRECT, senderId, receiverId)
                .orElseGet(() -> {
                    Conversation created = new Conversation();
                    created.setType(ConversationType.DIRECT);
                    created.setCreatedBy(senderId);
                    created.setTitle("Direct conversation");
                    Conversation saved = conversationRepository.save(created);
                    addParticipant(saved, senderId, ConversationMemberRole.OWNER);
                    addParticipant(saved, receiverId, ConversationMemberRole.MEMBER);
                    return saved;
                });
    }

    private void addParticipant(Conversation conversation, Long userId, ConversationMemberRole role) {
        ConversationParticipant p = new ConversationParticipant();
        p.setConversation(conversation);
        p.setUserId(userId);
        p.setRole(role);
        conversationParticipantRepository.save(p);
    }

    private ConversationDTO toConversationDTO(Conversation conversation, Long requestingUserId, OnlineUserResolver onlineUserResolver) {
        ConversationDTO dto = new ConversationDTO();
        dto.setId(conversation.getId());
        dto.setType(conversation.getType());
        dto.setTitle(conversation.getTitle());
        dto.setProjectId(conversation.getProjectId());
        dto.setCreatedBy(conversation.getCreatedBy());
        dto.setCreatedAt(conversation.getCreatedAt());
        dto.setUpdatedAt(conversation.getUpdatedAt());

        List<ConversationParticipant> participants = conversationParticipantRepository
                .findByConversationIdAndActiveTrue(conversation.getId());
        int online = 0;
        for (ConversationParticipant p : participants) {
            ConversationParticipantDTO pdto = new ConversationParticipantDTO();
            pdto.setUserId(p.getUserId());
            pdto.setRole(p.getRole());
            pdto.setFullName(getFullName(p.getUserId()));
            String avatar = userRepository.findById(p.getUserId()).map(u -> u.getAvatar()).orElse(null);
            pdto.setAvatar(avatar);
            boolean isOnline = onlineUserResolver.isOnline(p.getUserId());
            pdto.setOnline(isOnline);
            if (isOnline) online++;
            dto.getParticipants().add(pdto);
        }
        dto.setOnlineCount(online);
        dto.setTotalParticipants(participants.size());

        Page<Message> latest = messageRepository.findByConversationIdOrderByCreatedAtDesc(
                conversation.getId(), PageRequest.of(0, 1)
        );
        if (!latest.isEmpty()) {
            Message message = latest.getContent().get(0);
            MessageDTO last = MessageMapper.toMessageDTO(message, getFullName(message.getSenderId()), getFullName(message.getReceiverId()));
            enrichReadBy(last);
            dto.setLastMessage(last);
        }

        ConversationParticipant self = participants.stream()
                .filter(p -> p.getUserId().equals(requestingUserId))
                .findFirst()
                .orElse(null);
        if (self != null && self.getLastReadAt() != null) {
            long unread = messageRepository.findByConversationIdOrderByCreatedAtAsc(
                    conversation.getId(), PageRequest.of(0, 500, Sort.by("createdAt").ascending())
            ).getContent().stream()
                    .filter(m -> m.getCreatedAt().isAfter(self.getLastReadAt()))
                    .filter(m -> !m.getSenderId().equals(requestingUserId))
                    .count();
            dto.setUnreadCount((int) unread);
        } else {
            long unread = messageRepository.findByConversationIdOrderByCreatedAtAsc(
                    conversation.getId(), PageRequest.of(0, 500, Sort.by("createdAt").ascending())
            ).getContent().stream()
                    .filter(m -> !m.getSenderId().equals(requestingUserId))
                    .count();
            dto.setUnreadCount((int) unread);
        }

        return dto;
    }

    private void enrichReadBy(MessageDTO dto) {
        if (dto.getId() == null) return;
        List<String> readers = messageReadReceiptRepository.findByMessageId(dto.getId()).stream()
                .map(r -> getFullName(r.getReaderId()))
                .distinct()
                .toList();
        dto.setReadBy(readers);
    }

    public interface OnlineUserResolver {
        boolean isOnline(Long userId);
    }

    private record CachedSuggestions(List<String> suggestions, Instant expiresAt) {}
}