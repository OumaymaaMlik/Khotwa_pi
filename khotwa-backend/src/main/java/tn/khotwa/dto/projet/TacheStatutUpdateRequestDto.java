package tn.khotwa.dto.projet;

import jakarta.validation.constraints.NotNull;
import lombok.Data;
import tn.khotwa.enums.projectEnum.StatutTache;

@Data
public class TacheStatutUpdateRequestDto {
    @NotNull
    private StatutTache statutTache;
    private String justificationEntrepreneur;
    private String commentaireCoach;
}
