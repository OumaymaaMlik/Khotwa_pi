package tn.khotwa.dto.user;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;

public record UpdateProfileRequest(
        @Size(max = 255, message = "First name must be at most 255 characters.")
        String firstName,

        @Size(max = 255, message = "Last name must be at most 255 characters.")
        String lastName,

        @Email(message = "Email address must be valid.")
        String emailAddress,

        @Size(max = 255, message = "Avatar must be at most 255 characters.")
        String avatar,

        @Size(max = 255, message = "Phone number must be at most 255 characters.")
        String phoneNumber,

        @Size(max = 255, message = "Startup must be at most 255 characters.")
        String startup,

        @Size(max = 100, message = "Specialite must be at most 100 characters.")
        String specialite,

        @Size(max = 50, message = "Disponibilite must be at most 50 characters.")
        String disponibilite
) {
}