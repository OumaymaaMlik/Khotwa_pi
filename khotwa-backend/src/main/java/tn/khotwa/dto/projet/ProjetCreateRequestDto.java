package tn.khotwa.dto.projet;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import tn.khotwa.enums.projectEnum.SecteurProjet;
import tn.khotwa.enums.projectEnum.StadeProjet;

import java.time.LocalDate;

@Data
public class ProjetCreateRequestDto {
    @NotBlank
    private String nomStartup;
    private String description;
    @NotNull
    private SecteurProjet secteur;
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
    @NotNull
    private LocalDate dateDebutProjet;
    @NotNull
    private LocalDate dateFinProjet;
}
