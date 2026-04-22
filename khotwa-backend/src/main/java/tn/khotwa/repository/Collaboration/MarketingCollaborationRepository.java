package tn.khotwa.repository.Collaboration;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import tn.khotwa.entity.Collaboration.MarketingCollaboration;
import tn.khotwa.enums.Collaboration.CollaborationStatus;
import tn.khotwa.enums.Collaboration.MarketingCollaborationStatus;

public interface MarketingCollaborationRepository extends JpaRepository<MarketingCollaboration, Long> {

    List<MarketingCollaboration> findAllByCollaborationIdOrderByCreatedAtDesc(Long collaborationId);

    List<MarketingCollaboration> findAllByCollaboration_Project_IdOrderByCreatedAtDesc(Long projectId);

    long countByStatusAndCollaboration_Status(
            MarketingCollaborationStatus status,
            CollaborationStatus collaborationStatus
    );

    long countByCollaboration_Project_IdAndCollaboration_Status(Long projectId, CollaborationStatus collaborationStatus);

    long countByCollaboration_Project_IdAndCollaboration_StatusAndStatus(
            Long projectId,
            CollaborationStatus collaborationStatus,
            MarketingCollaborationStatus status
    );

    @Query("""
        select campaign
        from MarketingCollaboration campaign
        where campaign.status = tn.khotwa.enums.Collaboration.MarketingCollaborationStatus.ACTIVE
          and campaign.collaboration.status = tn.khotwa.enums.Collaboration.CollaborationStatus.ACTIVE
        order by campaign.createdAt desc
        """)
    List<MarketingCollaboration> findActiveMarketingCampaigns();
}
