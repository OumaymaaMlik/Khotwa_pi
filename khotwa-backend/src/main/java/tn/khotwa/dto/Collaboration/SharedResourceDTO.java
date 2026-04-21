package tn.khotwa.dto.Collaboration;

import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tn.khotwa.entity.Collaboration.SharedResource;
import tn.khotwa.enums.Collaboration.AvailabilityStatus;
import tn.khotwa.enums.Collaboration.ResourceType;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SharedResourceDTO {

    private Long id;
    private Long collaborationId;
    private Long ownerUserId;
    private String ownerUserName;
    private String name;
    private String description;
    private ResourceType resourceType;
    private AvailabilityStatus availabilityStatus;
    private Integer quantity;
    private LocalDateTime createdAt;

    public static SharedResourceDTO fromEntity(SharedResource resource) {
        return new SharedResourceDTO(
                resource.getId(),
                resource.getCollaboration().getId(),
                resource.getOwnerUser().getIdUser(),
                resource.getOwnerUser().getFullName(),
                resource.getName(),
                resource.getDescription(),
                resource.getResourceType(),
                resource.getAvailabilityStatus(),
                resource.getQuantity(),
                resource.getCreatedAt()
        );
    }
}