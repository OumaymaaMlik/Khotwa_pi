package tn.khotwa.service.collaboration;

import java.time.LocalDateTime;
import java.util.EnumSet;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.khotwa.entity.collaboration.Collaboration;
import tn.khotwa.entity.collaboration.MarketingCollaboration;
import tn.khotwa.entity.User.User;
import tn.khotwa.enums.collaboration.CampaignType;
import tn.khotwa.enums.collaboration.CollaborationType;
import tn.khotwa.enums.collaboration.MarketingCollaborationStatus;
import tn.khotwa.exception.collaboration.BusinessException;
import tn.khotwa.exception.collaboration.ResourceNotFoundException;
import tn.khotwa.repository.collaboration.MarketingCollaborationRepository;
import tn.khotwa.service.User.CurrentUserService;

@Service
@RequiredArgsConstructor
@Transactional
public class MarketingCollaborationService {

    private static final EnumSet<MarketingCollaborationStatus> OPEN_CAMPAIGN_STATUSES = EnumSet.of(
            MarketingCollaborationStatus.DRAFT,
            MarketingCollaborationStatus.ACTIVE
    );

    private final MarketingCollaborationRepository marketingCollaborationRepository;
    private final CollaborationService collaborationService;
    private final CurrentUserService currentUserService;
    private final CollaborationAuthorizationService authorizationService;

    public MarketingCollaboration createMarketingCollaboration(Long collaborationId, String title, String description, String objective, CampaignType campaignType, LocalDateTime startDate, LocalDateTime endDate) {
        Collaboration collaboration = collaborationService.getCollaboration(collaborationId);
        User actor = currentUserService.requireCurrentUser();

        collaborationService.ensureCollaborationType(
                collaboration,
                CollaborationType.MARKETING,
                "Marketing campaigns are only available for MARKETING collaborations."
        );
        authorizationService.checkCanCreateMarketingCollaboration(actor, collaboration);
        collaborationService.ensureWritableCollaboration(collaboration);

        if (title == null || title.trim().isEmpty()) {
            throw new BusinessException("Title is required.");
        }

        if (objective == null || objective.trim().isEmpty()) {
            throw new BusinessException("Objective is required.");
        }

        if (campaignType == null) {
            throw new BusinessException("Campaign type is required.");
        }

        if (marketingCollaborationRepository.existsByCollaborationAndStatusIn(collaboration, OPEN_CAMPAIGN_STATUSES)) {
            throw new BusinessException("This collaboration already has an open marketing campaign.");
        }

        MarketingCollaboration marketingCollaboration = new MarketingCollaboration();
        marketingCollaboration.setCollaboration(collaboration);
        marketingCollaboration.setTitle(title.trim());
        marketingCollaboration.setDescription(description != null ? description.trim() : null);
        marketingCollaboration.setObjective(objective.trim());
        marketingCollaboration.setCampaignType(campaignType);
        marketingCollaboration.setStartDate(startDate);
        marketingCollaboration.setEndDate(endDate);
        marketingCollaboration.setCreatedAt(LocalDateTime.now());

        return marketingCollaborationRepository.save(marketingCollaboration);
    }

    @Transactional(readOnly = true)
    public List<MarketingCollaboration> getMarketingCollaborations(Long collaborationId) {
        Collaboration collaboration = collaborationService.getCollaboration(collaborationId);
        User actor = currentUserService.requireCurrentUser();

        collaborationService.ensureCollaborationType(
                collaboration,
                CollaborationType.MARKETING,
                "Marketing campaigns are only available for MARKETING collaborations."
        );
        authorizationService.checkCanViewCollaboration(actor, collaboration, collaborationService.isMember(collaboration, actor));

        return marketingCollaborationRepository.findAllByCollaborationIdOrderByCreatedAtDesc(collaborationId);
    }

    @Transactional(readOnly = true)
    public MarketingCollaboration getMarketingCollaboration(Long marketingCollaborationId) {
        MarketingCollaboration marketingCollaboration = marketingCollaborationRepository.findById(marketingCollaborationId)
                .orElseThrow(() -> new ResourceNotFoundException("Marketing collaboration not found."));
        collaborationService.ensureCollaborationType(
                marketingCollaboration.getCollaboration(),
                CollaborationType.MARKETING,
                "Marketing campaigns are only available for MARKETING collaborations."
        );
        return marketingCollaboration;
    }

    public MarketingCollaboration updateMarketingCollaborationStatus(
            Long marketingCollaborationId,
            MarketingCollaborationStatus status
    ) {
        MarketingCollaboration marketingCollaboration = getMarketingCollaboration(marketingCollaborationId);
        Collaboration collaboration = marketingCollaboration.getCollaboration();
        User actor = currentUserService.requireCurrentUser();

        authorizationService.checkCanUpdateMarketingCollaborationStatus(actor, marketingCollaboration);
        collaborationService.ensureWritableCollaboration(collaboration);

        if (status == null) {
            throw new BusinessException("Campaign status is required.");
        }

        validateStatusTransition(marketingCollaboration.getStatus(), status);
        marketingCollaboration.setStatus(status);
        return marketingCollaborationRepository.save(marketingCollaboration);
    }

    private void validateStatusTransition(
            MarketingCollaborationStatus currentStatus,
            MarketingCollaborationStatus nextStatus
    ) {
        boolean isAllowed = switch (currentStatus) {
            case DRAFT -> nextStatus == MarketingCollaborationStatus.ACTIVE
                    || nextStatus == MarketingCollaborationStatus.CANCELLED;
            case ACTIVE -> nextStatus == MarketingCollaborationStatus.COMPLETED
                    || nextStatus == MarketingCollaborationStatus.CANCELLED;
            case COMPLETED, CANCELLED -> false;
        };

        if (!isAllowed) {
            throw new BusinessException(
                    "Cannot change marketing campaign status from " + currentStatus + " to " + nextStatus + "."
            );
        }
    }
}

