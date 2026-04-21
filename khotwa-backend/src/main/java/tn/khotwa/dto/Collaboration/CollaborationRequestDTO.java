package tn.khotwa.dto.Collaboration;

import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tn.khotwa.entity.Collaboration.CollaborationRequest;
import tn.khotwa.enums.Collaboration.CollaborationRequestScenario;
import tn.khotwa.enums.Collaboration.CollaborationType;
import tn.khotwa.enums.Collaboration.RequestStatus;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CollaborationRequestDTO {

    private Long id;
    private Long requesterUserId;
    private String requesterUserName;
    private String requesterUserEmail;
    private Long targetUserId;
    private String targetUserName;
    private String targetUserEmail;
    private Long projectId;
    private String projectName;
    private CollaborationRequestScenario scenario;
    private Long targetCollaborationId;
    private CollaborationType targetCollaborationType;
    private RequestStatus status;
    private CollaborationType type;
    private LocalDateTime createdAt;
    private LocalDateTime respondedAt;

    public static CollaborationRequestDTO fromEntity(CollaborationRequest request) {
        Long targetCollaborationId = request.getTargetCollaboration() != null ? request.getTargetCollaboration().getId() : null;
        CollaborationType targetCollaborationType = request.getTargetCollaboration() != null ? request.getTargetCollaboration().getType() : null;

        return new CollaborationRequestDTO(
                request.getId(),
                request.getRequesterUser().getIdUser(),
                request.getRequesterUser().getFullName(),
                request.getRequesterUser().getEmailAddress(),
                request.getTargetUser().getIdUser(),
                request.getTargetUser().getFullName(),
                request.getTargetUser().getEmailAddress(),
                request.getProject().getId(),
                request.getProject().getName(),
                request.getScenario(),
                targetCollaborationId,
                targetCollaborationType,
                request.getStatus(),
                request.getType(),
                request.getCreatedAt(),
                request.getRespondedAt()
        );
    }
}
