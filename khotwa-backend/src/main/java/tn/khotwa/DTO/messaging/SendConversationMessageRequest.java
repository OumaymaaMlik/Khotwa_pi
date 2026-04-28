package tn.khotwa.DTO.messaging;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import tn.khotwa.entity.MessageType;

@Data
public class SendConversationMessageRequest {
    @NotNull
    private Long senderId;
    private String subject;
    @NotBlank
    private String body;
    private MessageType type = MessageType.DIRECT_MESSAGE;
    private String fileUrl;
    private Long parentMessageId;
}
