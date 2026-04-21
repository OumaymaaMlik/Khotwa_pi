package tn.khotwa.dto.Collaboration;

import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tn.khotwa.entity.Collaboration.ResourceRequest;
import tn.khotwa.enums.Collaboration.ResourceRequestStatus;
import tn.khotwa.enums.Collaboration.ResourceType;
import tn.khotwa.enums.Collaboration.Urgency;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ResourceRequestDTO {

    private Long id;
    private Long collaborationId;
    private Long requesterUserId;
    private String requesterUserName;
    private String title;
    private String description;
    private ResourceType resourceType;
    private Urgency urgency;
    private ResourceRequestStatus status;
    private LocalDateTime createdAt;

    public static ResourceRequestDTO fromEntity(ResourceRequest request) {
        return new ResourceRequestDTO(
                request.getId(),
                request.getCollaboration().getId(),
                request.getRequesterUser().getIdUser(),
                request.getRequesterUser().getFullName(),
                request.getTitle(),
                request.getDescription(),
                request.getResourceType(),
                request.getUrgency(),
                request.getStatus(),
                request.getCreatedAt()
        );
    }
}