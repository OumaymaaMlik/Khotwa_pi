package tn.khotwa.config.websocket;

import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;
import lombok.RequiredArgsConstructor;
import tn.khotwa.DTO.messaging.MessageDTO;
import tn.khotwa.DTO.messaging.NotificationDTO;

@Component
@RequiredArgsConstructor
public class WebSocketEventPublisher {

    private final SimpMessagingTemplate messagingTemplate;

    public void publishNewMessage(MessageDTO message) {
        messagingTemplate.convertAndSend(
                "/topic/messages/" + message.getReceiverId(),
                message
        );
    }

    public void publishMessageUpdate(MessageDTO message) {
        messagingTemplate.convertAndSend(
                "/topic/messages/" + message.getReceiverId(),
                message
        );
        messagingTemplate.convertAndSend(
                "/topic/messages/" + message.getSenderId(),
                message
        );
    }

    public void publishNotification(NotificationDTO notification) {
        messagingTemplate.convertAndSend(
                "/topic/notifications/" + notification.getRecipientId(),
                notification
        );
    }

    public void publishTyping(Long senderId, Long receiverId, boolean isTyping) {
        messagingTemplate.convertAndSend(
                "/topic/typing/" + receiverId,
                new TypingEvent(senderId, isTyping)
        );
    }

    public void publishConversationMessage(Long conversationId, MessageDTO message) {
        messagingTemplate.convertAndSend(
                "/topic/conversations/" + conversationId + "/messages",
                message
        );
    }

    public void publishConversationMessageUpdate(Long conversationId, MessageDTO message) {
        messagingTemplate.convertAndSend(
                "/topic/conversations/" + conversationId + "/messages-updates",
                message
        );
    }

    public void publishConversationTyping(Long conversationId, Long userId, boolean isTyping) {
        messagingTemplate.convertAndSend(
                "/topic/conversations/" + conversationId + "/typing",
                new ConversationTypingEvent(conversationId, userId, isTyping)
        );
    }

    public void publishOnlineStatus(Long userId, boolean isOnline) {
        messagingTemplate.convertAndSend(
                "/topic/status",
                new StatusEvent(userId, isOnline)
        );
    }

    public record TypingEvent(Long userId, boolean typing) {}
    public record StatusEvent(Long userId, boolean online) {}
    public record ConversationTypingEvent(Long conversationId, Long userId, boolean typing) {}
}