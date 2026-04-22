package tn.khotwa.repository.collaboration;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.khotwa.entity.collaboration.ResourceRequest;
import tn.khotwa.enums.collaboration.CollaborationStatus;
import tn.khotwa.enums.collaboration.ResourceRequestStatus;
import tn.khotwa.enums.collaboration.Urgency;

public interface ResourceRequestRepository extends JpaRepository<ResourceRequest, Long> {

    List<ResourceRequest> findAllByCollaborationIdOrderByCreatedAtDesc(Long collaborationId);

    List<ResourceRequest> findAllByCollaboration_Project_IdOrderByCreatedAtDesc(Long projectId);

    boolean existsByMatchedResource_Id(Long matchedResourceId);

    long countByStatusAndCollaboration_Status(
            ResourceRequestStatus status,
            CollaborationStatus collaborationStatus
    );

    long countByCollaboration_Project_IdAndCollaboration_StatusAndStatus(
            Long projectId,
            CollaborationStatus collaborationStatus,
            ResourceRequestStatus status
    );

    long countByCollaboration_Project_IdAndCollaboration_StatusAndStatusAndUrgency(
            Long projectId,
            CollaborationStatus collaborationStatus,
            ResourceRequestStatus status,
            Urgency urgency
    );

    @Query("""
        select request
        from ResourceRequest request
        where request.status = tn.khotwa.enums.collaboration.ResourceRequestStatus.OPEN
          and request.collaboration.status = tn.khotwa.enums.collaboration.CollaborationStatus.ACTIVE
        order by request.createdAt desc
        """)
    List<ResourceRequest> findOpenResourceRequests();
}

