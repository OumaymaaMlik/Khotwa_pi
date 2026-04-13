package tn.khotwa.config.projectConfig;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import tn.khotwa.entity.projectEntity.Projet;
import tn.khotwa.enums.projectEnum.EtatValidationProjet;
import tn.khotwa.enums.projectEnum.RoleUtilisateur;
import tn.khotwa.enums.projectEnum.SecteurProjet;
import tn.khotwa.enums.projectEnum.StadeProjet;
import tn.khotwa.enums.projectEnum.StatutProjet;
import tn.khotwa.repository.UserRepo.UserRepository;
import tn.khotwa.repository.projectRepository.ProjetRepository;
import tn.khotwa.entity.UserEntities.User;
import tn.khotwa.enums.UserEnum.Role;
import java.time.LocalDateTime;
import java.time.LocalDate;
import java.util.List;

@Component
@RequiredArgsConstructor
public class TestProjetSeedRunner implements CommandLineRunner {

    private final UserRepository userRepository;
    private final ProjetRepository projetRepository;

    @Override
    @Transactional
    public void run(String... args) {









    }

    private User ensureUser(String email, Role role, String nom, String prenom, String nomAffiche) {
        return userRepository.findByEmailAddress(email).orElseGet(() -> userRepository.save(User.builder()
                .emailAddress(email)
                .role(role)
                .firstName(nom)
                .lastName(prenom)
                .startup(nomAffiche)
                .password("seeded") // Provide a default password if required by the entity
                .build()));
    }

    private void ensureSubmittedProject(
            User entrepreneur,
            User admin,
            String nomStartup,
            String description,
            SecteurProjet secteur,
            StadeProjet stade
    ) {
        List<Projet> existing = projetRepository.findByEntrepreneurId(entrepreneur.getIdUser()).stream()
                .filter(p -> nomStartup.equalsIgnoreCase(p.getNomStartup()))
                .toList();

        if (!existing.isEmpty()) {
            return;
        }

        LocalDateTime now = LocalDateTime.now();
        Projet projet = Projet.builder()
                .nomStartup(nomStartup)
                .description(description)
                .secteur(secteur)
                .problemeAdresse("Probleme cible de " + nomStartup)
                .solutionProposee("Solution proposee de " + nomStartup)
                .businessModel("Modele hybride B2B/B2C")
                .stadeProjet(stade)
                .innovationDescription("Proposition de valeur innovante")
                .scalabiliteDescription("Plan de croissance progressive")
                .pocDisponible(stade != StadeProjet.IDEE)
                .dateDebutProjet(LocalDate.now().plusDays(2))
                .dateFinProjet(LocalDate.now().plusDays(95))
                .dateCreation(now.minusDays(4))
                .dateSoumission(now.minusDays(2))
                .dateDerniereMiseAJour(now.minusDays(1))
                .statutProjet(StatutProjet.EN_COURS)
                .etatValidation(EtatValidationProjet.SOUMIS_ADMIN)
                .scoreDisciplineGlobal(15)
                .entrepreneurId(entrepreneur.getIdUser())
                .adminId(admin.getIdUser())
                .build();

        projetRepository.save(projet);
    }
}
