package tn.khotwa.dto.projet;

import jakarta.validation.constraints.NotNull;
import lombok.Data;
import tn.khotwa.enums.StatutTache;

@Data
public class SousTacheStatutUpdateRequestDto {
    @NotNull
    private StatutTache statutSousTache;
    private String justificationEntrepreneur;
    private String commentaireCoach;
}
