package tn.khotwa.DTO.projet;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CoachDisponibiliteDto {
    private Long coachId;
    private String nomAffiche;
    private String specialite;
    private String secteur;
    private String disponibilite;
    private long chargeActuelle;
    private long nombreProjetsActifs;
}
