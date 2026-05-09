package tn.khotwa.DTO.collaboration;

import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tn.khotwa.entity.collaboration.CollaborationRequest;
import tn.khotwa.enums.collaboration.CollaborationRequestScenario;
import tn.khotwa.enums.collaboration.CollaborationType;
import tn.khotwa.enums.collaboration.RequestStatus;

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
    private LocalDateTime createdAt;
    private LocalDateTime processedAt;

    public static CollaborationRequestDTO fromEntity(CollaborationRequest request) {
        Long targetCollaborationId = request.getTargetCollaboration().getId();
        CollaborationType targetCollaborationType = request.getTargetCollaboration().getType();

        return new CollaborationRequestDTO(
                request.getId(),
                request.getRequesterUser().getIdUser(),
                request.getRequesterUser().getFullName(),
                request.getRequesterUser().getEmailAddress(),
                request.getTargetUser().getIdUser(),
                request.getTargetUser().getFullName(),
                request.getTargetUser().getEmailAddress(),
                request.getTargetCollaboration().getProject().getId(),
                request.getTargetCollaboration().getProject().getName(),
                request.getScenario(),
                targetCollaborationId,
                targetCollaborationType,
                request.getStatus(),
                request.getCreatedAt(),
                request.getProcessedAt()
        );
    }
}

