package tn.khotwa.dto.talent;

import lombok.*;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MatchingResponseDTO {
    private Long talentId;
    private String nomTalent;
    private String emailTalent;
    private Long annonceId;
    private String titreAnnonce;
    private double matchingScore;
    private List<String> competencesCommunes;
    private List<String> competencesManquantes;
    private String niveau;
}
