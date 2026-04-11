package tn.khotwa.biblio.service.projet;

import org.springframework.stereotype.Component;
import tn.khotwa.biblio.dto.projet.ProjetCoachResponseDto;
import tn.khotwa.biblio.dto.projet.ProjetResponseDto;
import tn.khotwa.biblio.entity.projet.Projet;
import tn.khotwa.biblio.entity.projet.ProjetCoach;

@Component
public class DtoMapper {

    public ProjetResponseDto toProjetResponse(Projet projet) {
        return ProjetResponseDto.builder()
                .id(projet.getId())
                .nomStartup(projet.getNomStartup())
                .description(projet.getDescription())
                .secteur(projet.getSecteur())
                .problemeAdresse(projet.getProblemeAdresse())
                .solutionProposee(projet.getSolutionProposee())
                .businessModel(projet.getBusinessModel())
                .stadeProjet(projet.getStadeProjet())
                .innovationDescription(projet.getInnovationDescription())
                .scalabiliteDescription(projet.getScalabiliteDescription())
                .pocDisponible(projet.isPocDisponible())
                .dateCreation(projet.getDateCreation())
                .dateSoumission(projet.getDateSoumission())
                .dateDerniereMiseAJour(projet.getDateDerniereMiseAJour())
                .dateArchivage(projet.getDateArchivage())
                .statutProjet(projet.getStatutProjet())
                .etatValidation(projet.getEtatValidation())
                .scoreDisciplineGlobal(projet.getScoreDisciplineGlobal())
                .entrepreneurId(projet.getEntrepreneurId())
                .entrepreneurNomAffiche(projet.getEntrepreneur() != null ? projet.getEntrepreneur().getFirstName() + " " + projet.getEntrepreneur().getLastName() : null)
                .adminId(projet.getAdminId())
                .build();
    }

    public ProjetCoachResponseDto toProjetCoachResponse(ProjetCoach pc) {
        return ProjetCoachResponseDto.builder()
                .id(pc.getId())
                .projetId(pc.getProjetId())
                .coachId(pc.getCoachId())
            .coachNomAffiche(pc.getCoach() != null ? pc.getCoach().getFirstName() + " " + pc.getCoach().getLastName() : null)
                .dateAffectation(pc.getDateAffectation())
                .affecteParAdminId(pc.getAffecteParAdminId())
                .roleCoachProjet(pc.getRoleCoachProjet())
                .motifReaffectation(pc.getMotifReaffectation())
                .actif(pc.isActif())
                .build();
    }
}
