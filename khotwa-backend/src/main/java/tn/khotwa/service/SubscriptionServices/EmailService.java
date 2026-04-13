package tn.khotwa.service.SubscriptionServices;

import lombok.RequiredArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmailService {
    private final JavaMailSender mailSender;
    public void sendExpirationWarning(String toEmail, String prenom, String planLabel, long daysLeft) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(toEmail);
        message.setSubject("⚠️ Your Khotwa subscription expires in " + daysLeft + " day(s)");
        message.setText(
                "Hello " + prenom + ",\n\n" +
                        "Your " + planLabel + " subscription on Khotwa will expire in " + daysLeft + " day(s).\n\n" +
                        "To continue enjoying all features without interruption, please renew your plan " +
                        "by visiting your Profile page.\n\n" +
                        "👉 http://localhost:4200/entrepreneur/profile\n\n" +
                        "Best regards,\n" +
                        "The Khotwa Team"
        );
        mailSender.send(message);
    }
}
