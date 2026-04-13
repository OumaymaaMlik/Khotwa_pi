package tn.khotwa.config.projectConfig;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import tn.khotwa.enums.projectEnum.RoleUtilisateur;
import tn.khotwa.repository.UserRepo.UserRepository;

@Configuration
@RequiredArgsConstructor
public class UserSeedConfig {

    @Bean
    CommandLineRunner seedStaticUsers(UserRepository userRepository) {
        return args -> {
            seedIfMissing(userRepository,
                    "admin@khotwa.tn",
                    "Admin",
                    "KHOTWA",
                    "Admin KHOTWA",
                    RoleUtilisateur.ADMIN,
                    null,
                    null,
                    null,
                    null);

            seedIfMissing(userRepository,
                    "sara@startup.tn",
                    "Ben Ali",
                    "Sara",
                    "Sara Ben Ali",
                    RoleUtilisateur.ENTREPRENEUR,
                    null,
                    null,
                    null,
                    null);

            seedIfMissing(userRepository,
                    "ahmed@coach.tn",
                    "Maaloul",
                    "Ahmed",
                    "Ahmed Maaloul",
                    RoleUtilisateur.COACH,
                    null,
                    null,
                    "Accompagnement Startup",
                    "Disponible");
        };
    }

    private void seedIfMissing(UserRepository repo,
                               String email,
                               String nom,
                               String prenom,
                               String nomAffiche,
                               RoleUtilisateur role,
                               String telephone,
                               String region,
                               String specialite,
                               String disponibilite) {
        if (repo.findByEmailAddress(email).isPresent()) {
            return;
        }

    }
}
