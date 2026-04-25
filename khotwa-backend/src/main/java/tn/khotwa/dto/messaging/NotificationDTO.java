package tn.khotwa.dto.messaging;

import tn.khotwa.entity.NotificationType;
import lombok.Data;
import java.time.LocalDateTime;

@Data
public class NotificationDTO {
    private Long id;
    private Long recipientId;
    private Long senderId;
    private String message;
    private boolean isRead;
    private NotificationType type;
    private LocalDateTime createdAt;
}