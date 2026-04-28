package tn.khotwa.DTO.collaboration;

import java.util.List;
import java.util.Optional;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tn.khotwa.entity.collaboration.Collaboration;
import tn.khotwa.enums.collaboration.CollaborationStatus;
import tn.khotwa.enums.collaboration.CollaborationType;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CollaborationDTO {

    private Long id;
    private Long projectId;
    private String projectName;
    private Long ownerId;
    private String ownerName;
    private String ownerEmail;
    private CollaborationStatus status;
    private CollaborationType type;
    private List<CollaborationMemberDTO> members;

    public static CollaborationDTO fromEntity(Collaboration collaboration) {
        List<CollaborationMemberDTO> members = Optional.ofNullable(collaboration.getMembers())
                .orElse(List.of())
                .stream()
                .map(CollaborationMemberDTO::fromEntity)
                .toList();

        return new CollaborationDTO(
                collaboration.getId(),
                collaboration.getProject().getId(),
                collaboration.getProject().getName(),
                collaboration.getOwner().getIdUser(),
                collaboration.getOwner().getFullName(),
                collaboration.getOwner().getEmailAddress(),
                collaboration.getStatus(),
                collaboration.getType(),
                members
        );
    }
}
