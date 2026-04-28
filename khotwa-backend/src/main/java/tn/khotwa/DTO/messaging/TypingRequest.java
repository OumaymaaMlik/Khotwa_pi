package tn.khotwa.DTO.messaging;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class TypingRequest {
    @NotNull
    private Long conversationId;
    @NotNull
    private Long userId;
    private boolean typing;
}
