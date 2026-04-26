package tn.khotwa.dto.projet;

import lombok.Builder;
import lombok.Data;
import tn.khotwa.enums.UserEnum.Role;


@Data
@Builder
public class AuthLoginResponseDto {
    private String token;
    private Long idUser;
    private String firstName;
    private String lastName;
    private String emailAddress;
    private Role role;
    private String phoneNumber;
    private String region;
    private String specialite;
    private String disponibilite;
    private String nomAffiche;
    private boolean mustChangePassword;
}
