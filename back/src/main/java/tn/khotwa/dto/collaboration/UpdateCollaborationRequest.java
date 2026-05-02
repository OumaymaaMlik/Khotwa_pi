package tn.khotwa.dto.collaboration;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tn.khotwa.enums.collaboration.CollaborationStatus;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UpdateCollaborationRequest {

    @NotNull
    private CollaborationStatus status;
}
