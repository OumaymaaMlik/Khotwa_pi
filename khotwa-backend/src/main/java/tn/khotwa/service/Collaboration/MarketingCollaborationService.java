package tn.khotwa.service.Collaboration;

import java.time.LocalDateTime;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.khotwa.entity.Collaboration.Collaboration;
import tn.khotwa.entity.Collaboration.MarketingCollaboration;
import tn.khotwa.entity.User.User;
import tn.khotwa.enums.Collaboration.CampaignType;
import tn.khotwa.enums.Collaboration.CollaborationType;
import tn.khotwa.exception.Collaboration.BusinessException;
import tn.khotwa.exception.Collaboration.ResourceNotFoundException;
import tn.khotwa.repository.Collaboration.MarketingCollaborationRepository;
import tn.khotwa.service.User.CurrentUserService;

@Service
@RequiredArgsConstructor
@Transactional
public class MarketingCollaborationService {

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
}
