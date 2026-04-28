package tn.khotwa.DTO.user;

import jakarta.validation.constraints.NotNull;
import tn.khotwa.enums.SubscriptionEnums.PlanType;

public record UpdateUserPlanRequest(
        PlanType pendingPlan,

        @NotNull(message = "Plan type is required.")
        PlanType planType
) {
}