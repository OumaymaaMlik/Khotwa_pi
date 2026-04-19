package tn.khotwa.dto.projet;

import lombok.Data;

@Data
public class TransitionProjetRequestDto {
    private Long actorId;
    private String commentaire;
    private String justification;
}
