package tn.khotwa.dto;

import lombok.Data;

@Data
public class TransitionProjetRequestDto {
    private Long actorId;
    private String commentaire;
    private String justification;
}
