package tn.khotwa.DTO.user;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record LoginRequest(
        @Email(message = "Email address must be valid.")
        @NotBlank(message = "Email address is required.")
        String emailAddress,

        @NotBlank(message = "Password is required.")
        String password
) {
}