package tn.khotwa.DTO.talent;

import tn.khotwa.entity.talent.Annonce;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AnnonceResponseDTO {
    private Long id;
    private String titre;
    private String description;
    private Annonce.TypePoste typePoste;
    private String competencesRequises;
    private String localisation;
    private boolean active;
    private String startupNom;
    private Long startupId;
}
