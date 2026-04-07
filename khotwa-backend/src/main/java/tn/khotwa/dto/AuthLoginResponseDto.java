package tn.khotwa.dto;

import lombok.Builder;
import lombok.Data;
import tn.khotwa.enums.RoleUtilisateur;

@Data
@Builder
public class AuthLoginResponseDto {
    private Long id;
    private String nom;
    private String prenom;
    private String email;
    private RoleUtilisateur role;
    private String telephone;
    private String region;
    private String specialite;
    private String disponibilite;
    private String nomAffiche;
}
