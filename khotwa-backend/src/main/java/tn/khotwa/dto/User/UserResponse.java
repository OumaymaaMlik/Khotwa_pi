package tn.khotwa.dto.User;

import tn.khotwa.enums.User.PlanType;
import tn.khotwa.enums.User.Role;

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
) {
}