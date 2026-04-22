package tn.khotwa.dto.collaboration;

import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tn.khotwa.entity.collaboration.MarketingCollaboration;
import tn.khotwa.enums.collaboration.CampaignType;
import tn.khotwa.enums.collaboration.MarketingCollaborationStatus;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MarketingCollaborationDTO {

    private Long id;
    private Long collaborationId;
    private String title;
    private String description;
    private String objective;
    private CampaignType campaignType;
    private MarketingCollaborationStatus status;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private LocalDateTime createdAt;

    public static MarketingCollaborationDTO fromEntity(MarketingCollaboration marketingCollaboration) {
        return new MarketingCollaborationDTO(
                marketingCollaboration.getId(),
                marketingCollaboration.getCollaboration().getId(),
                marketingCollaboration.getTitle(),
                marketingCollaboration.getDescription(),
                marketingCollaboration.getObjective(),
                marketingCollaboration.getCampaignType(),
                marketingCollaboration.getStatus(),
                marketingCollaboration.getStartDate(),
                marketingCollaboration.getEndDate(),
                marketingCollaboration.getCreatedAt()
        );
    }
}
