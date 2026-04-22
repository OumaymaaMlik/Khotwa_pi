package tn.khotwa.dto.collaboration;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tn.khotwa.enums.collaboration.CampaignType;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CreateMarketingCollaborationRequest {

    @NotNull
    private Long collaborationId;
    @NotBlank
    private String title;
    private String description;
    @NotBlank
    private String objective;
    @NotNull
    private CampaignType campaignType;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
}
