package tn.khotwa.DTO.messaging;

import lombok.Data;
import tn.khotwa.entity.ConversationType;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
public class ConversationDTO {
    private Long id;
    private ConversationType type;
    private String title;
    private Long projectId;
    private Long createdBy;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private int onlineCount;
    private int totalParticipants;
    private int unreadCount;
    private MessageDTO lastMessage;
    private List<ConversationParticipantDTO> participants = new ArrayList<>();
}
