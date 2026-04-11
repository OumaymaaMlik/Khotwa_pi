package tn.khotwa.biblio.config;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import tn.khotwa.biblio.entity.ressources.Categorie;
import tn.khotwa.biblio.entity.ressources.Ressource;
import tn.khotwa.biblio.entity.ressources.Tag;
import tn.khotwa.biblio.entity.subscription.User;
import tn.khotwa.biblio.enums.*;
import tn.khotwa.biblio.repository.ressources.CategorieRepository;
import tn.khotwa.biblio.repository.ressources.RessourceRepository;
import tn.khotwa.biblio.repository.ressources.TagRepository;
import tn.khotwa.biblio.repository.user.UserRepository;

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

    // ═══════════════════════════════════════════════════════════════
    // DONNÉES DE DÉMONSTRATION (catégories, tags, ressources)
    // ═══════════════════════════════════════════════════════════════
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

        // Ressources
        ressourceRepo.save(Ressource.builder()
            .titre("Business Plan Guide")
            .description("Complete template for Tunisian startups.")
            .type(ResourceType.PDF)
            .planType(PlanType.INSTITUTIONAL)
            .nomFichierOriginal("bp.pdf")
            .mimeType("application/pdf")
            .tailleFichierOctets(2_400_000L)
            .nombrePages(45).publie(true)
            .categorie(strategie).tags(List.of(bmc))
            .createurId(1L).build());

        ressourceRepo.save(Ressource.builder()
            .titre("BMC Excel Template")
            .description("Interactive file to build your Business Model Canvas.")
            .type(ResourceType.EXCEL)
            .planType(PlanType.FREE)
            .nomFichierOriginal("bmc.xlsx")
            .mimeType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
            .tailleFichierOctets(850_000L)
            .publie(true)
            .categorie(outils).tags(List.of(bmc, excel))
            .createurId(1L).build());

        ressourceRepo.save(Ressource.builder()
            .titre("Masterclass: Pitching Your Startup")
            .description("45 min video — how to captivate investors.")
            .type(ResourceType.VIDEO)
            .planType(PlanType.PREMIUM)
            .nomFichierOriginal("pitch.mp4")
            .mimeType("video/mp4")
            .tailleFichierOctets(250_000_000L)
            .dureeSec(2700).publie(true)
            .categorie(formation).tags(List.of(pitch))
            .createurId(1L).build());

        ressourceRepo.save(Ressource.builder()
            .titre("SARL Registration Guide Tunisia")
            .description("The 7 legal steps to register your company.")
            .type(ResourceType.PDF)
            .planType(PlanType.INSTITUTIONAL)
            .nomFichierOriginal("sarl.pdf")
            .mimeType("application/pdf")
            .tailleFichierOctets(1_200_000L)
            .nombrePages(28).publie(true)
            .categorie(juridique).tags(List.of(sarl))
            .createurId(1L).build());

        log.info("✓ Sample data created: 4 categories, 4 tags, 4 resources.");
    }
}
