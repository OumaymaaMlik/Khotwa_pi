package tn.khotwa.DTO.projet;

import lombok.Data;

@Data
public class TransitionProjetRequestDto {
    private Long actorId;
    private String commentaire;
    private String justification;
}
