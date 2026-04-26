package tn.khotwa.dto.projet;

import lombok.Builder;
import lombok.Data;
import tn.khotwa.enums.projectEnum.EtatValidationProjet;
import tn.khotwa.enums.projectEnum.ProjetCorrectionStatut;
import tn.khotwa.enums.projectEnum.SecteurProjet;
import tn.khotwa.enums.projectEnum.StadeProjet;
import tn.khotwa.enums.projectEnum.StatutProjet;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Builder
public class ProjetResponseDto {
    private Long id;
    private String nomStartup;
    private String description;
    private SecteurProjet secteur;
    private String problemeAdresse;
    private String solutionProposee;
    private String businessModel;
    private StadeProjet stadeProjet;
    private String innovationDescription;
    private String scalabiliteDescription;
    private boolean pocDisponible;
    private LocalDate dateDebutProjet;
    private LocalDate dateFinProjet;
    private LocalDateTime dateCreation;
    private LocalDateTime dateSoumission;
    private LocalDateTime dateDerniereMiseAJour;
    private LocalDateTime dateArchivage;
    private StatutProjet statutProjet;
    private EtatValidationProjet etatValidation;
    private String commentaireCorrectionCoach;
    private LocalDateTime dateDemandeCorrection;
    private ProjetCorrectionStatut statutCorrectionProjet;
    private boolean correctionResoumiseEnAttenteCoach;
    private int scoreDisciplineGlobal;
    private Long entrepreneurId;
    private String entrepreneurNomAffiche;
    private Long adminId;

    // New field: true only if a project-level correction is required
    private boolean projectCorrectionRequired;
}
