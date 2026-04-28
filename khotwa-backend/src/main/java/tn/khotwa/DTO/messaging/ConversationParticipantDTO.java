package tn.khotwa.DTO.messaging;

import lombok.Data;
import tn.khotwa.entity.ConversationMemberRole;

@Data
public class ConversationParticipantDTO {
    private Long userId;
    private String fullName;
    private String avatar;
    private ConversationMemberRole role;
    private boolean online;
}
