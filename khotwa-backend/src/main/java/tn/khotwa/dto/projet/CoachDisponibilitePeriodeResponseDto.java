package tn.khotwa.dto.projet;

import lombok.Builder;
import lombok.Data;
import tn.khotwa.enums.projectEnum.DisponibilitePeriodeStatut;


import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Builder
public class CoachDisponibilitePeriodeResponseDto {
    private Long id;
    private Long coachId;
    private LocalDate dateDebut;
    private LocalDate dateFin;
    private DisponibilitePeriodeStatut statut;
    private String commentaire;
    private boolean actif;
    private LocalDateTime dateCreation;
    private LocalDateTime dateDerniereMiseAJour;
}
