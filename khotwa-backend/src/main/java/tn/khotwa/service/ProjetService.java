package tn.khotwa.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.khotwa.dto.ProjetCreateRequestDto;
import tn.khotwa.dto.ProjetResponseDto;
import tn.khotwa.dto.ProjetUpdateRequestDto;
import tn.khotwa.entity.Projet;
import tn.khotwa.enums.EtatValidationProjet;
import tn.khotwa.enums.StatutProjet;
import tn.khotwa.exception.BusinessException;
import tn.khotwa.repository.ProjetRepository;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjetService {

    private final ProjetRepository projetRepository;
    private final DtoMapper mapper;

    @Transactional
    public ProjetResponseDto createProjet(Long entrepreneurId, ProjetCreateRequestDto dto) {
        Projet projet = Projet.builder()
                .nomStartup(dto.getNomStartup())
                .description(dto.getDescription())
                .secteur(dto.getSecteur())
                .problemeAdresse(dto.getProblemeAdresse())
                .solutionProposee(dto.getSolutionProposee())
                .businessModel(dto.getBusinessModel())
                .stadeProjet(dto.getStadeProjet())
                .innovationDescription(dto.getInnovationDescription())
                .scalabiliteDescription(dto.getScalabiliteDescription())
                .pocDisponible(dto.isPocDisponible())
                .dateCreation(LocalDateTime.now())
                .dateDerniereMiseAJour(LocalDateTime.now())
                .statutProjet(StatutProjet.EN_COURS)
                .etatValidation(EtatValidationProjet.BROUILLON)
                .scoreDisciplineGlobal(0)
                .entrepreneurId(entrepreneurId)
                .build();

        return mapper.toProjetResponse(projetRepository.save(projet));
    }

    @Transactional
    public ProjetResponseDto updateProjetBrouillon(Long projetId, Long entrepreneurId, ProjetUpdateRequestDto dto) {
        Projet projet = getOwnedProjet(projetId, entrepreneurId);

        if (projet.getEtatValidation() != EtatValidationProjet.BROUILLON) {
            throw new BusinessException("Projet non modifiable dans cet etat");
        }
        if (projet.getStatutProjet() == StatutProjet.ARCHIVE
                || projet.getEtatValidation() == EtatValidationProjet.VALIDE
                || projet.getEtatValidation() == EtatValidationProjet.REFUSE) {
            throw new BusinessException("Projet en lecture seule");
        }

        projet.setNomStartup(dto.getNomStartup());
        projet.setDescription(dto.getDescription());
        projet.setSecteur(dto.getSecteur());
        projet.setProblemeAdresse(dto.getProblemeAdresse());
        projet.setSolutionProposee(dto.getSolutionProposee());
        projet.setBusinessModel(dto.getBusinessModel());
        projet.setStadeProjet(dto.getStadeProjet());
        projet.setInnovationDescription(dto.getInnovationDescription());
        projet.setScalabiliteDescription(dto.getScalabiliteDescription());
        projet.setPocDisponible(dto.isPocDisponible());
        projet.setDateDerniereMiseAJour(LocalDateTime.now());

        return mapper.toProjetResponse(projetRepository.save(projet));
    }

    @Transactional
    public void deleteProjetBrouillon(Long projetId, Long entrepreneurId) {
        Projet projet = getOwnedProjet(projetId, entrepreneurId);

        if (projet.getEtatValidation() != EtatValidationProjet.BROUILLON) {
            throw new BusinessException("Suppression autorisee uniquement pour un brouillon");
        }

        projetRepository.delete(projet);
    }

    public void ensureOwnership(Long projetId, Long entrepreneurId) {
        getOwnedProjet(projetId, entrepreneurId);
    }

    public List<ProjetResponseDto> projetsByEntrepreneur(Long entrepreneurId) {
        return projetRepository.findByEntrepreneurId(entrepreneurId).stream().map(mapper::toProjetResponse).toList();
    }

    public ProjetResponseDto byId(Long projetId) {
        Projet projet = projetRepository.findById(projetId)
                .orElseThrow(() -> new BusinessException("Projet introuvable"));
        return mapper.toProjetResponse(projet);
    }

    public List<ProjetResponseDto> byIds(List<Long> projetIds) {
        return projetIds.stream().distinct().map(this::byId).toList();
    }

    private Projet getOwnedProjet(Long projetId, Long entrepreneurId) {
        Projet projet = projetRepository.findById(projetId)
                .orElseThrow(() -> new BusinessException("Projet introuvable"));

        if (!projet.getEntrepreneurId().equals(entrepreneurId)) {
            throw new BusinessException("Projet non autorise pour cet entrepreneur");
        }

        return projet;
    }
}
