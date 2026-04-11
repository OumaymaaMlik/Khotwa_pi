package tn.khotwa.biblio.dto.user;

import jakarta.validation.constraints.*;
import lombok.*;

/**
 * DTO — Inscription d'un nouvel utilisateur (ENTREPRENEUR ou COACH).
 * L'ADMIN ne peut pas s'inscrire via cette route.
 */
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class SignUpRequest {

    @NotBlank(message = "First name is required")
    private String firstName;

    @NotBlank(message = "Last name is required")
    private String lastName;

    @Email(message = "Invalid email format")
    @NotBlank(message = "Email is required")
    private String emailAddress;

    @NotBlank(message = "Password is required")
    @Size(min = 8, message = "Password must be at least 8 characters")
    private String password;

    /** ENTREPRENEUR or COACH — ADMIN is forbidden here */
    @NotBlank(message = "Role is required")
    private String role;

    private String avatar;
    private String startup;
    private String phoneNumber;
}
