package tn.khotwa.controller.projectcontroller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import tn.khotwa.dto.projectDto.*;
import tn.khotwa.entity.projectEntity.Document;
import tn.khotwa.entity.projectEntity.SousTache;
import tn.khotwa.entity.projectEntity.Tache;
import tn.khotwa.service.projectService.ProjetService;
import tn.khotwa.service.projectService.ProjetCoachService;
import tn.khotwa.service.projectService.ProjetStateMachineService;
import tn.khotwa.service.projectService.TacheService;

import java.util.List;

@RestController
@RequestMapping("/entrepreneur")
@RequiredArgsConstructor
public class EntrepreneurController {

    private final ProjetService projetService;
    private final ProjetCoachService projetCoachService;
    private final ProjetStateMachineService stateMachineService;
    private final TacheService tacheService;

    @PostMapping("/projets")
    public ResponseEntity<ProjetResponseDto> createProjet(@RequestParam Long entrepreneurId,
                                                          @Valid @RequestBody ProjetCreateRequestDto dto) {
        return ResponseEntity.ok(projetService.createProjet(entrepreneurId, dto));
    }

    @PutMapping("/projets/{projetId}")
    public ResponseEntity<ProjetResponseDto> updateProjet(@PathVariable Long projetId,
                                                          @RequestParam Long entrepreneurId,
                                                          @Valid @RequestBody ProjetUpdateRequestDto dto) {
        return ResponseEntity.ok(projetService.updateProjetBrouillon(projetId, entrepreneurId, dto));
    }

    @PostMapping("/projets/{projetId}/soumettre")
    public ResponseEntity<ProjetResponseDto> soumettre(@PathVariable Long projetId,
                                                       @RequestParam Long entrepreneurId) {
        projetService.ensureOwnership(projetId, entrepreneurId);
        return ResponseEntity.ok(projetService.byId(stateMachineService.soumettreProjet(projetId).getId()));
    }

    @PostMapping("/projets/{projetId}/resoumettre-correction")
    public ResponseEntity<ProjetResponseDto> resoumettreCorrection(@PathVariable Long projetId,
                                                                   @RequestParam Long entrepreneurId) {
        projetService.ensureOwnership(projetId, entrepreneurId);
        return ResponseEntity.ok(projetService.byId(stateMachineService.resoumettreCorrection(projetId).getId()));
    }

    @DeleteMapping("/projets/{projetId}")
    public ResponseEntity<Void> deleteProjetBrouillon(@PathVariable Long projetId,
                                                      @RequestParam Long entrepreneurId) {
        projetService.deleteProjetBrouillon(projetId, entrepreneurId);
        return ResponseEntity.noContent().build();
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

    @PostMapping("/sous-taches/{sousTacheId}/documents")
    public ResponseEntity<Document> uploadDocument(@PathVariable Long sousTacheId,
                                                   @RequestBody DocumentUploadRequestDto dto) {
        return ResponseEntity.ok(tacheService.uploaderDocumentSousTache(sousTacheId, dto));
    }

    @PostMapping(value = "/sous-taches/{sousTacheId}/documents/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Document> uploadDocumentFile(@PathVariable Long sousTacheId,
                                                       @RequestParam("file") MultipartFile file) {
        return ResponseEntity.ok(tacheService.uploaderDocumentSousTacheFichier(sousTacheId, file));
    }

    @GetMapping("/projets")
    public ResponseEntity<List<ProjetResponseDto>> projetsByEntrepreneur(@RequestParam Long entrepreneurId) {
        return ResponseEntity.ok(projetService.projetsByEntrepreneur(entrepreneurId));
    }

    @GetMapping("/projets/{projetId}/taches")
    public ResponseEntity<List<Tache>> tachesProjet(@PathVariable Long projetId) {
        return ResponseEntity.ok(tacheService.tachesProjet(projetId));
    }

    @GetMapping("/projets/{projetId}/coachs")
    public ResponseEntity<List<ProjetCoachResponseDto>> coachsAssignes(@PathVariable Long projetId) {
        return ResponseEntity.ok(projetCoachService.coachsActifsProjet(projetId));
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

    @PostMapping("/taches/{tacheId}/demander-prolongation")
    public ResponseEntity<Tache> demanderProlongationTache(@PathVariable Long tacheId,
                                                           @Valid @RequestBody ProlongationRequestDto dto) {
        return ResponseEntity.ok(tacheService.demanderProlongationTache(tacheId, dto));
    }

    @PostMapping("/sous-taches/{sousTacheId}/demander-prolongation")
    public ResponseEntity<SousTache> demanderProlongationSousTache(@PathVariable Long sousTacheId,
                                                                   @Valid @RequestBody ProlongationRequestDto dto) {
        return ResponseEntity.ok(tacheService.demanderProlongationSousTache(sousTacheId, dto));
    }
}
