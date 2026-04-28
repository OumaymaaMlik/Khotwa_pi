package tn.khotwa.DTO.messaging;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import tn.khotwa.entity.ConversationType;

import java.util.List;

@Data
public class CreateConversationRequest {
    @NotNull
    private ConversationType type;
    private String title;
    private Long projectId;
    @NotEmpty
    private List<Long> participantIds;
}
