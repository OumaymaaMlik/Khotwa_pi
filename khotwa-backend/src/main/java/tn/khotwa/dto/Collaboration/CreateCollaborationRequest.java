package tn.khotwa.dto.Collaboration;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tn.khotwa.enums.Collaboration.CollaborationType;

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