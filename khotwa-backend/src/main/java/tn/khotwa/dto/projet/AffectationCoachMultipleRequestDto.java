package tn.khotwa.dto.projet;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import tn.khotwa.enums.projectEnum.RoleCoachProjet;


import java.util.List;

@Data
public class AffectationCoachMultipleRequestDto {

    @NotNull
    private Long adminId;

    @NotEmpty
    @Valid
    private List<CoachSelectionDto> coachs;

    @Data
    public static class CoachSelectionDto {
        @NotNull
        private Long coachId;

        @NotNull
        private RoleCoachProjet roleCoachProjet;
    }
}
