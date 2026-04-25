package tn.khotwa.service.EvenementService;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import tn.khotwa.entity.evenement.Evenement;
import tn.khotwa.entity.evenement.Reservation;
import tn.khotwa.entity.UserEntities.User;

@Service
public class EmailServiceEvents {

    private final JavaMailSender mailSender;

    public EmailServiceEvents(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    // ── Rappel J-1 ────────────────────────────────────────────────────────────
    public void sendEventReminder(Reservation reservation) {
        Evenement ev = reservation.getEvenement();
        User user = reservation.getUser();
        String fullName = user.getFirstName() + " " + user.getLastName();
        send(user.getEmailAddress(),
                "Reminder – Your event tomorrow: " + ev.getTitre(),
                buildReminderBody(fullName, ev));
    }

    // ── Confirmation place (sorti de la waitlist) ─────────────────────────────
    public void sendWaitlistConfirmation(Reservation reservation) {
        Evenement ev = reservation.getEvenement();
        User user = reservation.getUser();
        String fullName = user.getFirstName() + " " + user.getLastName();

        String body = """
                Dear %s,

                Great news! A spot has just opened up for the following event,
                and you have been automatically confirmed from the waiting list.

                ─────────────────────────────
                Event details
                ─────────────────────────────
                Title     : %s
                Type      : %s
                Date      : %s
                Time      : %s
                Speaker   : %s
                Meet link : %s
                ─────────────────────────────

                Your reservation is now CONFIRMED. See you there!

                Best regards,
                Khotwa Team
                """.formatted(
                fullName,
                ev.getTitre(),
                ev.getType(),
                ev.getDate(),
                ev.getHeure(),
                ev.getIntervenant() != null ? ev.getIntervenant() : "TBA",
                ev.getLienMeet() != null ? ev.getLienMeet() : "N/A"
        );

        send(user.getEmailAddress(),
                "✅ You got a spot! – " + ev.getTitre(),
                body);
    }

    // ── Confirmation ajout en waitlist ────────────────────────────────────────
    public void sendWaitlistAdded(Reservation reservation) {
        Evenement ev = reservation.getEvenement();
        User user = reservation.getUser();
        String fullName = user.getFirstName() + " " + user.getLastName();

        String body = """
                Dear %s,

                The event "%s" is currently full.
                You have been added to the waiting list at position #%d.

                If a spot opens up, you will be automatically confirmed
                and notified by email immediately.

                ─────────────────────────────
                Event details
                ─────────────────────────────
                Title   : %s
                Date    : %s
                Time    : %s
                ─────────────────────────────

                Best regards,
                Khotwa Team
                """.formatted(
                fullName,
                ev.getTitre(),
                reservation.getWaitlistPosition(),
                ev.getTitre(),
                ev.getDate(),
                ev.getHeure()
        );

        send(user.getEmailAddress(),
                "⏳ Waitlist – " + ev.getTitre(),
                body);
    }

    // ── Présence confirmée (ATTENDED) ─────────────────────────────────────────
    public void sendAttendanceConfirmed(Reservation reservation) {
        Evenement ev = reservation.getEvenement();
        User user = reservation.getUser();
        String fullName = user.getFirstName() + " " + user.getLastName();

        String body = """
                Dear %s,

                Your attendance at "%s" has been successfully recorded.

                Thank you for participating!

                Best regards,
                Khotwa Team
                """.formatted(fullName, ev.getTitre());

        send(user.getEmailAddress(),
                "✅ Attendance confirmed – " + ev.getTitre(),
                body);
    }

    // ── Helpers ───────────────────────────────────────────────────────────────
    private String buildReminderBody(String fullName, Evenement ev) {
        return """
                Dear %s,

                This is a reminder that you are registered for an event tomorrow.

                ─────────────────────────────
                Event details
                ─────────────────────────────
                Title     : %s
                Type      : %s
                Date      : %s
                Time      : %s
                Speaker   : %s
                Meet link : %s
                ─────────────────────────────

                Please be on time.

                Best regards,
                Khotwa Team
                """.formatted(
                fullName,
                ev.getTitre(), ev.getType(), ev.getDate(), ev.getHeure(),
                ev.getIntervenant() != null ? ev.getIntervenant() : "TBA",
                ev.getLienMeet() != null ? ev.getLienMeet() : "N/A"
        );
    }

    private void send(String to, String subject, String body) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("eyaadjebbi@gmail.com");
        message.setTo(to);
        message.setSubject(subject);
        message.setText(body);
        mailSender.send(message);
    }
}