package tn.khotwa.dto.Collaboration;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tn.khotwa.enums.Collaboration.AvailabilityStatus;
import tn.khotwa.enums.Collaboration.ResourceType;

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
    @NotNull
    private AvailabilityStatus availabilityStatus;
    private Integer quantity;
}