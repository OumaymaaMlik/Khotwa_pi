package tn.khotwa.dto.collaboration;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tn.khotwa.enums.collaboration.CollaborationType;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CreateCollaborationRequest {

    @NotNull
    private Long projectId;
    @NotNull
    private CollaborationType type;
}
