package tn.khotwa.messaging.service;

import org.springframework.beans.factory.annotation.Autowired;
import tn.khotwa.messaging.config.WebSocketEventPublisher;
import tn.khotwa.messaging.dto.MessageDTO;
import tn.khotwa.messaging.dto.MessageMapper;
import tn.khotwa.messaging.dto.NotificationDTO;
import tn.khotwa.messaging.entity.Message;
import tn.khotwa.messaging.entity.MessageStatus;
import tn.khotwa.messaging.entity.MessageType;
import tn.khotwa.messaging.entity.NotificationType;
import tn.khotwa.messaging.repository.MessageRepository;
import tn.khotwa.repository.UserRepo.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor

public class MessageService {

    private final MessageRepository messageRepository;
    private final NotificationService notificationService;
    private final WebSocketEventPublisher eventPublisher;
    private final UserRepository userRepository;

    @Autowired
    private ProfanityFilterService profanityFilterService;

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

        MessageDTO dto = MessageMapper.toMessageDTO(saved, senderName);
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
            String name = userRepository.findById(msg.getSenderId())
                    .map(u -> u.getFirstName() + " " + u.getLastName())
                    .orElse("Unknown User");

            return MessageMapper.toMessageDTO(msg, name);
        });
    }

    public Page<MessageDTO> getSent(Long senderId, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("createdAt").descending());
        return messageRepository.findBySenderId(senderId, pageable)
                .map(msg -> MessageMapper.toMessageDTO(msg, getFullName(msg.getSenderId())));
    }

    public List<MessageDTO> getInboxByType(Long receiverId, MessageType type) {
        return messageRepository.findByReceiverIdAndType(receiverId, type)
                .stream()
                .map(msg -> MessageMapper.toMessageDTO(msg, getFullName(msg.getSenderId())))
                .collect(Collectors.toList());
    }

    public Page<MessageDTO> getActiveInbox(Long receiverId, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("createdAt").descending());
        return messageRepository.findByReceiverIdAndStatusNot(receiverId, MessageStatus.ARCHIVED, pageable)
                .map(msg -> MessageMapper.toMessageDTO(msg, getFullName(msg.getSenderId())));
    }

    public List<MessageDTO> searchMessages(Long userId, String query) {
        return messageRepository.searchMessages(userId, query)
                .stream()
                .map(msg -> MessageMapper.toMessageDTO(msg, getFullName(msg.getSenderId())))
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
        MessageDTO dto = MessageMapper.toMessageDTO(saved, getFullName(saved.getSenderId()));
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
        MessageDTO dto = MessageMapper.toMessageDTO(saved, getFullName(saved.getSenderId()));
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
        MessageDTO dto = MessageMapper.toMessageDTO(saved, getFullName(saved.getSenderId()));
        eventPublisher.publishMessageUpdate(dto);
        return dto;
    }

        private String getFullName(Long userId) {
        return userRepository.findById(userId)
                .map(u -> u.getFirstName() + " " + u.getLastName())
                .orElse("Unknown User");
    }

}