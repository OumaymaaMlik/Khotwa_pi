package tn.khotwa.DTO.collaboration;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tn.khotwa.enums.collaboration.ResourceRequestStatus;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UpdateResourceRequestStatusRequest {

    @NotNull
    private ResourceRequestStatus status;
    private Long matchedResourceId;
}

