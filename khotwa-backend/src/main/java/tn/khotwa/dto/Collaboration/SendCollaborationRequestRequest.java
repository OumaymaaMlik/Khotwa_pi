package tn.khotwa.dto.Collaboration;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SendCollaborationRequestRequest {

    @Positive
    private Long targetUserId;

    @NotNull
    @Positive
    private Long targetCollaborationId;
}
