package tn.khotwa.messaging.dto;

import tn.khotwa.messaging.entity.MessageStatus;
import tn.khotwa.messaging.entity.MessageType;
import lombok.Data;
import java.time.LocalDateTime;

@Data
public class MessageDTO {
    private Long id;
    private String subject;
    private String body;
    private Long senderId;
    private Long receiverId;
    private MessageType type;
    private MessageStatus status;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private String fileUrl;
    private boolean deletedForAll;
    private String deletedForUsers;
    private Long parentMessageId;
    private String parentMessageContent;
}
