package tn.khotwa.dto.projet;

import jakarta.validation.constraints.NotNull;
import lombok.Data;
import tn.khotwa.enums.projectEnum.DisponibilitePeriodeStatut;


import java.time.LocalDate;

@Data
public class CoachDisponibilitePeriodeRequestDto {
    @NotNull
    private LocalDate dateDebut;
    @NotNull
    private LocalDate dateFin;
    @NotNull
    private DisponibilitePeriodeStatut statut;
    private String commentaire;
}
