package tn.khotwa.controller.projet;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import tn.khotwa.dto.projet.*;
import tn.khotwa.entity.projet.Projet;
import tn.khotwa.enums.EtatValidationProjet;
import tn.khotwa.enums.StatutTache;
import tn.khotwa.projection.user.UserView;
import tn.khotwa.repository.UserRepo.UserRepository;
import tn.khotwa.repository.projet.ProjetCoachRepository;
import tn.khotwa.repository.projet.ProjetRepository;
import tn.khotwa.repository.projet.SousTacheRepository;
import tn.khotwa.repository.projet.TacheRepository;
import tn.khotwa.service.projet.ProjetCoachService;
import tn.khotwa.service.projet.ProjetService;
import tn.khotwa.service.projet.ProjetStateMachineService;
import tn.khotwa.service.UserServices.CurrentUserService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/admin")
@RequiredArgsConstructor
@PreAuthorize("hasRole('ADMIN')")
public class AdminController {

    private final ProjetCoachService projetCoachService;
    private final ProjetStateMachineService stateMachineService;
    private final ProjetService projetService;
    private final ProjetRepository projetRepository;
    private final UserRepository userRepository;
    private final ProjetCoachRepository projetCoachRepository;
    private final TacheRepository tacheRepository;
    private final SousTacheRepository sousTacheRepository;
    private final CurrentUserService currentUser;

    @GetMapping("/projets/soumis")
    public ResponseEntity<List<ProjetResponseDto>> projetsSoumis() {
        return ResponseEntity.ok(
            projetRepository.findByEtatValidation(EtatValidationProjet.SOUMIS_ADMIN)
                .stream().map(p -> projetService.byId(p.getId())).toList()
        );
    }

    @GetMapping("/projets/affectes")
    public ResponseEntity<List<ProjetResponseDto>> projetsAffectes() {
        return ResponseEntity.ok(
            projetRepository.findByEtatValidation(EtatValidationProjet.AFFECTE_COACH)
                .stream().map(p -> projetService.byId(p.getId())).toList()
        );
    }

    @PostMapping("/projets/{projetId}/affectations")
    public ResponseEntity<ProjetCoachResponseDto> affecterCoach(@PathVariable Long projetId,
                                                                @RequestBody AffectationCoachRequestDto dto) {
        // Inject adminId from JWT
        dto.setAdminId(currentUser.getCurrentUserId());
        ProjetCoachResponseDto affectation = projetCoachService.affecterCoach(projetId, dto);
        stateMachineService.affecterCoach(projetId, currentUser.getCurrentUserId());
        return ResponseEntity.ok(affectation);
    }

    @PostMapping("/projets/{projetId}/affectations/multiple")
    public ResponseEntity<List<ProjetCoachResponseDto>> affecterCoachs(@PathVariable Long projetId,
                                                                        @RequestBody AffectationCoachMultipleRequestDto dto) {
        dto.setAdminId(currentUser.getCurrentUserId());
        List<ProjetCoachResponseDto> affectations = projetCoachService.affecterCoachs(projetId, dto);
        stateMachineService.affecterCoach(projetId, currentUser.getCurrentUserId());
        return ResponseEntity.ok(affectations);
    }

    @PostMapping("/projets/{projetId}/reaffectations")
    public ResponseEntity<ProjetCoachResponseDto> reaffecterCoach(@PathVariable Long projetId,
                                                                   @RequestBody ReaffectationCoachRequestDto dto) {
        return ResponseEntity.ok(projetCoachService.reaffecterCoach(projetId, dto));
    }

    @DeleteMapping("/affectations/{affectationId}")
    public ResponseEntity<Void> desactiverAffectation(@PathVariable Long affectationId) {
        projetCoachService.desactiverAffectation(affectationId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/projets/{projetId}/affectations")
    public ResponseEntity<List<ProjetCoachResponseDto>> historiqueAffectations(@PathVariable Long projetId) {
        return ResponseEntity.ok(projetCoachService.historiqueProjet(projetId));
    }

    @PostMapping("/projets/{projetId}/refuser")
    public ResponseEntity<Projet> refuserProjet(@PathVariable Long projetId,
                                                @RequestBody TransitionProjetRequestDto dto) {
        return ResponseEntity.ok(stateMachineService.refuserProjet(projetId, dto.getJustification()));
    }

    @PostMapping("/projets/{projetId}/suspendre")
    public ResponseEntity<Projet> suspendreProjet(@PathVariable Long projetId) {
        return ResponseEntity.ok(stateMachineService.suspendreProjet(projetId));
    }

    @PostMapping("/projets/{projetId}/reprendre")
    public ResponseEntity<Projet> reprendreProjet(@PathVariable Long projetId) {
        return ResponseEntity.ok(stateMachineService.reprendreProjet(projetId));
    }

    @PostMapping("/projets/{projetId}/archiver")
    public ResponseEntity<Projet> archiverProjet(@PathVariable Long projetId) {
        return ResponseEntity.ok(stateMachineService.archiverProjet(projetId));
    }

    @GetMapping("/coachs/disponibles")
    public ResponseEntity<List<CoachDisponibiliteDto>> coachsDisponibles() {
        List<CoachDisponibiliteDto> coachs = userRepository.findAllProjectedBy()
                .stream()
                .filter(u -> u.getRole() != null && u.getRole().name().equals("COACH"))
                .map(this::toCoachDisponibilite)
                .toList();
        return ResponseEntity.ok(coachs);
    }

    @GetMapping("/reporting")
    public ResponseEntity<Map<String, Object>> reporting() {
        Map<String, Object> report = new HashMap<>();
        report.put("projetsSoumis",       projetRepository.findByEtatValidation(EtatValidationProjet.SOUMIS_ADMIN).size());
        report.put("projetsValides",       projetRepository.findByEtatValidation(EtatValidationProjet.VALIDE).size());
        report.put("projetsRefuses",       projetRepository.findByEtatValidation(EtatValidationProjet.REFUSE).size());
        report.put("retardsTachesActifs",  tacheRepository.findByStatutTache(StatutTache.EN_RETARD).size());
        report.put("retardsSousTachesActifs", sousTacheRepository.findByStatutSousTache(StatutTache.EN_RETARD).size());
        report.put("scoreMoyenDiscipline", projetRepository.findAll().stream()
                .mapToInt(Projet::getScoreDisciplineGlobal).average().orElse(0.0));
        return ResponseEntity.ok(report);
    }

    private CoachDisponibiliteDto toCoachDisponibilite(UserView coach) {
        long chargeActive = projetCoachRepository.countByCoachIdAndActifTrue(coach.getIdUser());
        return CoachDisponibiliteDto.builder()
                .coachId(coach.getIdUser())
                .nomAffiche(coach.getFirstName() + " " + coach.getLastName())
                .specialite(null)
                .secteur(null)
                .disponibilite(null)
                .chargeActuelle(chargeActive)
                .nombreProjetsActifs(chargeActive)
                .build();
    }
}
