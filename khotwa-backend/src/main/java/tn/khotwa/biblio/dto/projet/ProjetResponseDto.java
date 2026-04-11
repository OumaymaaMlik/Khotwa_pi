package tn.khotwa.biblio.dto.projet;

import lombok.Builder;
import lombok.Data;
import tn.khotwa.biblio.enums.EtatValidationProjet;
import tn.khotwa.biblio.enums.StadeProjet;
import tn.khotwa.biblio.enums.StatutProjet;

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
