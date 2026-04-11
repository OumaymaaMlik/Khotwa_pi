package tn.khotwa.biblio.service.ressources;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import tn.khotwa.biblio.entity.ressources.ProgressionUtilisateur;
import tn.khotwa.biblio.entity.ressources.Ressource;
import tn.khotwa.biblio.entity.subscription.User;
import tn.khotwa.biblio.enums.ProgressStatus;
import tn.khotwa.biblio.exception.ResourceNotFoundException;
import tn.khotwa.biblio.projection.ressources.ProgressionView;
import tn.khotwa.biblio.repository.projet.ProjetRepository;
import tn.khotwa.biblio.repository.ressources.ProgressionRepository;
import tn.khotwa.biblio.repository.ressources.RessourceRepository;
import tn.khotwa.biblio.repository.user.UserRepository;

import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional
public class ProgressionService implements IProgressionService {

    private final ProgressionRepository progressionRepo;
    private final RessourceRepository   ressourceRepo;
    private final ProjetRepository      projetRepo;
    private final UserRepository        userRepo;

    // ── Mise à jour progression (upsert) ─────────────────────────────

    @Override
    public ProgressionView mettreAJour(Long userId, Long ressourceId, ProgressStatus statut,
                                       Integer pourcentage, Integer positionVideoSec) {
        Ressource ressource = ressourceRepo.findById(ressourceId)
            .orElseThrow(() -> new ResourceNotFoundException("Ressource", ressourceId));

        ProgressionUtilisateur prog = progressionRepo
            .findByUtilisateurIdAndRessourceId(userId, ressourceId)
            .orElseGet(() -> ProgressionUtilisateur.builder()
                .utilisateurId(userId)
                .ressource(ressource)
                .premierAcces(LocalDateTime.now())
                .build());

        prog.setStatut(statut);
        if (pourcentage      != null) prog.setPourcentage(pourcentage);
        if (positionVideoSec != null) prog.setPositionVideoSec(positionVideoSec);

        if (prog.getPourcentage() >= 100 || statut == ProgressStatus.COMPLETED) {
            prog.setStatut(ProgressStatus.COMPLETED);
            prog.setPourcentage(100);
            if (prog.getDateCompletion() == null) prog.setDateCompletion(LocalDateTime.now());
        }

        progressionRepo.save(prog);
        return progressionRepo.findProjectedByUtilisateurIdAndRessourceId(userId, ressourceId).orElseThrow();
    }

    @Override
    public ProgressionView marquerCommeTermine(Long userId, Long ressourceId) {
        return mettreAJour(userId, ressourceId, ProgressStatus.COMPLETED, 100, null);
    }

    @Override
    public List<ProgressionView> getMesProgressions(Long userId) {
        return progressionRepo.findByUtilisateurId(userId);
    }

    // ── Vue coach : progressions de tous ses entrepreneurs ────────────

    @Override
    public List<Map<String, Object>> getProgressionsEntrepreneursParCoach(Long coachId) {
        // 1. Trouver tous les entrepreneurIds des projets actifs du coach
        List<Long> entrepreneurIds = projetRepo.findEntrepreneurIdsByCoachId(coachId);

        if (entrepreneurIds.isEmpty()) return List.of();

        // 2. Pour chaque entrepreneur, récupérer ses progressions + infos user
        List<Map<String, Object>> result = new ArrayList<>();

        for (Long entrepreneurId : entrepreneurIds) {
            List<ProgressionView> progressions = progressionRepo.findByUtilisateurId(entrepreneurId);

            // Calculer les stats de cet entrepreneur
            long enCours   = progressions.stream().filter(p -> p.getStatut() == ProgressStatus.IN_PROGRESS).count();
            long completes = progressions.stream().filter(p -> p.getStatut() == ProgressStatus.COMPLETED).count();
            int tauxCompletion = progressions.isEmpty() ? 0
                : (int) Math.round((double) completes / progressions.size() * 100);

            // Infos de l'entrepreneur
            Map<String, Object> entry = new LinkedHashMap<>();
            entry.put("entrepreneurId",  entrepreneurId);
            entry.put("enCours",         enCours);
            entry.put("completes",        completes);
            entry.put("total",            progressions.size());
            entry.put("tauxCompletion",   tauxCompletion);
            entry.put("progressions",     progressions);

            // Nom de l'entrepreneur (optionnel, peut échouer si User non trouvé)
            userRepo.findById(entrepreneurId).ifPresent(u -> {
                entry.put("entrepreneurNom",    u.getFirstName() + " " + u.getLastName());
                entry.put("entrepreneurEmail",  u.getEmailAddress());
            });

            result.add(entry);
        }

        return result;
    }

    @Override
    public List<ProgressionView> getProgressionsParEntrepreneur(Long entrepreneurId) {
        return progressionRepo.findByUtilisateurId(entrepreneurId);
    }
}
