package tn.khotwa.service.projet;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.khotwa.DTO.projet.CoachDisponibilitePeriodeRequestDto;
import tn.khotwa.DTO.projet.CoachDisponibilitePeriodeResponseDto;
import tn.khotwa.entity.projet.CoachDisponibilitePeriode;
import tn.khotwa.enums.User.Role;
import tn.khotwa.exception.BusinessException;
import tn.khotwa.repository.User.UserRepository;
import tn.khotwa.repository.projet.CoachDisponibilitePeriodeRepository;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CoachDisponibilitePeriodeService {

    private final CoachDisponibilitePeriodeRepository repository;
    private final UserRepository userRepository;

    public List<CoachDisponibilitePeriodeResponseDto> listByCoachId(Long coachId) {
        return repository.findByCoachIdAndActifTrue(coachId)
                .stream()
                .map(this::toDto)
                .toList();
    }

    @Transactional
    public CoachDisponibilitePeriodeResponseDto create(Long coachId, CoachDisponibilitePeriodeRequestDto dto) {
        var coach = userRepository.findById(coachId)
                .orElseThrow(() -> new BusinessException("Coach introuvable"));

        if (coach.getRole() != Role.COACH) {
            throw new BusinessException("L'utilisateur cible n'est pas un coach");
        }

        if (dto.getDateFin().isBefore(dto.getDateDebut())) {
            throw new BusinessException("La date de fin doit etre posterieure ou egale a la date de debut");
        }

        LocalDateTime now = LocalDateTime.now();
        CoachDisponibilitePeriode created = repository.save(CoachDisponibilitePeriode.builder()
                .coachId(coachId)
                .dateDebut(dto.getDateDebut())
                .dateFin(dto.getDateFin())
                .statut(dto.getStatut())
                .commentaire(dto.getCommentaire())
                .actif(true)
                .dateCreation(now)
                .dateDerniereMiseAJour(now)
                .build());

        return toDto(created);
    }

    @Transactional
    public void deactivate(Long disponibiliteId) {
        CoachDisponibilitePeriode found = repository.findById(disponibiliteId)
                .orElseThrow(() -> new BusinessException("Periode de disponibilite introuvable"));

        found.setActif(false);
        found.setDateDerniereMiseAJour(LocalDateTime.now());
        repository.save(found);
    }

    private CoachDisponibilitePeriodeResponseDto toDto(CoachDisponibilitePeriode row) {
        return CoachDisponibilitePeriodeResponseDto.builder()
                .id(row.getId())
                .coachId(row.getCoachId())
                .dateDebut(row.getDateDebut())
                .dateFin(row.getDateFin())
                .statut(row.getStatut())
                .commentaire(row.getCommentaire())
                .actif(row.isActif())
                .dateCreation(row.getDateCreation())
                .dateDerniereMiseAJour(row.getDateDerniereMiseAJour())
                .build();
    }
}
