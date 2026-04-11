package tn.khotwa.biblio.dto.projet;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import tn.khotwa.biblio.enums.StadeProjet;

@Data
public class ProjetUpdateRequestDto {
    @NotBlank
    private String nomStartup;
    private String description;
    private String secteur;
    @NotBlank
    private String problemeAdresse;
    @NotBlank
    private String solutionProposee;
    @NotBlank
    private String businessModel;
    @NotNull
    private StadeProjet stadeProjet;
    private String innovationDescription;
    private String scalabiliteDescription;
    private boolean pocDisponible;
}
