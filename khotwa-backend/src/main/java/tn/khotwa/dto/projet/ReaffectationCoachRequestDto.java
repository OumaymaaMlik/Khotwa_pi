package tn.khotwa.dto.projet;

import jakarta.validation.constraints.NotNull;
import lombok.Data;
import jakarta.validation.constraints.NotBlank;
import tn.khotwa.enums.projectEnum.RoleCoachProjet;

@Data
public class ReaffectationCoachRequestDto {
    @NotNull
    private Long ancienCoachId;
    @NotNull
    private Long nouveauCoachId;
    @NotNull
    private Long adminId;
    @NotNull
    private RoleCoachProjet roleCoachProjet;
    @NotBlank
    private String motifReaffectation;
}
