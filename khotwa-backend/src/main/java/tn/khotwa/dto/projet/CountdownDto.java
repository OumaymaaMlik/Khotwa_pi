package tn.khotwa.dto.projet;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CountdownDto {
    private Long id;
    private String titre;
    private String type; // "TACHE" ou "SOUS_TACHE"
    private String statut;
    private String dateDebut;
    private String dateFin;
    private Integer joursRestants;   // positif = jours avant deadline, 0 = aujourd'hui, négatif = en retard
    private Integer retardJours;
    private boolean enRetard;
    private boolean urgence;         // true si joursRestants <= 3 et pas encore commencé
    private boolean pasEncoreCommence; // true si statut = A_FAIRE
    private Long parentId;           // tacheId pour sous-tâches, projetId pour tâches
}