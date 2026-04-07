package tn.khotwa.dto;

import lombok.Builder;
import lombok.Data;
import tn.khotwa.enums.EtatValidationProjet;
import tn.khotwa.enums.StadeProjet;
import tn.khotwa.enums.StatutProjet;

import java.time.LocalDateTime;

@Data
@Builder
public class ProjetResponseDto {
    private Long id;
    private String nomStartup;
    private String description;
    private String secteur;
    private String problemeAdresse;
    private String solutionProposee;
    private String businessModel;
    private StadeProjet stadeProjet;
    private String innovationDescription;
    private String scalabiliteDescription;
    private boolean pocDisponible;
    private LocalDateTime dateCreation;
    private LocalDateTime dateSoumission;
    private LocalDateTime dateDerniereMiseAJour;
    private LocalDateTime dateArchivage;
    private StatutProjet statutProjet;
    private EtatValidationProjet etatValidation;
    private int scoreDisciplineGlobal;
    private Long entrepreneurId;
    private String entrepreneurNomAffiche;
    private Long adminId;
}
