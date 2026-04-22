package tn.khotwa.repository.Collaboration;

import java.util.Optional;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import tn.khotwa.entity.Collaboration.SharedResource;
import tn.khotwa.enums.Collaboration.AvailabilityStatus;
import tn.khotwa.enums.Collaboration.CollaborationStatus;

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
