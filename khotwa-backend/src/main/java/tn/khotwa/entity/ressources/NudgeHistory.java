package tn.khotwa.entity.ressources;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import tn.khotwa.enums.NudgeLevel;

import java.time.LocalDateTime;

/**
 * Historique des relances envoyées pour un couple (entrepreneur, ressource).
 *
 * Objectifs :
 *  - Éviter le double-envoi si le scheduler tourne plusieurs fois dans la journée.
 *  - Tracer chaque nudge pour l'audit et les métriques d'engagement.
 *  - Permettre le calcul de la fenêtre d'escalade (N1 → N2).
 *
 * Règle d'unicité : un seul nudge par (utilisateurId, ressourceId, niveauNudge, dateNudge::date).
 * On part sur la colonne `date_nudge` et on filtre par date côté JPQL.
 */
@Entity
@Table(
        name = "nudge_history",
        indexes = {
                @Index(name = "idx_nudge_user_ressource", columnList = "utilisateur_id, ressource_id"),
                @Index(name = "idx_nudge_date",           columnList = "date_nudge")
        }
)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class NudgeHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** ID de l'entrepreneur concerné (FK logique vers User). */
    @Column(name = "utilisateur_id", nullable = false)
    private Long utilisateurId;

    /** Ressource sur laquelle l'inactivité a été détectée. */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ressource_id", nullable = false)
    private Ressource ressource;

    /** Niveau de la relance envoyée. */
    @Enumerated(EnumType.STRING)
    @Column(name = "niveau_nudge", nullable = false, length = 10)
    private NudgeLevel niveauNudge;

    /** E-mail de l'entrepreneur (snapshot pour l'historique). */
    @Column(name = "email_entrepreneur", nullable = false, length = 255)
    private String emailEntrepreneur;

    /** E-mail du coach notifié (null pour NIVEAU_1). */
    @Column(name = "email_coach", length = 255)
    private String emailCoach;

    /** Timestamp de l'envoi, généré automatiquement. */
    @CreationTimestamp
    @Column(name = "date_nudge", nullable = false, updatable = false)
    private LocalDateTime dateNudge;

    /** Vrai si le mail a été envoyé sans erreur technique. */
    @Column(name = "envoi_reussi", nullable = false)
    @Builder.Default
    private boolean envoiReussi = true;

    /** Message d'erreur éventuel (SMTP timeout, etc.). */
    @Column(name = "erreur_message", length = 500)
    private String erreurMessage;
}