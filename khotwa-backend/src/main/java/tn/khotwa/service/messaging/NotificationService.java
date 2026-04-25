package tn.khotwa.service.messaging;

import tn.khotwa.dto.messaging.MessageMapper;
import tn.khotwa.dto.messaging.NotificationDTO;
import tn.khotwa.entity.Notification;
import tn.khotwa.entity.NotificationType;
import tn.khotwa.repository.messaging.NotificationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class NotificationService {

    private final NotificationRepository notificationRepository;

    public NotificationDTO createNotification(Long recipientId, Long senderId, String message, NotificationType type) {
        Notification notification = new Notification();
        notification.setRecipientId(recipientId);
        notification.setSenderId(senderId);
        notification.setMessage(message);
        notification.setType(type);
        return MessageMapper.toNotificationDTO(notificationRepository.save(notification));
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