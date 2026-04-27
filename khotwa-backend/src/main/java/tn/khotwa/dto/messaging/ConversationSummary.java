package tn.khotwa.dto.messaging;

import java.util.List;

public record ConversationSummary(
        String summary,
        List<String> keyMilestones,
        List<String> nextSteps
) {}
