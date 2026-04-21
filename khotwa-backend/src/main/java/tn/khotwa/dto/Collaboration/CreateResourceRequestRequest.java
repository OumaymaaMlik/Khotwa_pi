package tn.khotwa.dto.Collaboration;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tn.khotwa.enums.Collaboration.ResourceType;
import tn.khotwa.enums.Collaboration.Urgency;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CreateResourceRequestRequest {

    @NotNull
    private Long collaborationId;
    @NotBlank
    private String title;
    private String description;
    @NotNull
    private ResourceType resourceType;
    @NotNull
    private Urgency urgency;
}