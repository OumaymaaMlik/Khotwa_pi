package tn.khotwa.config;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import tn.khotwa.entity.ressources.Categorie;
import tn.khotwa.entity.ressources.Ressource;
import tn.khotwa.entity.ressources.Tag;
import tn.khotwa.entity.UserEntities.User;
import tn.khotwa.enums.*;
import tn.khotwa.enums.UserEnum.Role;
import tn.khotwa.enums.SubscriptionEnums.PlanType;
import tn.khotwa.repository.ressources.CategorieRepository;
import tn.khotwa.repository.ressources.RessourceRepository;
import tn.khotwa.repository.ressources.TagRepository;
import tn.khotwa.repository.UserRepo.UserRepository;

import java.util.List;

@Component
@RequiredArgsConstructor
@Slf4j
public class DataInitializer implements CommandLineRunner {

    private final CategorieRepository categorieRepo;
    private final TagRepository        tagRepo;
    private final RessourceRepository  ressourceRepo;
    private final UserRepository       userRepo;
    private final PasswordEncoder      passwordEncoder;

    // ── Compte admin statique ──────────────────────────────────────
    private static final String ADMIN_EMAIL    = "admin@khotwa.tn";
    private static final String ADMIN_PASSWORD = "Admin@2025!";

    @Override
    public void run(String... args) {
        initAdminAccount();
        initSampleData();
    }

    // ═══════════════════════════════════════════════════════════════
    // ADMIN STATIQUE — créé une seule fois, jamais recréé
    // ═══════════════════════════════════════════════════════════════
    private void initAdminAccount() {
        if (userRepo.existsByEmailAddress(ADMIN_EMAIL)) {
            log.info("Admin account already exists — skipping.");
            return;
        }

        User admin = User.builder()
            .firstName("Admin")
            .lastName("KHOTWA")
            .emailAddress(ADMIN_EMAIL)
            .password(passwordEncoder.encode(ADMIN_PASSWORD))
            .role(Role.ADMIN)
            .planType(PlanType.INSTITUTIONAL)
            .build();

        userRepo.save(admin);
        log.info("✓ Admin account created — email={} password={}",
                 ADMIN_EMAIL, ADMIN_PASSWORD);
    }

    private void initSampleData() {
        if (categorieRepo.count() > 0) {
            log.info("Sample data already exists — DataInitializer skipped.");
            return;
        }

        // Catégories
        Categorie strategie = categorieRepo.save(
            Categorie.builder().nom("Strategy").couleur("#E8622A").icone("📁").build());
        Categorie juridique = categorieRepo.save(
            Categorie.builder().nom("Legal").couleur("#7C5CBF").icone("⚖️").build());
        Categorie formation = categorieRepo.save(
            Categorie.builder().nom("Training").couleur("#2ABFBF").icone("🎓").build());
        Categorie outils = categorieRepo.save(
            Categorie.builder().nom("Tools").couleur("#27AE7A").icone("🛠️").build());

        // Tags
        Tag bmc   = tagRepo.save(Tag.builder().nom("BMC").build());
        Tag pitch = tagRepo.save(Tag.builder().nom("Pitch").build());
        Tag sarl  = tagRepo.save(Tag.builder().nom("SARL").build());
        Tag excel = tagRepo.save(Tag.builder().nom("Excel").build());
        log.info("✓ Sample data created: 4 categories, 4 tags, 4 resources.");
    }
}
