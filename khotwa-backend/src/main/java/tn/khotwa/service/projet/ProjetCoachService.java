package tn.khotwa.service.projet;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.khotwa.dto.projet.AffectationCoachRequestDto;
import tn.khotwa.dto.projet.AffectationCoachMultipleRequestDto;
import tn.khotwa.dto.projet.ProjetCoachResponseDto;
import tn.khotwa.dto.projet.ReaffectationCoachRequestDto;
import tn.khotwa.entity.projet.Projet;
import tn.khotwa.entity.projet.ProjetCoach;
import tn.khotwa.enums.projectEnum.RoleCoachProjet;
import tn.khotwa.exception.BusinessException;
import tn.khotwa.repository.projet.ProjetCoachRepository;
import tn.khotwa.repository.projet.ProjetRepository;
import tn.khotwa.repository.UserRepo.UserRepository;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjetCoachService {

    private final ProjetCoachRepository projetCoachRepository;
    private final ProjetRepository projetRepository;
    private final UserRepository userRepository;
    private final DtoMapper mapper;

    @Transactional
    public ProjetCoachResponseDto affecterCoach(Long projetId, AffectationCoachRequestDto dto) {
        Projet projet = projetRepository.findById(projetId)
                .orElseThrow(() -> new BusinessException("Projet introuvable"));

        userRepository.findById(dto.getCoachId())
                .orElseThrow(() -> new BusinessException("Coach introuvable"));

        if (dto.getRoleCoachProjet() == RoleCoachProjet.COACH_PRINCIPAL
                && projetCoachRepository.existsByProjetIdAndRoleCoachProjetAndActifTrue(projetId, RoleCoachProjet.COACH_PRINCIPAL)) {
            throw new BusinessException("Un coach principal actif existe deja pour ce projet");
        }

        ProjetCoach affectation = ProjetCoach.builder()
                .projetId(projet.getId())
                .coachId(dto.getCoachId())
                .affecteParAdminId(dto.getAdminId())
                .dateAffectation(LocalDateTime.now())
                .roleCoachProjet(dto.getRoleCoachProjet())
                .motifReaffectation(dto.getMotifReaffectation())
                .actif(true)
                .build();

        return mapper.toProjetCoachResponse(projetCoachRepository.save(affectation));
    }

    @Transactional
    public List<ProjetCoachResponseDto> affecterCoachs(Long projetId, AffectationCoachMultipleRequestDto dto) {
        List<ProjetCoachResponseDto> result = new ArrayList<>();

        for (AffectationCoachMultipleRequestDto.CoachSelectionDto coachSelection : dto.getCoachs()) {
            AffectationCoachRequestDto affectation = new AffectationCoachRequestDto();
            affectation.setAdminId(dto.getAdminId());
            affectation.setCoachId(coachSelection.getCoachId());
            affectation.setRoleCoachProjet(coachSelection.getRoleCoachProjet());
            result.add(affecterCoach(projetId, affectation));
        }

        return result;
    }

    @Transactional
    public ProjetCoachResponseDto reaffecterCoach(Long projetId, ReaffectationCoachRequestDto dto) {
        ProjetCoach ancienne = projetCoachRepository.findByProjetIdAndCoachIdAndActifTrue(projetId, dto.getAncienCoachId())
                .orElseThrow(() -> new BusinessException("Affectation active introuvable"));

        ancienne.setActif(false);
        projetCoachRepository.save(ancienne);

        AffectationCoachRequestDto request = new AffectationCoachRequestDto();
        request.setCoachId(dto.getNouveauCoachId());
        request.setAdminId(dto.getAdminId());
        request.setRoleCoachProjet(dto.getRoleCoachProjet());
        request.setMotifReaffectation(dto.getMotifReaffectation());
        return affecterCoach(projetId, request);
    }

    @Transactional
    public void desactiverAffectation(Long affectationId) {
        ProjetCoach affectation = projetCoachRepository.findById(affectationId)
                .orElseThrow(() -> new BusinessException("Affectation introuvable"));
        affectation.setActif(false);
        projetCoachRepository.save(affectation);
    }

    public List<ProjetCoachResponseDto> historiqueProjet(Long projetId) {
        return projetCoachRepository.findByProjetId(projetId).stream().map(mapper::toProjetCoachResponse).toList();
    }

    public List<ProjetCoachResponseDto> coachsActifsProjet(Long projetId) {
        return projetCoachRepository.findByProjetIdAndActifTrue(projetId).stream().map(mapper::toProjetCoachResponse).toList();
    }

    public List<ProjetCoachResponseDto> findAffectationsActivesCoach(Long coachId) {
        return projetCoachRepository.findByCoachIdAndActifTrue(coachId).stream().map(mapper::toProjetCoachResponse).toList();
    }
}
