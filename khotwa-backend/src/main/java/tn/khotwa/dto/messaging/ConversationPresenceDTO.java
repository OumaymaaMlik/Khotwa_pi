package tn.khotwa.dto.messaging;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class ConversationPresenceDTO {
    private Long conversationId;
    private int onlineCount;
    private int totalCount;
    private List<Long> onlineUserIds = new ArrayList<>();
}
