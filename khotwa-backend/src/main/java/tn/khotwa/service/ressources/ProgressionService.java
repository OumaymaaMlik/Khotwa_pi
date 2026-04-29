package tn.khotwa.service.ressources;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import tn.khotwa.entity.ressources.ProgressionUtilisateur;
import tn.khotwa.entity.ressources.Ressource;
import tn.khotwa.entity.User.User;
import tn.khotwa.enums.ProgressStatus;
import tn.khotwa.exception.ResourceNotFoundException;
import tn.khotwa.projection.ressources.ProgressionView;
import tn.khotwa.repository.User.UserRepository;
import tn.khotwa.repository.projet.ProjetRepository;
import tn.khotwa.repository.ressources.ProgressionRepository;
import tn.khotwa.repository.ressources.RessourceRepository;
import tn.khotwa.DTO.ressources.EntrepreneurProgressionDTO;
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
    private final UserRepository userRepo;

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
    public List<EntrepreneurProgressionDTO> getProgressionsEntrepreneursParCoach(Long coachId) {
        // 1. Récupérer tous les IDs d'entrepreneurs affectés au coach (projets actifs)
        List<Long> entrepreneurIds = projetRepo.findEntrepreneurIdsByCoachId(coachId);
        if (entrepreneurIds.isEmpty()) return List.of();

        // 2. Charger les utilisateurs et leurs progressions en 2 requêtes (pas N+1)
        List<User> entrepreneurs = userRepo.findAllByIdIn(entrepreneurIds);
        List<ProgressionView> toutesProgressions = progressionRepo.findByUtilisateurIdIn(entrepreneurIds);

        // 3. Grouper les progressions par utilisateurId
        Map<Long, List<ProgressionView>> progressionsParUser = toutesProgressions.stream()
                .collect(Collectors.groupingBy(ProgressionView::getUtilisateurId));

        // 4. Construire les DTOs
        return entrepreneurs.stream().map(u -> {
            List<ProgressionView> progressions = progressionsParUser.getOrDefault(u.getIdUser(), List.of());
            return new EntrepreneurProgressionDTO(u, progressions);
        }).collect(Collectors.toList());
    }

    // SECURITÉ : Vérifier si le coach a le droit de voir cet entrepreneur
    public boolean isCoachLinkedToEntrepreneur(Long coachId, Long entrepreneurId) {
        return projetRepo.existsByCoachIdAndEntrepreneurId(coachId, entrepreneurId);
    }

    @Override
    public List<ProgressionView> getProgressionsParEntrepreneur(Long entrepreneurId) {
        return progressionRepo.findByUtilisateurId(entrepreneurId);
    }
}