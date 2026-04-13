package tn.khotwa.dto.user;

import tn.khotwa.enums.SubscriptionEnums.PlanType;
import tn.khotwa.enums.UserEnum.Role;

public record UserResponse(
        Long idUser,
        String avatar,
        String emailAddress,
        String firstName,
        String lastName,
        PlanType pendingPlan,
        String phoneNumber,
        PlanType planType,
        Role role,
        String startup,
        boolean mustChangePassword
) {}
