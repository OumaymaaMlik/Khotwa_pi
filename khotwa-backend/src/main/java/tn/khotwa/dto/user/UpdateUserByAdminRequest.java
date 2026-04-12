package tn.khotwa.dto.user;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;
import tn.khotwa.enums.PlanType;

public record UpdateUserByAdminRequest(
        @Email(message = "Email address must be valid.")
        @Size(max = 255, message = "Email address must be at most 255 characters.")
        String emailAddress,

        @Size(max = 255, message = "First name must be at most 255 characters.")
        String firstName,

        @Size(max = 255, message = "Last name must be at most 255 characters.")
        String lastName,

        @Size(max = 255, message = "Avatar must be at most 255 characters.")
        String avatar,

        PlanType pendingPlan,

        @Size(max = 255, message = "Phone number must be at most 255 characters.")
        String phoneNumber,

        PlanType planType,
        String role,

        @Size(max = 255, message = "Startup must be at most 255 characters.")
        String startup,
        Boolean mustChangePassword
) {
}