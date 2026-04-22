package tn.khotwa.repository.collaboration;

import java.util.Optional;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import tn.khotwa.entity.collaboration.SharedResource;
import tn.khotwa.enums.collaboration.AvailabilityStatus;
import tn.khotwa.enums.collaboration.CollaborationStatus;

public interface SharedResourceRepository extends JpaRepository<SharedResource, Long> {

    Optional<SharedResource> findByIdAndCollaborationId(Long id, Long collaborationId);

    List<SharedResource> findAllByCollaborationIdOrderByCreatedAtDesc(Long collaborationId);

    List<SharedResource> findAllByCollaboration_Project_IdOrderByCreatedAtDesc(Long projectId);

    long countByCollaboration_Project_IdAndCollaboration_Status(Long projectId, CollaborationStatus collaborationStatus);

    long countByCollaboration_Project_IdAndCollaboration_StatusAndAvailabilityStatus(
            Long projectId,
            CollaborationStatus collaborationStatus,
            AvailabilityStatus availabilityStatus
    );
}

