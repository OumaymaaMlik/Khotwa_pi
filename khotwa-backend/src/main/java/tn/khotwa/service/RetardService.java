package tn.khotwa.service;

import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.khotwa.entity.SousTache;
import tn.khotwa.entity.Tache;
import tn.khotwa.enums.StatutTache;
import tn.khotwa.repository.SousTacheRepository;
import tn.khotwa.repository.TacheRepository;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class RetardService {

    private final TacheRepository tacheRepository;
    private final SousTacheRepository sousTacheRepository;
    private final ScoreService scoreService;

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
}
