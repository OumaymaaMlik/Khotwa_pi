package tn.khotwa.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import tn.khotwa.enums.StadeProjet;

@Data
public class ProjetCreateRequestDto {
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
