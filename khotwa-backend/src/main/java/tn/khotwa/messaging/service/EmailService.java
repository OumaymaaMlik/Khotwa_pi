package tn.khotwa.messaging.service;

import lombok.RequiredArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmailService {

    private final JavaMailSender mailSender;

    @Async
    public void sendNewMessageNotification(String toEmail, String senderName, String subject, String preview) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(toEmail);
        message.setSubject("New message: " + subject);
        message.setText(
                "Hello,\n\n" +
                        "You have a new message from " + senderName + ".\n\n" +
                        "Subject: " + subject + "\n" +
                        "Preview: " + preview + "\n\n" +
                        "Log in to Khotwa to read the full message.\n\n" +
                        "The Khotwa Team"
        );
        mailSender.send(message);
    }

    @Async
    public void sendStatusUpdateNotification(String toEmail, String subject, String status) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(toEmail);
        message.setSubject("Message update: " + subject);
        message.setText(
                "Hello,\n\n" +
                        "Your message \"" + subject + "\" has been updated.\n" +
                        "New status: " + status + "\n\n" +
                        "Log in to Khotwa to view the details.\n\n" +
                        "The Khotwa Team"
        );
        mailSender.send(message);
    }
    @Async
    public void sendDailyDigest(String toEmail, String name, String content) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(toEmail);
        message.setSubject("Your Khotwa Daily Digest");
        message.setText(content);
        mailSender.send(message);
    }
}