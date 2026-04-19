package tn.khotwa.messaging.repository;

import org.springframework.data.jpa.repository.Query;
import tn.khotwa.messaging.entity.Notification;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface NotificationRepository extends JpaRepository<Notification, Long> {

    List<Notification> findByRecipientId(Long recipientId);
    List<Notification> findByRecipientIdAndIsRead(Long recipientId, boolean isRead);
    @Query("SELECT n FROM Notification n WHERE n.isRead = false")
    List<Notification> findAllUnread();
}
