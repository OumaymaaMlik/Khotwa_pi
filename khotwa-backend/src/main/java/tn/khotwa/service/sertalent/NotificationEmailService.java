package tn.khotwa.service.sertalent;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import tn.khotwa.entity.talent.Candidature;

@Service
@RequiredArgsConstructor
public class NotificationEmailService {

    private final JavaMailSender mailSender;

    @Value("${spring.mail.username:}")
    private String fromEmail;

    @Value("${app.notification.admin-email:}")
    private String adminEmail;

    public void sendNewApplicationNotification(Candidature candidature) {
        if (candidature == null || candidature.getAnnonce() == null || candidature.getTalent() == null) {
            return;
        }
        String entrepreneurEmail = candidature.getAnnonce().getStartup() != null
                ? candidature.getAnnonce().getStartup().getEmail()
                : null;
        String subject = "Nouvelle candidature - " + candidature.getAnnonce().getTitre();
        String body = "Un talent vient de postuler.\n\n"
                + "Talent: " + candidature.getTalent().getPrenom() + " " + candidature.getTalent().getNom() + "\n"
                + "Email talent: " + candidature.getTalent().getEmail() + "\n"
                + "Offre: " + candidature.getAnnonce().getTitre() + "\n"
                + "Statut: " + candidature.getStatut() + "\n";

        sendEmail(entrepreneurEmail, subject, body);
        sendEmail(adminEmail, subject, body);
    }

    public void sendStatusChangedNotification(Candidature candidature) {
        if (candidature == null || candidature.getTalent() == null || candidature.getAnnonce() == null) {
            return;
        }
        String subject = "Mise a jour de votre candidature";
        String body = "Votre candidature pour l'offre \"" + candidature.getAnnonce().getTitre() + "\" est maintenant: "
                + candidature.getStatut() + ".";
        sendEmail(candidature.getTalent().getEmail(), subject, body);
        sendEmail(adminEmail, "Candidature mise a jour", body);
    }

    public void sendContactNotification(Candidature candidature) {
        if (candidature == null || candidature.getTalent() == null || candidature.getAnnonce() == null) {
            return;
        }
        String subject = "Nouveau contact entrepreneur <-> talent";
        String body = "Un contact a ete initie entre entrepreneur et talent.\n\n"
                + "Talent: " + candidature.getTalent().getPrenom() + " " + candidature.getTalent().getNom() + "\n"
                + "Offre: " + candidature.getAnnonce().getTitre() + "\n";
        sendEmail(adminEmail, subject, body);
        sendEmail(candidature.getTalent().getEmail(), subject, body);
    }

    private void sendEmail(String to, String subject, String body) {
        if (to == null || to.isBlank()) {
            return;
        }
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(to);
            message.setSubject(subject);
            message.setText(body);
            if (fromEmail != null && !fromEmail.isBlank()) {
                message.setFrom(fromEmail);
            }
            mailSender.send(message);
        } catch (Exception ignored) {
            // Keep business flow working even when SMTP is not configured.
        }
    }
}
