package tn.khotwa.dto.collaboration;

import java.util.List;

public record ResourceCollaborationInsight(
        String pressure,
        String fulfillment,
        String issue,
        List<String> actions,
        String priority
) {
}
