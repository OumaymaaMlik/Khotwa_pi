package tn.khotwa.service.messaging;

import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import tn.khotwa.entity.Message;
import tn.khotwa.entity.Notification;
import tn.khotwa.repository.messaging.MessageRepository;
import tn.khotwa.repository.messaging.NotificationRepository;
import tn.khotwa.service.subscriptionServices.Notification.EmailService;

import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class DailyDigestService {

    private final MessageRepository messageRepository;
    private final NotificationRepository notificationRepository;
    private final EmailService emailService;
    private final UserEmailResolver userEmailResolver;

    // Runs every day at 8:00 PM
    @Scheduled(cron = "0 0 20 * * *")
    public void sendDailyDigests() {
        // Get all unique recipient IDs from today's messages
        LocalDateTime startOfDay = LocalDateTime.now().withHour(0).withMinute(0).withSecond(0);
        LocalDateTime endOfDay = LocalDateTime.now().withHour(23).withMinute(59).withSecond(59);

        List<Message> todaysMessages = messageRepository.findTodaysMessages(startOfDay, endOfDay);
        List<Notification> unreadNotifications = notificationRepository.findAllUnread();

        // Group messages by receiver
        Map<Long, List<Message>> messagesByReceiver = todaysMessages.stream()
                .collect(Collectors.groupingBy(Message::getReceiverId));

        // Group unread notifications by recipient
        Map<Long, List<Notification>> notifsByRecipient = unreadNotifications.stream()
                .collect(Collectors.groupingBy(Notification::getRecipientId));

        // Get all unique user IDs
        Set<Long> allUserIds = new HashSet<>();
        allUserIds.addAll(messagesByReceiver.keySet());
        allUserIds.addAll(notifsByRecipient.keySet());

        // Send digest to each user
        allUserIds.forEach(userId -> {
            List<Message> userMessages = messagesByReceiver.getOrDefault(userId, List.of());
            List<Notification> userNotifs = notifsByRecipient.getOrDefault(userId, List.of());

            if (!userMessages.isEmpty() || !userNotifs.isEmpty()) {
                String email = userEmailResolver.getEmailByUserId(userId);
                String name = userEmailResolver.getNameByUserId(userId);
                String digest = buildDigestContent(name, userMessages, userNotifs);
                emailService.sendDailyDigest(email, name, digest);
            }
        });
    }

    private String buildDigestContent(String name, List<Message> messages, List<Notification> notifs) {
        StringBuilder sb = new StringBuilder();
        sb.append("Hello ").append(name).append(",\n\n");
        sb.append("Here is your daily activity summary for Khotwa:\n\n");

        if (!messages.isEmpty()) {
            sb.append("📬 NEW MESSAGES TODAY\n");
            sb.append("You received ").append(messages.size()).append(" new message(s):\n\n");

            // Group by sender
            Map<Long, List<Message>> bySender = messages.stream()
                    .collect(Collectors.groupingBy(Message::getSenderId));

            bySender.forEach((senderId, senderMessages) -> {
                String senderName = userEmailResolver.getNameByUserId(senderId);
                sb.append("  • ").append(senderMessages.size())
                        .append(" message(s) from ").append(senderName).append(":\n");
                senderMessages.forEach(msg ->
                        sb.append("    - ").append(msg.getSubject()).append("\n")
                );
            });
            sb.append("\n");
        }

        if (!notifs.isEmpty()) {
            sb.append("🔔 UNREAD NOTIFICATIONS\n");
            sb.append("You have ").append(notifs.size()).append(" unread notification(s).\n\n");
        }

        sb.append("Log in to Khotwa to view everything.\n\n");
        sb.append("The Khotwa Team");
        return sb.toString();
    }
}