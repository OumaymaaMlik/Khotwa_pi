package tn.khotwa.dto.Collaboration;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tn.khotwa.enums.Collaboration.ResourceRequestStatus;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UpdateResourceRequestStatusRequest {

    @NotNull
    private ResourceRequestStatus status;
}