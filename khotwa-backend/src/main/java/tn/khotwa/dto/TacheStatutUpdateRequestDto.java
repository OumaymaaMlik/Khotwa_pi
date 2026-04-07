package tn.khotwa.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Data;
import tn.khotwa.enums.StatutTache;

@Data
public class TacheStatutUpdateRequestDto {
    @NotNull
    private StatutTache statutTache;
    private String justificationEntrepreneur;
    private String commentaireCoach;
}
