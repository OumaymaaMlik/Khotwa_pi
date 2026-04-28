package tn.khotwa.DTO.collaboration;

import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tn.khotwa.entity.collaboration.SharedResource;
import tn.khotwa.enums.collaboration.AvailabilityStatus;
import tn.khotwa.enums.collaboration.ResourceType;

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
