package tn.khotwa.DTO.collaboration;

import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tn.khotwa.entity.collaboration.MarketingContentTask;
import tn.khotwa.enums.collaboration.ContentType;
import tn.khotwa.enums.collaboration.Platform;
import tn.khotwa.enums.collaboration.TaskStatus;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MarketingContentTaskDTO {

    private Long id;
    private Long marketingCollaborationId;
    private Long assignedUserId;
    private String assignedUserName;
    private String title;
    private String description;
    private ContentType contentType;
    private Platform platform;
    private TaskStatus status;
    private LocalDateTime dueDate;
    private LocalDateTime publishedAt;

    public static MarketingContentTaskDTO fromEntity(MarketingContentTask task) {
        return new MarketingContentTaskDTO(
                task.getId(),
                task.getMarketingCollaboration().getId(),
                task.getAssignedUser().getIdUser(),
                task.getAssignedUser().getFullName(),
                task.getTitle(),
                task.getDescription(),
                task.getContentType(),
                task.getPlatform(),
                task.getStatus(),
                task.getDueDate(),
                task.getPublishedAt()
        );
    }
}
