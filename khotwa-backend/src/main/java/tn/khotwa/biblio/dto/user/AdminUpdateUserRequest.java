package tn.khotwa.biblio.dto.user;

import lombok.*;

/**
 * DTO — Modification d'un utilisateur par l'admin
 * (peut changer le rôle, le plan, suspendre, etc.).
 */
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class AdminUpdateUserRequest {

    private String firstName;
    private String lastName;
    private String role;       // null = no change
    private String planType;   // null = no change
    private String pendingPlan;
    private String avatar;
    private String startup;
    private String phoneNumber;
}
