package tn.khotwa.service.projet;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.khotwa.entity.projet.Projet;
import tn.khotwa.entity.projet.SousTache;
import tn.khotwa.entity.projet.Tache;
import tn.khotwa.enums.projectEnum.StatutTache;
import tn.khotwa.exception.BusinessException;
import tn.khotwa.repository.projet.ProjetRepository;
import tn.khotwa.repository.projet.SousTacheRepository;
import tn.khotwa.repository.projet.TacheRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ScoreService {

    private final TacheRepository tacheRepository;
    private final SousTacheRepository sousTacheRepository;
    private final ProjetRepository projetRepository;

    public int calculateSousTacheImpact(SousTache sousTache) {
        if (sousTache.getStatutSousTache() == StatutTache.BLOQUEE)      return -15;
        if (sousTache.getStatutSousTache() == StatutTache.A_CORRIGER)   return -10;
        if (sousTache.getStatutSousTache() == StatutTache.EN_CORRECTION) return -3;

        int delay = Math.max(sousTache.getRetardJours(), 0);
        if (delay > 7)                                                    return -10;
        if (sousTache.getStatutSousTache() == StatutTache.EN_RETARD)     return -3;

        if (sousTache.getStatutSousTache() == StatutTache.TERMINEE) {
            if (delay > 0) return -3;

            // AJOUT — pénalité basée sur l'historique des corrections
            int corrections = sousTache.getNbCorrections();
            if (corrections == 0) return  5;   // parfait, aucune correction
            if (corrections == 1) return  2;   // 1 correction → léger malus
            if (corrections == 2) return  0;   // 2 corrections → neutre
            return -2;                         // 3+ corrections → pénalité persistante
        }
        return 0;
    }

    public int calculateTaskImpact(Tache tache) {
        if (tache.getStatutTache() == StatutTache.BLOQUEE)      return -15;
        if (tache.getStatutTache() == StatutTache.A_CORRIGER)   return -12;
        if (tache.getStatutTache() == StatutTache.EN_CORRECTION) return -4;

        int delay = Math.max(tache.getRetardJours(), 0);
        if (delay > 7)                                           return -10;
        if (tache.getStatutTache() == StatutTache.EN_RETARD)    return -5;

        if (tache.getStatutTache() == StatutTache.TERMINEE) {
            if (delay > 0) return -5;

            // AJOUT — pénalité basée sur l'historique des corrections
            int corrections = tache.getNbCorrections();
            if (corrections == 0) return 10;   // parfait
            if (corrections == 1) return  5;   // 1 correction → moitié du bonus
            if (corrections == 2) return  0;   // 2 corrections → neutre
            return -3;                         // 3+ corrections → pénalité persistante
        }
        return 0;
    }

    @Transactional
    public void updateTaskScoreAndProject(Tache tache) {
        tache.setScoreImpact(calculateTaskImpact(tache));
        tacheRepository.save(tache);
        recalculateProjectScore(tache.getProjetId());
    }

    @Transactional
    public void updateSousTacheScoreAndProject(SousTache sousTache) {
        sousTache.setScoreImpact(calculateSousTacheImpact(sousTache));
        sousTacheRepository.save(sousTache);

        Tache tache = tacheRepository.findById(sousTache.getTacheId())
                .orElseThrow(() -> new BusinessException("Tache introuvable"));
        recalculateProjectScore(tache.getProjetId());
    }

    @Transactional
    public void recalculateProjectScore(Long projetId) {
        Projet projet = projetRepository.findById(projetId)
                .orElseThrow(() -> new BusinessException("Projet introuvable"));

        List<Tache> taches = tacheRepository.findByProjetId(projetId);
        int totalTask = taches.stream().mapToInt(Tache::getScoreImpact).sum();

        int totalSousTache = taches.stream()
                .flatMap(t -> sousTacheRepository.findByTacheId(t.getId()).stream())
                .mapToInt(SousTache::getScoreImpact)
                .sum();

        projet.setScoreDisciplineGlobal(totalTask + totalSousTache);
        projetRepository.save(projet);
    }

}
