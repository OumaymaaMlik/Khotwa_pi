package tn.khotwa.DTO.admin;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AdminDashboardDTO {

    private Long totalOffres;
    private Long totalCandidats;
    private Long offresAvecCandidatures;
    private Double tauxContactEntrepreneurs; // in percentage
    private Double tempsMoyenReponse; // in hours or days

    private List<OffreActiveDTO> offresPlusActives;

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class OffreActiveDTO {
        private Long id;
        private String titre;
        private Long nombreCandidatures;
    }
}
