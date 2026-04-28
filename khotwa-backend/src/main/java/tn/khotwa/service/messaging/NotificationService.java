package tn.khotwa.service.messaging;

import tn.khotwa.DTO.messaging.MessageMapper;
import tn.khotwa.DTO.messaging.NotificationDTO;
import tn.khotwa.entity.Notification;
import tn.khotwa.entity.NotificationType;
import tn.khotwa.repository.messaging.NotificationRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class NotificationService {

    private final NotificationRepository notificationRepository;

    public NotificationDTO createNotification(Long recipientId, Long senderId, Long conversationId, String message, NotificationType type) {
        Notification notification = new Notification();
        notification.setRecipientId(recipientId);
        notification.setSenderId(senderId);
        notification.setConversationId(conversationId);
        notification.setMessage(message);
        notification.setType(type);
        try {
            return MessageMapper.toNotificationDTO(notificationRepository.save(notification));
        } catch (RuntimeException ex) {
            // Backward-compatible fallback for environments where DB enum values are not yet updated.
            if (type == NotificationType.PROJECT_ASSIGNMENT || type == NotificationType.PROJECT_UNASSIGNED) {
                log.warn("Falling back notification type {} to STATUS_UPDATED for recipientId={}", type, recipientId, ex);
                notification.setType(NotificationType.STATUS_UPDATED);
                return MessageMapper.toNotificationDTO(notificationRepository.save(notification));
            }
            throw ex;
        }
    }

    public List<NotificationDTO> getNotifications(Long recipientId) {
        return notificationRepository.findByRecipientId(recipientId)
                .stream().map(MessageMapper::toNotificationDTO).collect(Collectors.toList());
    }

    public List<NotificationDTO> getUnreadNotifications(Long recipientId) {
        return notificationRepository.findByRecipientIdAndIsRead(recipientId, false)
                .stream().map(MessageMapper::toNotificationDTO).collect(Collectors.toList());
    }

    public NotificationDTO markAsRead(Long notificationId) {
        Notification notification = notificationRepository.findById(notificationId)
                .orElseThrow(() -> new RuntimeException("Notification not found"));
        notification.setRead(true);
        return MessageMapper.toNotificationDTO(notificationRepository.save(notification));
    }

    public List<NotificationDTO> markBulkRead(List<Long> ids) {
        return ids.stream().map(id -> {
            Notification notification = notificationRepository.findById(id)
                    .orElseThrow(() -> new RuntimeException("Notification not found"));
            notification.setRead(true);
            return MessageMapper.toNotificationDTO(notificationRepository.save(notification));
        }).collect(Collectors.toList());
    }

    public List<NotificationDTO> markBulkUnread(List<Long> ids) {
        return ids.stream().map(id -> {
            Notification notification = notificationRepository.findById(id)
                    .orElseThrow(() -> new RuntimeException("Notification not found"));
            notification.setRead(false);
            return MessageMapper.toNotificationDTO(notificationRepository.save(notification));
        }).collect(Collectors.toList());
    }

    public void deleteBulk(List<Long> ids) {
        ids.forEach(id -> {
            Notification notification = notificationRepository.findById(id)
                    .orElseThrow(() -> new RuntimeException("Notification not found"));
            notificationRepository.delete(notification);
        });
    }
}