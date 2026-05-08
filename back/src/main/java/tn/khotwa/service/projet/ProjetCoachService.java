package tn.khotwa.service.projet;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.khotwa.dto.projet.AffectationCoachRequestDto;
import tn.khotwa.dto.projet.AffectationCoachMultipleRequestDto;
import tn.khotwa.dto.projet.ProjetCoachResponseDto;
import tn.khotwa.dto.projet.ReaffectationCoachRequestDto;
import tn.khotwa.dto.messaging.NotificationDTO;
import tn.khotwa.entity.NotificationType;
import tn.khotwa.entity.projet.Projet;
import tn.khotwa.entity.projet.ProjetCoach;
import tn.khotwa.enums.projectEnum.RoleCoachProjet;
import tn.khotwa.exception.BusinessException;
import tn.khotwa.config.websocket.WebSocketEventPublisher;
import tn.khotwa.repository.projet.ProjetCoachRepository;
import tn.khotwa.repository.projet.ProjetRepository;
import tn.khotwa.repository.user.UserRepository;
import tn.khotwa.service.messaging.MessageService;
import tn.khotwa.service.messaging.NotificationService;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProjetCoachService {

    private final ProjetCoachRepository projetCoachRepository;
    private final ProjetRepository projetRepository;
    private final UserRepository userRepository;
    private final DtoMapper mapper;
    private final MessageService messageService;
    private final NotificationService notificationService;
    private final WebSocketEventPublisher eventPublisher;

    @Transactional
    public ProjetCoachResponseDto affecterCoach(Long projetId, AffectationCoachRequestDto dto) {
        return affecterCoachInternal(projetId, dto, true);
    }

    @Transactional
    public ProjetCoachResponseDto affecterCoachInternal(Long projetId, AffectationCoachRequestDto dto, boolean createDirectConversation) {
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

        ProjetCoachResponseDto response = mapper.toProjetCoachResponse(projetCoachRepository.save(affectation));
        Long groupConversationId = synchronizeProjectConversation(projet, dto.getAdminId());
        notifyAssignment(projet, dto.getAdminId(), dto.getCoachId(), createDirectConversation, groupConversationId);

        return response;
    }

    @Transactional
    public List<ProjetCoachResponseDto> affecterCoachs(Long projetId, AffectationCoachMultipleRequestDto dto) {
        List<ProjetCoachResponseDto> result = new ArrayList<>();

        for (AffectationCoachMultipleRequestDto.CoachSelectionDto coachSelection : dto.getCoachs()) {
            AffectationCoachRequestDto affectation = new AffectationCoachRequestDto();
            affectation.setAdminId(dto.getAdminId());
            affectation.setCoachId(coachSelection.getCoachId());
            affectation.setRoleCoachProjet(coachSelection.getRoleCoachProjet());
            result.add(affecterCoachInternal(projetId, affectation, false));
        }

        Projet projet = projetRepository.findById(projetId)
                .orElseThrow(() -> new BusinessException("Projet introuvable"));
        Long groupConversationId = synchronizeProjectConversation(projet, dto.getAdminId());
        notifyEntrepreneurCoachesAssigned(projet, dto.getAdminId(), groupConversationId);

        return result;
    }

    @Transactional
    public ProjetCoachResponseDto reaffecterCoach(Long projetId, ReaffectationCoachRequestDto dto) {
        ProjetCoach ancienne = projetCoachRepository.findByProjetIdAndCoachIdAndActifTrue(projetId, dto.getAncienCoachId())
                .orElseThrow(() -> new BusinessException("Affectation active introuvable"));

        boolean replacingSameRole = ancienne.getRoleCoachProjet() == dto.getRoleCoachProjet();
        if (replacingSameRole) {
            ancienne.setActif(false);
            projetCoachRepository.save(ancienne);
            Projet projet = projetRepository.findById(projetId)
                    .orElseThrow(() -> new BusinessException("Projet introuvable"));
            notifyUnassignment(projet, dto.getAdminId(), ancienne.getCoachId());
        }

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
        Projet projet = projetRepository.findById(affectation.getProjetId())
                .orElseThrow(() -> new BusinessException("Projet introuvable"));
        notifyUnassignment(projet, affectation.getAffecteParAdminId(), affectation.getCoachId());
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

    private Long synchronizeProjectConversation(Projet projet, Long adminId) {
        Long entrepreneurId = projet.getEntrepreneurId();
        if (entrepreneurId == null) return null;

        LinkedHashSet<Long> participantSet = new LinkedHashSet<>();
        participantSet.add(entrepreneurId);
        participantSet.addAll(
                projetCoachRepository.findByProjetIdAndActifTrue(projet.getId()).stream()
                        .map(ProjetCoach::getCoachId)
                        .collect(Collectors.toSet())
        );
        if (participantSet.size() <= 1) return null;

        List<Long> participantIds = new ArrayList<>(participantSet);
        String projectName = projet.getNomStartup() == null ? String.valueOf(projet.getId()) : projet.getNomStartup();
        var group = messageService.ensureGroupConversationByProject(
                projet.getId(),
                adminId,
                "Project " + projectName + " Coaching Group",
                participantIds
        );
        messageService.sendSystemMessageToConversation(
                group.getId(),
                adminId,
                "Coaching assignment updated for project " + projectName + "."
        );
        return group.getId();
    }

    private void notifyAssignment(Projet projet, Long adminId, Long coachId, boolean notifyEntrepreneur, Long conversationId) {
        String projectName = projet.getNomStartup() == null ? ("Project " + projet.getId()) : projet.getNomStartup();
        Long entrepreneurId = projet.getEntrepreneurId();
        if (notifyEntrepreneur && entrepreneurId != null) {
            NotificationDTO entrepreneurNotif = notificationService.createNotification(
                    entrepreneurId,
                    adminId,
                    conversationId,
                    "New coaches have been assigned to your project \"" + projectName + "\".",
                    NotificationType.PROJECT_ASSIGNMENT
            );
            eventPublisher.publishNotification(entrepreneurNotif);
        }
        NotificationDTO coachNotif = notificationService.createNotification(
                coachId,
                adminId,
                conversationId,
                "You have been assigned to project \"" + projectName + "\".",
                NotificationType.PROJECT_ASSIGNMENT
        );
        eventPublisher.publishNotification(coachNotif);
    }

    private void notifyEntrepreneurCoachesAssigned(Projet projet, Long adminId, Long conversationId) {
        Long entrepreneurId = projet.getEntrepreneurId();
        if (entrepreneurId == null) return;
        String projectName = projet.getNomStartup() == null ? ("Project " + projet.getId()) : projet.getNomStartup();
        NotificationDTO entrepreneurNotif = notificationService.createNotification(
                entrepreneurId,
                adminId,
                conversationId,
                "New coaches have been assigned to your project \"" + projectName + "\".",
                NotificationType.PROJECT_ASSIGNMENT
        );
        eventPublisher.publishNotification(entrepreneurNotif);
    }

    private void notifyUnassignment(Projet projet, Long adminId, Long coachId) {
        String projectName = projet.getNomStartup() == null ? ("Project " + projet.getId()) : projet.getNomStartup();
        NotificationDTO coachNotif = notificationService.createNotification(
                coachId,
                adminId,
                null,
                "You have been unassigned from project \"" + projectName + "\".",
                NotificationType.PROJECT_UNASSIGNED
        );
        eventPublisher.publishNotification(coachNotif);
    }
}