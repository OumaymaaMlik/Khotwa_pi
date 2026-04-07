package tn.khotwa.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import lombok.RequiredArgsConstructor;
import tn.khotwa.dto.AuthLoginResponseDto;
import tn.khotwa.entity.User;
import tn.khotwa.enums.RoleUtilisateur;
import tn.khotwa.repository.UserRepository;

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
                    .role(RoleUtilisateur.ADMIN)
                    .nomAffiche("Admin KHOTWA")
                    .nom("Admin")
                    .prenom("KHOTWA")
                    .build(),
            AuthLoginResponseDto.builder()
                    .id(2L)
                    .email("sara@startup.tn")
                    .role(RoleUtilisateur.ENTREPRENEUR)
                    .nomAffiche("Sara Ben Ali")
                    .nom("Ben Ali")
                    .prenom("Sara")
                    .build(),
            AuthLoginResponseDto.builder()
                    .id(3L)
                    .email("ahmed@coach.tn")
                    .role(RoleUtilisateur.COACH)
                    .nomAffiche("Ahmed Maaloul")
                    .nom("Maaloul")
                    .prenom("Ahmed")
                    .specialite("Accompagnement Startup")
                    .build()
    );

    @PostMapping("/login")
    public ResponseEntity<AuthLoginResponseDto> login(@RequestParam String email) {
        Optional<User> dbUser = userRepository.findByEmail(email);
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
                .nom(s.getNom())
                .prenom(s.getPrenom())
                .email(s.getEmail())
                .role(s.getRole())
                .telephone(s.getTelephone())
                .region(s.getRegion())
                .specialite(s.getSpecialite())
                .disponibilite(s.getDisponibilite())
                .nomAffiche(s.getNomAffiche())
                .build());
        return ResponseEntity.ok(toDto(created));
    }

    private AuthLoginResponseDto toDto(User user) {
        return AuthLoginResponseDto.builder()
                .id(user.getId())
                .nom(user.getNom())
                .prenom(user.getPrenom())
                .email(user.getEmail())
                .role(user.getRole())
                .telephone(user.getTelephone())
                .region(user.getRegion())
                .specialite(user.getSpecialite())
                .disponibilite(user.getDisponibilite())
                .nomAffiche(user.getNomAffiche())
                .build();
    }
}
