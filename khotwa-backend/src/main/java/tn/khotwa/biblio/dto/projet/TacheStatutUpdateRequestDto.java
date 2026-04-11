package tn.khotwa.biblio.dto.projet;

import jakarta.validation.constraints.NotNull;
import lombok.Data;
import tn.khotwa.biblio.enums.StatutTache;

@Data
public class TacheStatutUpdateRequestDto {
    @NotNull
    private StatutTache statutTache;
    private String justificationEntrepreneur;
    private String commentaireCoach;
}
