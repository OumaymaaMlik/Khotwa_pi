package tn.khotwa.dto.projet;

import lombok.Builder;
import lombok.Data;
import tn.khotwa.enums.projectEnum.RoleCoachProjet;


import java.time.LocalDateTime;

@Data
@Builder
public class ProjetCoachResponseDto {
    private Long id;
    private Long projetId;
    private Long coachId;
    private String coachNomAffiche;
    private LocalDateTime dateAffectation;
    private Long affecteParAdminId;
    private RoleCoachProjet roleCoachProjet;
    private String motifReaffectation;
    private boolean actif;
}
