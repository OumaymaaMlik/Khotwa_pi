package tn.khotwa.dto.talent;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AppliedTalentSummaryDTO {
    private Long talentId;
    private String nom;
    private String prenom;
    private String email;
    private String competences;
    private List<AppliedOfferDTO> offres;
}
