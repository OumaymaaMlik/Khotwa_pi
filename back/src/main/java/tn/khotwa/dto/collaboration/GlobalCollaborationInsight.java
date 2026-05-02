package tn.khotwa.dto.collaboration;

import java.util.List;

public record GlobalCollaborationInsight(
        String status,
        String onboarding,
        String issue,
        List<String> actions,
        String priority
) {
}
