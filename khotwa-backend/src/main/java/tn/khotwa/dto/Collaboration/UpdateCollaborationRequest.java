package tn.khotwa.dto.Collaboration;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tn.khotwa.enums.Collaboration.CollaborationStatus;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UpdateCollaborationRequest {

    @NotNull
    private CollaborationStatus status;
}