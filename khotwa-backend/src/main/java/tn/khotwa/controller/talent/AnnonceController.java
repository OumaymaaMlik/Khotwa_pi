package tn.khotwa.controller.talent;

import tn.khotwa.DTO.talent.AnnonceDTO;
import tn.khotwa.DTO.talent.AnnonceResponseDTO;
import tn.khotwa.entity.talent.Annonce;
import tn.khotwa.service.sertalent.AnnonceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/annonces")
@CrossOrigin(origins = "http://localhost:4200") // Angular port
@RequiredArgsConstructor
public class AnnonceController {

    private final AnnonceService annonceService;

    // Créer une annonce
    @PostMapping
    public ResponseEntity<AnnonceResponseDTO> creerAnnonce(@RequestBody AnnonceDTO dto) {
        Annonce annonce = annonceService.creerAnnonce(dto);
        AnnonceResponseDTO response = mapToResponse(annonce);
        return ResponseEntity.ok(response);
    }

    // Modifier une annonce
    @PutMapping("/{id}")
    public ResponseEntity<AnnonceResponseDTO> modifierAnnonce(@PathVariable Long id,
                                                              @RequestBody AnnonceDTO dto) {
        Annonce annonce = annonceService.modifierAnnonce(id, dto);
        return ResponseEntity.ok(mapToResponse(annonce));
    }

    // Supprimer
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> supprimerAnnonce(@PathVariable Long id) {
        annonceService.supprimerAnnonce(id);
        return ResponseEntity.noContent().build();
    }

    // Récupérer toutes
    @GetMapping
    public ResponseEntity<List<AnnonceResponseDTO>> getAllAnnonces() {
        List<AnnonceResponseDTO> dtos = annonceService.getAllAnnonces()
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
        return ResponseEntity.ok(dtos);
    }

    // Récupérer par id
    @GetMapping("/{id}")
    public ResponseEntity<AnnonceResponseDTO> getAnnonce(@PathVariable Long id) {
        Annonce annonce = annonceService.getAnnonceById(id);
        return ResponseEntity.ok(mapToResponse(annonce));
    }

    // Mapper entity -> response DTO
    // Dans AnnonceController.java — méthode mapToResponse
    private AnnonceResponseDTO mapToResponse(Annonce annonce) {
        return AnnonceResponseDTO.builder()
                .id(annonce.getId())
                .titre(annonce.getTitre())
                .description(annonce.getDescription())
                .typePoste(annonce.getTypePoste())
                .competencesRequises(annonce.getCompetencesRequises())
                .localisation(annonce.getLocalisation())
                .active(annonce.isActive())
                .startupNom(annonce.getStartup() != null ? annonce.getStartup().getNom() : null)
                .startupId(annonce.getStartup() != null ? annonce.getStartup().getId() : null) // ← AJOUTER
                .build();
    }
}