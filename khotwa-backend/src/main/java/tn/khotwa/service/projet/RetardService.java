package tn.khotwa.service.projet;

import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.khotwa.dto.projet.CountdownDto;
import tn.khotwa.entity.projet.SousTache;
import tn.khotwa.entity.projet.Tache;
import tn.khotwa.enums.projectEnum.StatutTache;
import tn.khotwa.repository.projet.SousTacheRepository;
import tn.khotwa.repository.projet.TacheRepository;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class RetardService {

    private final TacheRepository tacheRepository;
    private final SousTacheRepository sousTacheRepository;
    private final ScoreService scoreService;

    // ─── Scheduler nocturne existant : détecte les retards ──────────────────
    @Scheduled(cron = "0 0 1 * * *")
    @Transactional
    public void detecterRetardsNocturne() {
        LocalDate today = LocalDate.now();

        List<Tache> tachesEnRetard = tacheRepository.findByDateFinBeforeAndStatutTacheNot(today, StatutTache.TERMINEE);
        Set<Long> impactedProjects = new HashSet<>();
        for (Tache t : tachesEnRetard) {
            long retard = ChronoUnit.DAYS.between(t.getDateFin(), today);
            t.setStatutTache(StatutTache.EN_RETARD);
            t.setRetardJours((int) retard);
            scoreService.updateTaskScoreAndProject(t);
            impactedProjects.add(t.getProjetId());
        }
        tacheRepository.saveAll(tachesEnRetard);

        List<SousTache> sousTachesEnRetard = sousTacheRepository.findByDateFinBeforeAndStatutSousTacheNot(today, StatutTache.TERMINEE);
        for (SousTache st : sousTachesEnRetard) {
            long retard = ChronoUnit.DAYS.between(st.getDateFin(), today);
            st.setStatutSousTache(StatutTache.EN_RETARD);
            st.setRetardJours((int) retard);
            sousTacheRepository.save(st);
            scoreService.updateSousTacheScoreAndProject(st);
        }

        impactedProjects.forEach(scoreService::recalculateProjectScore);
    }

    // ─── Nouveau scheduler : alerte toutes les heures sur les prochains retards ─
    @Scheduled(cron = "0 0 * * * *") // Toutes les heures
    @Transactional
    public void alerterProchainRetard() {
        LocalDate today = LocalDate.now();
        LocalDate seuil = today.plusDays(3); // Alerte si deadline dans <= 3 jours

        // Tâches pas encore commencées avec deadline dans <= 3 jours
        List<Tache> tachesAlertes = tacheRepository.findAll().stream()
                .filter(t -> t.getDateFin() != null
                        && !t.getDateFin().isBefore(today)
                        && !t.getDateFin().isAfter(seuil)
                        && t.getStatutTache() == StatutTache.A_FAIRE)
                .collect(Collectors.toList());

        // Log ou notification future possible ici
        // Pour l'instant le scheduler maintient les données à jour
        for (Tache t : tachesAlertes) {
            // Recalcul propre du retardJours (0 car pas encore en retard)
            t.setRetardJours(0);
            tacheRepository.save(t);
        }

        // Même chose pour sous-tâches
        List<SousTache> sousTachesAlertes = sousTacheRepository.findAll().stream()
                .filter(st -> st.getDateFin() != null
                        && !st.getDateFin().isBefore(today)
                        && !st.getDateFin().isAfter(seuil)
                        && st.getStatutSousTache() == StatutTache.A_FAIRE)
                .collect(Collectors.toList());

        for (SousTache st : sousTachesAlertes) {
            st.setRetardJours(0);
            sousTacheRepository.save(st);
        }
    }

    // ─── Méthode publique : calcul countdown pour un projet ─────────────────
    public List<CountdownDto> getCountdownsForProjet(Long projetId) {
        LocalDate today = LocalDate.now();
        List<CountdownDto> result = new ArrayList<>();

        List<Tache> taches = tacheRepository.findByProjetId(projetId);
        for (Tache t : taches) {
            CountdownDto dto = buildTacheCountdown(t, today);
            result.add(dto);

            // Sous-tâches de cette tâche
            List<SousTache> sousTaches = sousTacheRepository.findByTacheId(t.getId());
            for (SousTache st : sousTaches) {
                result.add(buildSousTacheCountdown(st, today));
            }
        }
        return result;
    }

    // ─── Helpers ─────────────────────────────────────────────────────────────
    private CountdownDto buildTacheCountdown(Tache t, LocalDate today) {
        Integer joursRestants = null;
        boolean enRetard = false;
        boolean urgence = false;

        if (t.getDateFin() != null) {
            joursRestants = (int) ChronoUnit.DAYS.between(today, t.getDateFin());
            enRetard = joursRestants < 0 || t.getStatutTache() == StatutTache.EN_RETARD;
            urgence = joursRestants != null && joursRestants >= 0 && joursRestants <= 3
                    && t.getStatutTache() == StatutTache.A_FAIRE;
        }

        return CountdownDto.builder()
                .id(t.getId())
                .titre(t.getTitre())
                .type("TACHE")
                .statut(t.getStatutTache().name())
                .dateDebut(t.getDateDebut() != null ? t.getDateDebut().toString() : null)
                .dateFin(t.getDateFin() != null ? t.getDateFin().toString() : null)
                .joursRestants(joursRestants)
                .retardJours(t.getRetardJours())
                .enRetard(enRetard)
                .urgence(urgence)
                .pasEncoreCommence(t.getStatutTache() == StatutTache.A_FAIRE)
                .parentId(t.getProjetId())
                .build();
    }

    private CountdownDto buildSousTacheCountdown(SousTache st, LocalDate today) {
        Integer joursRestants = null;
        boolean enRetard = false;
        boolean urgence = false;

        if (st.getDateFin() != null) {
            joursRestants = (int) ChronoUnit.DAYS.between(today, st.getDateFin());
            enRetard = joursRestants < 0 || st.getStatutSousTache() == StatutTache.EN_RETARD;
            urgence = joursRestants != null && joursRestants >= 0 && joursRestants <= 3
                    && st.getStatutSousTache() == StatutTache.A_FAIRE;
        }

        return CountdownDto.builder()
                .id(st.getId())
                .titre(st.getTitre())
                .type("SOUS_TACHE")
                .statut(st.getStatutSousTache().name())
                .dateDebut(st.getDateDebut() != null ? st.getDateDebut().toString() : null)
                .dateFin(st.getDateFin() != null ? st.getDateFin().toString() : null)
                .joursRestants(joursRestants)
                .retardJours(st.getRetardJours())
                .enRetard(enRetard)
                .urgence(urgence)
                .pasEncoreCommence(st.getStatutSousTache() == StatutTache.A_FAIRE)
                .parentId(st.getTacheId())
                .build();
    }
}