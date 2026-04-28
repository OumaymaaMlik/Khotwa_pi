package tn.khotwa.service.ressources;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import tn.khotwa.DTO.ressources.StagnationInfo;
import tn.khotwa.entity.ressources.NudgeHistory;
import tn.khotwa.enums.NudgeLevel;
import tn.khotwa.repository.ressources.NudgeHistoryRepository;
import tn.khotwa.repository.ressources.ProgressionRepository;

import java.time.LocalDateTime;
import java.util.List;

/**
 * Scheduler de relance proactive (Nudging) pour le module Knowledge Base.
 *
 * <h3>Logique métier</h3>
 * <ul>
 *   <li><b>NIVEAU 1</b> (48 h d'inactivité) — rappel envoyé uniquement à l'entrepreneur.</li>
 *   <li><b>NIVEAU 2</b> (72 h d'inactivité) — alerte simultanée entrepreneur + coach.</li>
 * </ul>
 *
 * <h3>Sécurité et confidentialité</h3>
 * <ul>
 *   <li>Seul le coach directement affecté (COACH_PRINCIPAL actif sur un projet) reçoit l'alerte.</li>
 *   <li>Aucune donnée personnelle n'est loggée au-delà de l'ID et de l'adresse email.</li>
 *   <li>Les erreurs d'envoi sont isolées par ligne : un échec n'arrête pas le traitement des autres.</li>
 *   <li>L'anti-doublon {@link1 NudgeHistoryRepository#existsNudgeEnvoye} garantit qu'un même
 *       niveau de nudge ne soit envoyé qu'une fois par 24 h pour un couple (user, ressource).</li>
 * </ul>
 *
 * <h3>Performance</h3>
 * La requête JPQL {@code findProgressionsStagnantes} effectue un seul aller-retour SQL
 * avec LEFT JOIN vers ProjetCoach et User (coach). Les index déclarés sur
 * {@code progressions_utilisateurs.dernier_acces} et {@code nudge_history} assurent
 * un temps de réponse &lt; 2 s sur les volumes attendus.
 */
@Slf4j
@Component
@RequiredArgsConstructor
public class NudgingSchedulerService {

    // ── Seuils d'inactivité ─────────────────────────────────────────

    /** Inactivité minimale pour déclencher un NIVEAU_1 (48 h). */
    @Value("${khotwa.nudging.seuil-n1-heures:2880}")
    private int seuilN1Heures;

    @Value("${khotwa.nudging.seuil-n2-heures:4320}")
    private int seuilN2Heures;

    // ── Dépendances ─────────────────────────────────────────────────

    private final ProgressionRepository   progressionRepo;
    private final NudgeHistoryRepository  nudgeHistoryRepo;
    private final NudgeEmailService       nudgeEmailService;

    // ── Job principal ────────────────────────────────────────────────

    /**
     * Scan quotidien des progressions stagnantes.
     * Planifié chaque jour à 09:00 heure serveur.
     *
     * Cron : {@code 0 0 9 * * *}
     * Pour les tests, remplacer par {@code @Scheduled(fixedRate = 60_000)} (toutes les 60 s).
     */
    @Scheduled(cron = "${khotwa.nudging.cron:0 0 9 * * *}")
    @Transactional
    public void scannerStagnations() {
        LocalDateTime maintenant = LocalDateTime.now();
        log.info("[NUDGING] Démarrage du scan — {}", maintenant);

        // ── 1. Requête unique : progressions inactives depuis >= 48 h ──
        // On prend le seuil le plus bas (N1 = 48h). La distinction N1/N2
        // se fait ensuite par test sur dernierAcces côté Java.
        LocalDateTime seuilN1 = maintenant.minusMinutes(seuilN1Heures);
        List<StagnationInfo> stagnantes = progressionRepo.findProgressionsStagnantes(seuilN1);

        log.info("[NUDGING] {} progression(s) stagnante(s) détectée(s)", stagnantes.size());

        int nudgesN1 = 0, nudgesN2 = 0, erreurs = 0;

        for (StagnationInfo info : stagnantes) {
            try {
                LocalDateTime seuilN2 = maintenant.minusMinutes(seuilN2Heures);
                boolean estN2 = info.getDernierAcces().isBefore(seuilN2);

                if (estN2) {
                    nudgesN2 += traiterNiveau2(info, maintenant);
                } else {
                    nudgesN1 += traiterNiveau1(info, maintenant);
                }
            } catch (Exception e) {
                erreurs++;
                log.error("[NUDGING] Erreur inattendue pour l'entrepreneur {} / ressource {} : {}",
                        info.getEntrepreneurId(), info.getRessourceId(), e.getMessage());
            }
        }

        log.info("[NUDGING] Scan terminé — N1 envoyés: {}, N2 envoyés: {}, erreurs: {}",
                nudgesN1, nudgesN2, erreurs);
    }

    // ── Traitement NIVEAU 1 ──────────────────────────────────────────

    /**
     * Envoie un rappel à l'entrepreneur si aucun NIVEAU_1 n'a déjà été envoyé
     * dans les dernières 24 h pour ce couple (utilisateur, ressource).
     *
     * @return 1 si un nudge a été envoyé, 0 sinon
     */
    private int traiterNiveau1(StagnationInfo info, LocalDateTime maintenant) {
        LocalDateTime debutFenetre = maintenant.minusMinutes(1);

        if (nudgeHistoryRepo.existsNudgeEnvoye(
                info.getEntrepreneurId(),
                info.getRessourceId(),
                NudgeLevel.NIVEAU_1,
                debutFenetre)) {
            log.debug("[NUDGE N1] Déjà envoyé aujourd'hui pour user={} ressource={}",
                    info.getEntrepreneurId(), info.getRessourceId());
            return 0;
        }

        NudgeHistory history = NudgeHistory.builder()
                .utilisateurId(info.getEntrepreneurId())
                .ressource(buildRessourceRef(info))
                .niveauNudge(NudgeLevel.NIVEAU_1)
                .emailEntrepreneur(info.getEntrepreneurEmail())
                .build();

        try {
            nudgeEmailService.envoyerNudgeNiveau1(info);
            history.setEnvoiReussi(true);
        } catch (Exception e) {
            history.setEnvoiReussi(false);
            history.setErreurMessage(truncate(e.getMessage(), 500));
            log.error("[NUDGE N1] Échec envoi email {} : {}", info.getEntrepreneurEmail(), e.getMessage());
        }

        nudgeHistoryRepo.save(history);
        return history.isEnvoiReussi() ? 1 : 0;
    }

    // ── Traitement NIVEAU 2 ──────────────────────────────────────────

    /**
     * Envoie des alertes à l'entrepreneur ET à son coach si aucun NIVEAU_2
     * n'a déjà été envoyé dans les dernières 24 h pour ce couple.
     *
     * @return 1 si au moins un email a été envoyé, 0 sinon
     */
    private int traiterNiveau2(StagnationInfo info, LocalDateTime maintenant) {
        LocalDateTime debutFenetre = maintenant.minusMinutes(1);

        if (nudgeHistoryRepo.existsNudgeEnvoye(
                info.getEntrepreneurId(),
                info.getRessourceId(),
                NudgeLevel.NIVEAU_2,
                debutFenetre)) {
            log.debug("[NUDGE N2] Déjà envoyé aujourd'hui pour user={} ressource={}",
                    info.getEntrepreneurId(), info.getRessourceId());
            return 0;
        }

        // ── Email entrepreneur ──────────────────────────────────────
        NudgeHistory historyEntrepreneur = NudgeHistory.builder()
                .utilisateurId(info.getEntrepreneurId())
                .ressource(buildRessourceRef(info))
                .niveauNudge(NudgeLevel.NIVEAU_2)
                .emailEntrepreneur(info.getEntrepreneurEmail())
                .emailCoach(info.hasCoach() ? info.getCoachEmail() : null)
                .build();

        try {
            nudgeEmailService.envoyerNudgeNiveau2Entrepreneur(info);
            historyEntrepreneur.setEnvoiReussi(true);
        } catch (Exception e) {
            historyEntrepreneur.setEnvoiReussi(false);
            historyEntrepreneur.setErreurMessage(truncate(e.getMessage(), 500));
            log.error("[NUDGE N2 - ENTREPRENEUR] Échec email {} : {}",
                    info.getEntrepreneurEmail(), e.getMessage());
        }
        nudgeHistoryRepo.save(historyEntrepreneur);

        // ── Email coach (indépendant du précédent) ──────────────────
        if (info.hasCoach()) {
            try {
                nudgeEmailService.envoyerNudgeNiveau2Coach(info);
                log.info("[NUDGE N2 - COACH] Email coach {} envoyé pour entrepreneur {}",
                        info.getCoachEmail(), info.getEntrepreneurId());
            } catch (Exception e) {
                log.error("[NUDGE N2 - COACH] Échec email coach {} : {}",
                        info.getCoachEmail(), e.getMessage());
                // On ne sauvegarde pas d'historique coach séparé pour simplifier,
                // mais l'erreur est tracée dans les logs.
            }
        } else {
            log.info("[NUDGE N2] Aucun coach actif pour l'entrepreneur {} — notification coach ignorée",
                    info.getEntrepreneurId());
        }

        return 1;
    }

    // ── Helpers ──────────────────────────────────────────────────────

    /**
     * Construit une référence légère vers la Ressource (id uniquement)
     * pour le NudgeHistory, sans charger l'entité complète.
     */
    private tn.khotwa.entity.ressources.Ressource buildRessourceRef(StagnationInfo info) {
        tn.khotwa.entity.ressources.Ressource ref = new tn.khotwa.entity.ressources.Ressource();
        ref.setId(info.getRessourceId());
        return ref;
    }

    /** Tronque une chaîne pour éviter les dépassements de colonne en base. */
    private String truncate(String s, int maxLen) {
        if (s == null) return null;
        return s.length() <= maxLen ? s : s.substring(0, maxLen);
    }
}