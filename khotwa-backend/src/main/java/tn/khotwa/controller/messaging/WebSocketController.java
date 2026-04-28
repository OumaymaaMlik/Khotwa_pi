package tn.khotwa.controller.messaging;

import tn.khotwa.config.websocket.WebSocketEventPublisher;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;

@Controller
@RequiredArgsConstructor
public class WebSocketController {

    private final WebSocketEventPublisher eventPublisher;

    @MessageMapping("/typing")
    public void handleTyping(TypingPayload payload) {
        if (payload.conversationId() != null) {
            eventPublisher.publishConversationTyping(payload.conversationId(), payload.senderId(), payload.typing());
        } else {
            eventPublisher.publishTyping(payload.senderId(), payload.receiverId(), payload.typing());
        }
    }

    @MessageMapping("/status")
    public void handleStatus(StatusPayload payload) {
        System.out.println("Received status from user " + payload.userId() + " online: " + payload.online());
        eventPublisher.publishOnlineStatus(payload.userId(), payload.online());
    }

    public record TypingPayload(Long senderId, Long receiverId, Long conversationId, boolean typing) {}
    public record StatusPayload(Long userId, boolean online) {}
}
