package tn.khotwa.config.projectConfig;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import tn.khotwa.entity.projectEntity.CoachDisponibilitePeriode;
import tn.khotwa.entity.UserEntities.User;
import tn.khotwa.enums.projectEnum.DisponibilitePeriodeStatut;
import tn.khotwa.enums.projectEnum.RoleUtilisateur;
import tn.khotwa.repository.UserRepo.UserRepository;
import tn.khotwa.repository.projectRepository.CoachDisponibilitePeriodeRepository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;


@Component
@RequiredArgsConstructor
public class TestCoachSeedRunner implements CommandLineRunner {

    private final UserRepository userRepository;
    private final CoachDisponibilitePeriodeRepository disponibilitePeriodeRepository;

    @Override
    @Transactional
    public void run(String... args) {
        User coach1 = ensureCoach(
                "yasmine.coach@khotwa.tn",
                "Yasmine",
                "Khelifi",
                "Yasmine Khelifi",
                "IA_DATA",
                "TECHNOLOGIE_LOGICIEL",
                "oui"
        );
        User coach2 = ensureCoach(
                "karim.coach@khotwa.tn",
                "Karim",
                "Ben Salem",
                "Karim Ben Salem",
                "FINTECH",
                "FINTECH",
                "oui"
        );
        User coach3 = ensureCoach(
                "amal.coach@khotwa.tn",
                "Amal",
                "Mansouri",
                "Amal Mansouri",
                "EDUCATION_EDTECH",
                "EDUCATION_EDTECH",
                "oui"
        );
        User coach4 = ensureCoach(
                "hatem.coach@khotwa.tn",
                "Hatem",
                "Trabelsi",
                "Hatem Trabelsi",
                "SANTE_MEDTECH",
                "SANTE_MEDTECH",
                "oui"
        );
        User coach5 = ensureCoach(
                "rim.coach@khotwa.tn",
                "Rim",
                "Gharbi",
                "Rim Gharbi",
                "MOBILITE_LOGISTIQUE",
                "MOBILITE_LOGISTIQUE",
                "oui"
        );
        User coach6 = ensureCoach(
                "fedi.coach@khotwa.tn",
                "Fedi",
                "Chaouch",
                "Fedi Chaouch",
                "SERVICES_B2B",
                "SERVICES_B2B",
                "non"
        );

        ensureAvailabilityPeriods(coach1, 0, 120, DisponibilitePeriodeStatut.DISPONIBLE);
        ensureAvailabilityPeriods(coach2, 10, 120, DisponibilitePeriodeStatut.PARTIELLE);
        ensureAvailabilityPeriods(coach3, 0, 45, DisponibilitePeriodeStatut.DISPONIBLE);
        ensureAvailabilityPeriods(coach4, 20, 120, DisponibilitePeriodeStatut.DISPONIBLE);
        ensureAvailabilityPeriods(coach5, 0, 90, DisponibilitePeriodeStatut.PARTIELLE);
        ensureAvailabilityPeriods(coach6, 0, 30, DisponibilitePeriodeStatut.INDISPONIBLE);
    }

    private User ensureCoach(
            String email,
            String nom,
            String prenom,
            String nomAffiche,
            String specialite,
            String region,
            String disponibilite
    ) {
        return userRepository.findByEmailAddress(email).orElseGet(() -> userRepository.save(User.builder()
                .emailAddress(email)
                .password("123123") // "password" hashed
                .role(tn.khotwa.enums.UserEnum.Role.COACH)
                .lastName(nom)
                .firstName(prenom)
                .startup(nomAffiche)
                .build()));
    }

    private void ensureAvailabilityPeriods(
            User coach,
            int startOffsetDays,
            int endOffsetDays,
            DisponibilitePeriodeStatut statut
    ) {
        List<CoachDisponibilitePeriode> active = disponibilitePeriodeRepository.findByCoachIdAndActifTrue(coach.getIdUser());
                if (!active.isEmpty()) {
                        return;
                }

                LocalDate start = LocalDate.now().plusDays(startOffsetDays);
                LocalDate end = LocalDate.now().plusDays(endOffsetDays);
                LocalDateTime now = LocalDateTime.now();

                disponibilitePeriodeRepository.save(CoachDisponibilitePeriode.builder()
                                .coachId(coach.getIdUser())
                                .dateDebut(start)
                                .dateFin(end)
                                .statut(statut)
                                .commentaire("Période de disponibilité générée automatiquement")
                                .actif(true)
                                .dateCreation(now)
                                .dateDerniereMiseAJour(now)
                                .build());
    }
}