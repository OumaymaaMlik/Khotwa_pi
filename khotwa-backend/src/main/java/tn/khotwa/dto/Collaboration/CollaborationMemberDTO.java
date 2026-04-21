package tn.khotwa.dto.Collaboration;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tn.khotwa.entity.Collaboration.CollaborationMember;
import tn.khotwa.entity.User.User;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CollaborationMemberDTO {

    private Long id;
    private Long userId;
    private String fullName;
    private String email;
    private String roleLabel;

    public static CollaborationMemberDTO fromEntity(CollaborationMember member) {
        User user = member.getUser();
        return new CollaborationMemberDTO(
                member.getId(),
                user.getIdUser(),
                user.getFullName(),
                user.getEmailAddress(),
                user.getRole().name()
        );
    }
}
