package tn.khotwa.dto.messaging;

import tn.khotwa.entity.MessageStatus;
import tn.khotwa.entity.MessageType;
import lombok.Data;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
public class MessageDTO {
    private Long id;
    private Long conversationId;
    private String subject;
    private String body;
    private Long senderId;
    private Long receiverId;
    private String senderName;
    private String receiverName;
    private MessageType type;
    private MessageStatus status;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private String fileUrl;
    private boolean deletedForAll;
    private String deletedForUsers;
    private Long parentMessageId;
    private String parentMessageContent;
    private List<String> readBy = new ArrayList<>();
}
