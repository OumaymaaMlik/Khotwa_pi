package tn.khotwa.service.ressources;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import tn.khotwa.DTO.ressources.StagnationInfo;

/**
 * Service dédié à l'envoi des e-mails de relance (Nudging).
 *
 * Sépare la responsabilité d'envoi du reste de la logique métier,
 * et expose deux méthodes distinctes pour chaque niveau de nudge :
 *
 *  - {@link1 #envoyerNudgeNiveau1} : rappel doux uniquement à l'entrepreneur (48 h).
 *  - {@link2 #envoyerNudgeNiveau2} : alerte simultanée entrepreneur + coach (72 h).
 *
 * En cas d'échec SMTP, la méthode lève une {@link MailException} que
 * le scheduler intercepte pour enregistrer l'erreur dans NudgeHistory.
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class NudgeEmailService implements INudgeEmailService{

    private final JavaMailSender mailSender;

    // ── NIVEAU 1 : rappel à l'entrepreneur (48 h d'inactivité) ──────

    /**
     * Envoie un e-mail de rappel doux à l'entrepreneur.
     * Le coach n'est PAS notifié à ce niveau.
     *
     * @param info  Données de stagnation (entrepreneur + ressource)
     */
    public void envoyerNudgeNiveau1(StagnationInfo info) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(info.getEntrepreneurEmail());
        message.setSubject("📚 Reprenez votre lecture sur Khotwa — " + info.getRessourceTitre());
        message.setText(buildCorpsNiveau1(info));
        mailSender.send(message);
        log.info("[NUDGE N1] Email envoyé → {} (ressource: {})",
                info.getEntrepreneurEmail(), info.getRessourceTitre());
    }

    // ── NIVEAU 2 : alerte entrepreneur + coach (72 h d'inactivité) ──

    /**
     * Envoie deux e-mails distincts : un à l'entrepreneur, un à son coach.
     * Les deux envois sont tentés indépendamment — un échec sur l'un
     * ne bloque pas l'autre (géré côté scheduler).
     *
     * @param info  Données de stagnation (entrepreneur + coach + ressource)
     */
    public void envoyerNudgeNiveau2Entrepreneur(StagnationInfo info) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(info.getEntrepreneurEmail());
        message.setSubject("⚠️ Votre coach a été informé de votre inactivité — " + info.getRessourceTitre());
        message.setText(buildCorpsNiveau2Entrepreneur(info));
        mailSender.send(message);
        log.info("[NUDGE N2 - ENTREPRENEUR] Email envoyé → {} (ressource: {})",
                info.getEntrepreneurEmail(), info.getRessourceTitre());
    }

    public void envoyerNudgeNiveau2Coach(StagnationInfo info) {
        if (!info.hasCoach()) {
            log.warn("[NUDGE N2 - COACH] Aucun coach associé pour l'entrepreneur {} — email coach ignoré",
                    info.getEntrepreneurId());
            return;
        }
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(info.getCoachEmail());
        message.setSubject("🔔 [Khotwa] " + info.getNomCompletEntrepreneur()
                + " est inactif depuis 72h sur une ressource");
        message.setText(buildCorpsNiveau2Coach(info));
        mailSender.send(message);
        log.info("[NUDGE N2 - COACH] Email envoyé → {} pour l'entrepreneur {} (ressource: {})",
                info.getCoachEmail(), info.getEntrepreneurId(), info.getRessourceTitre());
    }

    // ── Templates texte ──────────────────────────────────────────────

    private String buildCorpsNiveau1(StagnationInfo info) {
        return """
                Bonjour %s,

                Nous avons remarqué que vous n'avez pas progressé sur la ressource :
                  📖 "%s"
                depuis 48 heures (progression actuelle : %d %%).

                Reprendre là où vous en étiez ne prend que quelques minutes.
                Connectez-vous dès maintenant et continuez votre apprentissage :

                👉 http://localhost:4200/entrepreneur/resources

                Chaque pas compte sur votre chemin entrepreneurial !

                Bonne lecture,
                L'équipe Khotwa
                """.formatted(
                info.getEntrepreneurPrenom(),
                info.getRessourceTitre(),
                info.getPourcentage()
        );
    }

    private String buildCorpsNiveau2Entrepreneur(StagnationInfo info) {
        return """
                Bonjour %s,

                Cela fait maintenant 72 heures que vous n'avez pas consulté la ressource :
                  📖 "%s"
                (progression actuelle : %d %%).

                Votre coach %s a été informé de votre inactivité afin de vous apporter
                un soutien personnalisé si nécessaire.

                Ne tardez plus — reprenez votre apprentissage :
                👉 http://localhost:4200/entrepreneur/resources

                L'équipe Khotwa est avec vous.

                Cordialement,
                L'équipe Khotwa
                """.formatted(
                info.getEntrepreneurPrenom(),
                info.getRessourceTitre(),
                info.getPourcentage(),
                info.hasCoach() ? info.getNomCompletCoach() : "attitré"
        );
    }

    private String buildCorpsNiveau2Coach(StagnationInfo info) {
        return """
                Bonjour %s,

                Ceci est une alerte automatique de la plateforme Khotwa.

                L'entrepreneur que vous accompagnez, %s, est inactif depuis 72 heures
                sur la ressource suivante :
                  📖 "%s"
                (progression actuelle : %d %%).

                Une interaction humaine ciblée de votre part pourrait l'aider à reprendre
                sa progression.

                Vous pouvez consulter le tableau de bord de vos entrepreneurs ici :
                👉 http://localhost:4200/coach/dashboard

                Merci pour votre accompagnement.

                L'équipe Khotwa
                """.formatted(
                info.getCoachPrenom(),
                info.getNomCompletEntrepreneur(),
                info.getRessourceTitre(),
                info.getPourcentage()
        );
    }
}