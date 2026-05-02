package tn.khotwa.dto.collaboration;

import java.util.List;

public record MarketingCollaborationInsight(
        String execution,
        String risk,
        String issue,
        List<String> actions,
        String priority
) {
}
