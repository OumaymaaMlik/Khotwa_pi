package tn.khotwa.config;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import tn.khotwa.entity.UserEntities.User;
import tn.khotwa.enums.UserEnum.Role;
import tn.khotwa.repository.UserRepo.UserRepository;

@Slf4j
@Component
@RequiredArgsConstructor
public class DataInitializer implements ApplicationRunner {

    private static final String ADMIN_EMAIL     = "admin@khotwa.tn";
    private static final String ADMIN_PASSWORD  = "Admin@1234";
    private static final String ADMIN_FIRSTNAME = "Admin";
    private static final String ADMIN_LASTNAME  = "Khotwa";

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(ApplicationArguments args) {
        if (userRepository.existsByEmailAddress(ADMIN_EMAIL)) {
            log.info("[DataInitializer] Admin already exists — skipping creation.");
            return;
        }

        User admin = User.builder()
                .emailAddress(ADMIN_EMAIL)
                .password(passwordEncoder.encode(ADMIN_PASSWORD))
                .firstName(ADMIN_FIRSTNAME)
                .lastName(ADMIN_LASTNAME)
                .role(Role.ADMIN)
                .mustChangePassword(false)
                .build();

        userRepository.save(admin);
        log.info("[DataInitializer] ✅ Admin created: {}", ADMIN_EMAIL);
    }
}