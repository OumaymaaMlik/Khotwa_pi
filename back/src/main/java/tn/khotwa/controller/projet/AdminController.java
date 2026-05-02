package tn.khotwa.controller.projet;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.khotwa.dto.projet.ProjetCoachResponseDto;
import tn.khotwa.dto.projet.TransitionProjetRequestDto;
import tn.khotwa.dto.projet.CoachDisponibiliteDto;
import tn.khotwa.dto.projet.CoachDisponibilitePeriodeResponseDto;
import tn.khotwa.dto.projet.CoachDisponibilitePeriodeRequestDto;
import tn.khotwa.dto.projet.RecommandationAffectationResponseDto;
import tn.khotwa.dto.projet.ProjetResponseDto;
import tn.khotwa.dto.projet.AffectationCoachRequestDto;
import tn.khotwa.dto.projet.AffectationCoachMultipleRequestDto;
import tn.khotwa.dto.projet.ReaffectationCoachRequestDto;
import tn.khotwa.entity.projet.Projet;
import tn.khotwa.entity.user.User;
import tn.khotwa.enums.projectEnum.EtatValidationProjet;
import tn.khotwa.enums.user.Role;
import tn.khotwa.enums.projectEnum.StatutTache;
import tn.khotwa.repository.user.UserRepository;
import tn.khotwa.service.projet.CoachDisponibilitePeriodeService;
import tn.khotwa.service.projet.CoachRecommendationService;
import tn.khotwa.service.projet.ProjetCoachService;
import tn.khotwa.service.projet.ProjetService;
import tn.khotwa.service.projet.ProjetStateMachineService;
import tn.khotwa.repository.projet.ProjetRepository;
import tn.khotwa.repository.projet.ProjetCoachRepository;
import tn.khotwa.repository.projet.SousTacheRepository;
import tn.khotwa.repository.projet.TacheRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/admin")
@RequiredArgsConstructor
public class AdminController {

    private final CoachDisponibilitePeriodeService coachDisponibilitePeriodeService;
    private final CoachRecommendationService coachRecommendationService;
    private final ProjetCoachService projetCoachService;
    private final ProjetStateMachineService stateMachineService;
    private final ProjetService projetService;
    private final ProjetRepository projetRepository;
    private final UserRepository userRepository;
    private final ProjetCoachRepository projetCoachRepository;
    private final TacheRepository tacheRepository;
    private final SousTacheRepository sousTacheRepository;

    @GetMapping("/projets/soumis")
    public ResponseEntity<List<ProjetResponseDto>> projetsSoumis() {
        List<ProjetResponseDto> projets = projetRepository.findByEtatValidation(EtatValidationProjet.SOUMIS_ADMIN).stream()
                .map(p -> projetService.byId(p.getId()))
                .toList();
        return ResponseEntity.ok(projets);
    }

    @GetMapping("/projets/affectes")
    public ResponseEntity<List<ProjetResponseDto>> projetsAffectes() {
        List<ProjetResponseDto> projets = projetRepository.findByEtatValidation(EtatValidationProjet.AFFECTE_COACH).stream()
                .map(p -> projetService.byId(p.getId()))
                .toList();
        return ResponseEntity.ok(projets);
    }

    @PostMapping("/projets/{projetId}/affectations")
    public ResponseEntity<ProjetCoachResponseDto> affecterCoach(@PathVariable Long projetId,
                                                                @RequestBody AffectationCoachRequestDto dto) {
        ProjetCoachResponseDto affectation = projetCoachService.affecterCoach(projetId, dto);
        stateMachineService.affecterCoach(projetId, dto.getAdminId());
        return ResponseEntity.ok(affectation);
    }

    @PostMapping("/projets/{projetId}/affectations/multiple")
    public ResponseEntity<List<ProjetCoachResponseDto>> affecterCoachs(@PathVariable Long projetId,
                                                                       @RequestBody AffectationCoachMultipleRequestDto dto) {
        List<ProjetCoachResponseDto> affectations = projetCoachService.affecterCoachs(projetId, dto);
        stateMachineService.affecterCoach(projetId, dto.getAdminId());
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
        List<CoachDisponibiliteDto> coachs = userRepository.findByRoleAsEntity(Role.COACH)
                .stream()
                .map(this::toCoachDisponibilite)
                .toList();
        return ResponseEntity.ok(coachs);
    }

    @GetMapping("/coachs/{coachId}/disponibilites")
    public ResponseEntity<List<CoachDisponibilitePeriodeResponseDto>> disponibilitesCoach(@PathVariable Long coachId) {
        return ResponseEntity.ok(coachDisponibilitePeriodeService.listByCoachId(coachId));
    }

    @PostMapping("/coachs/{coachId}/disponibilites")
    public ResponseEntity<CoachDisponibilitePeriodeResponseDto> ajouterDisponibiliteCoach(
            @PathVariable Long coachId,
            @RequestBody CoachDisponibilitePeriodeRequestDto dto) {
        return ResponseEntity.ok(coachDisponibilitePeriodeService.create(coachId, dto));
    }

    @DeleteMapping("/coachs/disponibilites/{disponibiliteId}")
    public ResponseEntity<Void> desactiverDisponibiliteCoach(@PathVariable Long disponibiliteId) {
        coachDisponibilitePeriodeService.deactivate(disponibiliteId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/projets/{projetId}/recommandations-coachs")
    public ResponseEntity<RecommandationAffectationResponseDto> recommanderCoachs(@PathVariable Long projetId) {
        return ResponseEntity.ok(coachRecommendationService.recommendForProject(projetId));
    }

    @GetMapping("/reporting")
    public ResponseEntity<Map<String, Object>> reporting() {
        Map<String, Object> report = new HashMap<>();
        report.put("projetsSoumis", projetRepository.findByEtatValidation(EtatValidationProjet.SOUMIS_ADMIN).size());
        report.put("projetsValides", projetRepository.findByEtatValidation(EtatValidationProjet.VALIDE).size());
        report.put("projetsRefuses", projetRepository.findByEtatValidation(EtatValidationProjet.REFUSE).size());
        report.put("retardsTachesActifs", tacheRepository.findByStatutTache(StatutTache.EN_RETARD).size());
        report.put("retardsSousTachesActifs", sousTacheRepository.findByStatutSousTache(StatutTache.EN_RETARD).size());
        report.put("scoreMoyenDiscipline", projetRepository.findAll().stream().mapToInt(Projet::getScoreDisciplineGlobal).average().orElse(0.0));
        return ResponseEntity.ok(report);
    }

    private CoachDisponibiliteDto toCoachDisponibilite(User coach) {
        long chargeActive = projetCoachRepository.countByCoachIdAndActifTrue(coach.getIdUser());

        // Fallback sur firstName + lastName si nomAffiche n'est pas renseigné
        String nomAffiche = coach.getNomAffiche();
        if (nomAffiche == null || nomAffiche.isBlank()) {
            nomAffiche = (coach.getFirstName() + " " + coach.getLastName()).trim();
        }

        return CoachDisponibiliteDto.builder()
                .coachId(coach.getIdUser())
                .nomAffiche(nomAffiche)
                .specialite(coach.getSpecialite())
                .secteur(coach.getRegion())
                .disponibilite(coach.getDisponibilite())
                .chargeActuelle(chargeActive)
                .nombreProjetsActifs(chargeActive)
                .build();
    }
}