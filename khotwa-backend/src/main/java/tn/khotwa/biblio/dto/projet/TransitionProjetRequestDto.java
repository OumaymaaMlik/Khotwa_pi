package tn.khotwa.biblio.dto.projet;

import lombok.Data;

@Data
public class TransitionProjetRequestDto {
    private Long actorId;
    private String commentaire;
    private String justification;
}
