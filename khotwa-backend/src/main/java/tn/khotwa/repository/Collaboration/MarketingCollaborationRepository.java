package tn.khotwa.repository.collaboration;

import java.util.Collection;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import tn.khotwa.entity.collaboration.Collaboration;
import tn.khotwa.entity.collaboration.MarketingCollaboration;
import tn.khotwa.enums.collaboration.CollaborationStatus;
import tn.khotwa.enums.collaboration.MarketingCollaborationStatus;

public interface MarketingCollaborationRepository extends JpaRepository<MarketingCollaboration, Long> {

    boolean existsByCollaborationAndStatusIn(
            Collaboration collaboration,
            Collection<MarketingCollaborationStatus> statuses
    );

    List<MarketingCollaboration> findAllByCollaborationIdOrderByCreatedAtDesc(Long collaborationId);

    List<MarketingCollaboration> findAllByCollaboration_Project_IdOrderByCreatedAtDesc(Long projectId);

    long countByStatus(MarketingCollaborationStatus status);

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
        where campaign.status = tn.khotwa.enums.collaboration.MarketingCollaborationStatus.ACTIVE
          and campaign.collaboration.status = tn.khotwa.enums.collaboration.CollaborationStatus.ACTIVE
        order by campaign.createdAt desc
        """)
    List<MarketingCollaboration> findActiveMarketingCampaigns();
}

