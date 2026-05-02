package tn.khotwa.service.projet;

import org.springframework.stereotype.Component;
import tn.khotwa.dto.projet.ProjetCoachResponseDto;
import tn.khotwa.dto.projet.ProjetResponseDto;
import tn.khotwa.entity.projet.Projet;
import tn.khotwa.entity.projet.ProjetCoach;
import tn.khotwa.entity.user.User;


@Component
public class DtoMapper {

    private String resolveDisplayName(User user) {
        if (user == null) {
            return null;
        }
        String nomAffiche = user.getNomAffiche();
        if (nomAffiche != null && !nomAffiche.trim().isEmpty()) {
            return nomAffiche.trim();
        }
        String firstName = user.getFirstName() != null ? user.getFirstName().trim() : "";
        String lastName = user.getLastName() != null ? user.getLastName().trim() : "";
        String fullName = (firstName + " " + lastName).trim();
        if (!fullName.isEmpty()) {
            return fullName;
        }
        return user.getEmailAddress();
    }

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
                .dateDebutProjet(projet.getDateDebutProjet())
                .dateFinProjet(projet.getDateFinProjet())
                .dateCreation(projet.getDateCreation())
                .dateSoumission(projet.getDateSoumission())
                .dateDerniereMiseAJour(projet.getDateDerniereMiseAJour())
                .dateArchivage(projet.getDateArchivage())
                .statutProjet(projet.getStatutProjet())
                .etatValidation(projet.getEtatValidation())
                .scoreDisciplineGlobal(projet.getScoreDisciplineGlobal())
                .entrepreneurId(projet.getEntrepreneurId())
                .entrepreneurNomAffiche(resolveDisplayName(projet.getEntrepreneur()))
                .adminId(projet.getAdminId())
                .build();
    }

    public ProjetCoachResponseDto toProjetCoachResponse(ProjetCoach pc) {
        return ProjetCoachResponseDto.builder()
                .id(pc.getId())
                .projetId(pc.getProjetId())
                .coachId(pc.getCoachId())
                .coachNomAffiche(resolveDisplayName(pc.getCoach()))
                .dateAffectation(pc.getDateAffectation())
                .affecteParAdminId(pc.getAffecteParAdminId())
                .roleCoachProjet(pc.getRoleCoachProjet())
                .motifReaffectation(pc.getMotifReaffectation())
                .actif(pc.isActif())
                .build();
    }
}
