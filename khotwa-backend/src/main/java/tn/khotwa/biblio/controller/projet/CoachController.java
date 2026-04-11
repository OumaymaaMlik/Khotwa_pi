package tn.khotwa.biblio.controller.projet;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.khotwa.biblio.dto.projet.*;
import tn.khotwa.biblio.entity.projet.Document;
import tn.khotwa.biblio.entity.projet.Projet;
import tn.khotwa.biblio.entity.projet.SousTache;
import tn.khotwa.biblio.entity.projet.Tache;
import tn.khotwa.biblio.service.projet.ProjetService;
import tn.khotwa.biblio.service.projet.ProjetStateMachineService;
import tn.khotwa.biblio.service.projet.ProjetCoachService;
import tn.khotwa.biblio.service.projet.TacheService;

import java.util.List;

@RestController
@RequestMapping("/coach")
@RequiredArgsConstructor
public class CoachController {

    private final TacheService tacheService;
    private final ProjetStateMachineService stateMachineService;
    private final ProjetCoachService projetCoachService;
    private final ProjetService projetService;

    @PostMapping("/projets/{projetId}/taches")
    public ResponseEntity<Tache> createTache(@PathVariable Long projetId,
                                             @RequestParam Long coachId,
                                             @Valid @RequestBody TacheCreateRequestDto dto) {
        return ResponseEntity.ok(tacheService.createTache(projetId, coachId, dto));
    }

    @PostMapping("/taches/{tacheId}/sous-taches")
    public ResponseEntity<SousTache> createSousTache(@PathVariable Long tacheId,
                                                     @Valid @RequestBody SousTacheCreateRequestDto dto) {
        return ResponseEntity.ok(tacheService.createSousTache(tacheId, dto));
    }

    @PatchMapping("/taches/{tacheId}/statut")
    public ResponseEntity<Tache> updateStatutTache(@PathVariable Long tacheId,
                                                   @RequestBody TacheStatutUpdateRequestDto dto) {
        return ResponseEntity.ok(tacheService.updateStatutTache(tacheId, dto));
    }

    @PatchMapping("/sous-taches/{sousTacheId}/statut")
    public ResponseEntity<SousTache> updateStatutSousTache(@PathVariable Long sousTacheId,
                                                           @RequestBody SousTacheStatutUpdateRequestDto dto) {
        return ResponseEntity.ok(tacheService.updateStatutSousTache(sousTacheId, dto));
    }

    @PostMapping("/projets/{projetId}/passer-en-revue")
    public ResponseEntity<ProjetResponseDto> passerEnRevue(@PathVariable Long projetId) {
        Projet projet = stateMachineService.passerEnRevueParCoach(projetId);
        return ResponseEntity.ok(projetService.byId(projet.getId()));
    }

    @PostMapping("/projets/{projetId}/valider")
    public ResponseEntity<ProjetResponseDto> validerProjet(@PathVariable Long projetId) {
        Projet projet = stateMachineService.validerProjet(projetId);
        return ResponseEntity.ok(projetService.byId(projet.getId()));
    }

    @PostMapping("/projets/{projetId}/demander-correction")
    public ResponseEntity<ProjetResponseDto> demanderCorrection(@PathVariable Long projetId,
                                                                @RequestBody TransitionProjetRequestDto dto) {
        Projet projet = stateMachineService.demanderCorrection(projetId, dto.getCommentaire());
        return ResponseEntity.ok(projetService.byId(projet.getId()));
    }

    @PostMapping("/taches/{tacheId}/demander-correction")
    public ResponseEntity<Tache> demanderCorrectionTache(@PathVariable Long tacheId,
                                                         @RequestBody TransitionProjetRequestDto dto) {
        return ResponseEntity.ok(tacheService.demanderCorrectionTache(tacheId, dto.getCommentaire()));
    }

    @PostMapping("/sous-taches/{sousTacheId}/demander-correction")
    public ResponseEntity<SousTache> demanderCorrectionSousTache(@PathVariable Long sousTacheId,
                                                                 @RequestBody TransitionProjetRequestDto dto) {
        return ResponseEntity.ok(tacheService.demanderCorrectionSousTache(sousTacheId, dto.getCommentaire()));
    }

    @GetMapping("/projets-affectes")
    public ResponseEntity<List<ProjetResponseDto>> projetsAffectes(@RequestParam Long coachId) {
        List<Long> projetIds = projetCoachService.findAffectationsActivesCoach(coachId)
                .stream()
                .map(ProjetCoachResponseDto::getProjetId)
                .toList();
        return ResponseEntity.ok(projetService.byIds(projetIds));
    }

    @GetMapping("/projets/{projetId}/taches")
    public ResponseEntity<List<Tache>> tachesProjet(@PathVariable Long projetId) {
        return ResponseEntity.ok(tacheService.tachesProjet(projetId));
    }

    @GetMapping("/taches/{tacheId}/sous-taches")
    public ResponseEntity<List<SousTache>> sousTachesTache(@PathVariable Long tacheId) {
        return ResponseEntity.ok(tacheService.sousTachesTache(tacheId));
    }

    @GetMapping("/sous-taches/{sousTacheId}/documents")
    public ResponseEntity<List<Document>> documentsSousTache(@PathVariable Long sousTacheId) {
        return ResponseEntity.ok(tacheService.documentsSousTache(sousTacheId));
    }

    @GetMapping("/projets/{projetId}/documents")
    public ResponseEntity<List<Document>> documentsProjet(@PathVariable Long projetId) {
        return ResponseEntity.ok(tacheService.documentsProjet(projetId));
    }

    @GetMapping("/documents/{documentId}/download")
    public ResponseEntity<byte[]> telechargerDocument(@PathVariable Long documentId) {
        Document document = tacheService.documentById(documentId);
        byte[] content = tacheService.lireContenuDocument(documentId);

        MediaType contentType;
        try {
            contentType = MediaType.parseMediaType(document.getTypeContenu());
        } catch (Exception ex) {
            contentType = MediaType.APPLICATION_OCTET_STREAM;
        }

        return ResponseEntity.ok()
                .contentType(contentType)
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + document.getNomOriginal() + "\"")
                .body(content);
    }
}
