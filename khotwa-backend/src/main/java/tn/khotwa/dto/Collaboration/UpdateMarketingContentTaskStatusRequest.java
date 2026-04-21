package tn.khotwa.dto.Collaboration;

import jakarta.validation.constraints.NotNull;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tn.khotwa.enums.Collaboration.TaskStatus;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UpdateMarketingContentTaskStatusRequest {

    @NotNull
    private TaskStatus status;
    private LocalDateTime publishedAt;
}