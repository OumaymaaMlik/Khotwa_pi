package tn.khotwa.dto.User;

import jakarta.validation.constraints.NotNull;
import tn.khotwa.enums.User.PlanType;

public record UpdateUserPlanRequest(
        PlanType pendingPlan,

        @NotNull(message = "Plan type is required.")
        PlanType planType
) {
}