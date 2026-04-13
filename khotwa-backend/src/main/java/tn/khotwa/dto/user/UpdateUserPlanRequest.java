package tn.khotwa.dto.user;

import tn.khotwa.enums.SubscriptionEnums.PlanType;

public record UpdateUserPlanRequest(PlanType planType, PlanType pendingPlan) {}
