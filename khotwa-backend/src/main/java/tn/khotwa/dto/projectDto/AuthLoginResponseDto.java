package tn.khotwa.dto;

import lombok.Builder;
import lombok.Data;
import tn.khotwa.enums.UserEnum.Role;

@Data
@Builder
public class AuthLoginResponseDto {
    private Long id;
    private String nom;
    private String prenom;
    private String email;
    private Role role;
    private String telephone;
    private String region;
    private String specialite;
    private String disponibilite;
    private String nomAffiche;
}
