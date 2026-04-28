package tn.khotwa.DTO.messaging;

import java.util.List;

public record ConversationSummary(
        String summary,
        List<String> keyMilestones,
        List<String> nextSteps
) {}
