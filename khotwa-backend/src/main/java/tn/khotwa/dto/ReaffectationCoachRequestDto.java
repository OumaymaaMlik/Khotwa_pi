package tn.khotwa.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Data;
import tn.khotwa.enums.RoleCoachProjet;
import jakarta.validation.constraints.NotBlank;

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
