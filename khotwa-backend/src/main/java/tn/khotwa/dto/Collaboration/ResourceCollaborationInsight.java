package tn.khotwa.DTO.collaboration;

import java.util.List;

public record ResourceCollaborationInsight(
        String pressure,
        String fulfillment,
        String issue,
        List<String> actions,
        String priority
) {
}
