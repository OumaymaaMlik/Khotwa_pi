package tn.khotwa.biblio.controller.projet;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import lombok.RequiredArgsConstructor;
import tn.khotwa.biblio.dto.projet.AuthLoginResponseDto;
import tn.khotwa.biblio.entity.subscription.User;
import tn.khotwa.biblio.enums.Role;
import tn.khotwa.biblio.repository.user.UserRepository;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
public class AuthController {

        private final UserRepository userRepository;

    private static final List<AuthLoginResponseDto> STATIC_USERS = List.of(
            AuthLoginResponseDto.builder()
                    .id(1L)
                    .email("admin@khotwa.tn")
                    .role(Role.ADMIN)
                    .nomAffiche("Admin KHOTWA")
                    .nom("Admin")
                    .prenom("KHOTWA")
                    .build(),
            AuthLoginResponseDto.builder()
                    .id(2L)
                    .email("sara@startup.tn")
                    .role(Role.ENTREPRENEUR)
                    .nomAffiche("Sara Ben Ali")
                    .nom("Ben Ali")
                    .prenom("Sara")
                    .build(),
            AuthLoginResponseDto.builder()
                    .id(3L)
                    .email("ahmed@coach.tn")
                    .role(Role.COACH)
                    .nomAffiche("Ahmed Maaloul")
                    .nom("Maaloul")
                    .prenom("Ahmed")
                    .specialite("Accompagnement Startup")
                    .build()
    );

    @PostMapping("/login")
    public ResponseEntity<AuthLoginResponseDto> login(@RequestParam String email) {
        Optional<User> dbUser = userRepository.findByEmailAddress(email);
        if (dbUser.isPresent()) {
            return ResponseEntity.ok(toDto(dbUser.get()));
        }

        Optional<AuthLoginResponseDto> staticUser = STATIC_USERS.stream()
                .filter(u -> u.getEmail().equalsIgnoreCase(email))
                .findFirst();

        if (staticUser.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        AuthLoginResponseDto s = staticUser.get();
        User created = userRepository.save(User.builder()
                .lastName(s.getNom())
                .firstName(s.getPrenom())
                .emailAddress(s.getEmail())
                .role(s.getRole())
                .phoneNumber(s.getTelephone())
                .password("")
                .build());
        return ResponseEntity.ok(toDto(created));
    }

    private AuthLoginResponseDto toDto(User user) {
        String nomAffiche = user.getFirstName() + " " + user.getLastName();
        return AuthLoginResponseDto.builder()
                .id(user.getIdUser())
                .nom(user.getLastName())
                .prenom(user.getFirstName())
                .email(user.getEmailAddress())
                .role(user.getRole())
                .telephone(user.getPhoneNumber())
                .nomAffiche(nomAffiche)
                .build();
    }
}
