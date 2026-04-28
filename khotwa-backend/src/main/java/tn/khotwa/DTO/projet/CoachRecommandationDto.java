package tn.khotwa.DTO.projet;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CoachRecommandationDto {
    private Long coachId;
    private String coachNomAffiche;
    private double scoreGlobal;
    private double scoreTemps;
    private double scoreMetier;
    private double scoreDisponibilite;
    private double scoreEquite;
    private long chargeActuelle;
}
