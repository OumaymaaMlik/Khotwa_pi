package tn.khotwa.dto.projet;

import jakarta.validation.constraints.NotNull;
import lombok.Data;
import tn.khotwa.enums.projectEnum.RoleCoachProjet;

@Data
public class AffectationCoachRequestDto {
    @NotNull
    private Long coachId;
    @NotNull
    private Long adminId;
    @NotNull
    private RoleCoachProjet roleCoachProjet;

    private String motifReaffectation;
}
