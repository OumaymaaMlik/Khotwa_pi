package tn.khotwa.DTO.talent;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AppliedOfferDTO {
    private Long candidatureId;
    private Long annonceId;
    private String titreAnnonce;
    private String typePoste;
    private String localisation;
    private Double matchingScore;
    private String dateCandidature;
    private String statut;
    private Boolean contactEntrepreneur;
    private String dateContactEntrepreneur;
}
