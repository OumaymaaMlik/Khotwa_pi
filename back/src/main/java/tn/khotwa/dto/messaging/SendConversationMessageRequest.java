package tn.khotwa.dto.messaging;

import jakarta.validation.constraints.NotNull;
import lombok.Data;
import tn.khotwa.entity.MessageType;

@Data
public class SendConversationMessageRequest {
    @NotNull
    private Long senderId;
    private String subject;

    // FIX: @NotBlank rejetait les bodies contenant uniquement des whitespace/\u00A0
    // (utilisés quand le message est une pièce jointe sans texte).
    // On passe à @NotNull et on valide manuellement dans le service.
    @NotNull
    private String body;

    private MessageType type = MessageType.DIRECT_MESSAGE;
    private String fileUrl;
    private Long parentMessageId;
}