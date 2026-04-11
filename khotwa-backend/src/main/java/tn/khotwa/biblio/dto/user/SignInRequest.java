package tn.khotwa.biblio.dto.user;

import jakarta.validation.constraints.*;
import lombok.*;

/**
 * DTO — Connexion (tous rôles, y compris admin statique).
 */
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class SignInRequest {

    @Email(message = "Invalid email format")
    @NotBlank(message = "Email is required")
    private String emailAddress;

    @NotBlank(message = "Password is required")
    private String password;
}
