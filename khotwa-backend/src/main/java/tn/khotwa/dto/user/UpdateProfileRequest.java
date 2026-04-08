package tn.khotwa.biblio.dto.user;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UpdateProfileRequest {

    private String firstName;
    private String lastName;

    @Email(message = "Invalid email format")
    private String emailAddress;

    @Size(min = 8, message = "Password must be at least 8 characters")
    private String password;

    private String avatar;
    private String startup;
    private String phoneNumber;
}
