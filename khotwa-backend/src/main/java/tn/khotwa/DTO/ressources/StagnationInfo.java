package tn.khotwa.DTO.ressources;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * Résultat de la requête JPQL de détection des progressions stagnantes.
 *
 * Contient toutes les informations nécessaires pour envoyer le nudge
 * sans effectuer de requêtes supplémentaires : entrepreneur, coach, ressource.
 *
 * Hydratation en une seule passe SQL via JOIN (performances < 2 s).
 */
@Getter
@AllArgsConstructor
public class StagnationInfo {

    // ── Entrepreneur ─────────────────────────────────────────────────
    private final Long   entrepreneurId;
    private final String entrepreneurPrenom;
    private final String entrepreneurNom;
    private final String entrepreneurEmail;

    // ── Coach (peut être null si l'entrepreneur n'a pas de projet affecté) ──
    private final Long   coachId;
    private final String coachPrenom;
    private final String coachNom;
    private final String coachEmail;

    // ── Ressource ────────────────────────────────────────────────────
    private final Long   ressourceId;
    private final String ressourceTitre;

    // ── Métriques de stagnation ───────────────────────────────────────
    /** Heure du dernier accès à la ressource. */
    private final java.time.LocalDateTime dernierAcces;

    /** Pourcentage de progression actuel (0–99, car COMPLETED est exclu). */
    private final Integer pourcentage;

    // ── Helpers ──────────────────────────────────────────────────────

    public boolean hasCoach() {
        return coachId != null && coachEmail != null && !coachEmail.isBlank();
    }

    public String getNomCompletEntrepreneur() {
        return entrepreneurPrenom + " " + entrepreneurNom;
    }

    public String getNomCompletCoach() {
        if (!hasCoach()) return null;
        return coachPrenom + " " + coachNom;
    }
}