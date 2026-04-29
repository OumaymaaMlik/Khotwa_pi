package tn.khotwa.DTO.collaboration;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tn.khotwa.enums.collaboration.ContentType;
import tn.khotwa.enums.collaboration.Platform;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CreateMarketingContentTaskRequest {

    @NotNull
    private Long marketingCollaborationId;
    @NotNull
    private Long assignedUserId;
    @NotBlank
    private String title;
    private String description;
    @NotNull
    private ContentType contentType;
    private Platform platform;
    private LocalDateTime dueDate;
}
