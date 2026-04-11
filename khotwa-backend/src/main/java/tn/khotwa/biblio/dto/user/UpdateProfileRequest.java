package tn.khotwa.biblio.dto.user;

import jakarta.validation.constraints.*;
import lombok.*;

/**
 * DTO — Mise à jour du profil (champs optionnels : seuls ceux non-null sont appliqués).
 */
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class UpdateProfileRequest {

    private String firstName;
    private String lastName;

    @Size(min = 8, message = "Password must be at least 8 characters")
    private String password;       // null = no change

    private String avatar;
    private String startup;
    private String phoneNumber;
}
