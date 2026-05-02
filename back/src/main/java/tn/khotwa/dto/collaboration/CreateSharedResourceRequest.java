package tn.khotwa.dto.collaboration;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tn.khotwa.enums.collaboration.AvailabilityStatus;
import tn.khotwa.enums.collaboration.ResourceType;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CreateSharedResourceRequest {

    @NotNull
    private Long collaborationId;
    @NotBlank
    private String name;
    private String description;
    @NotNull
    private ResourceType resourceType;
    private AvailabilityStatus availabilityStatus;
    private Integer quantity;
}

