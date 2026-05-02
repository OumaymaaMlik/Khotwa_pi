package tn.khotwa.service.sertalent;

import tn.khotwa.dto.talent.AnnonceDTO;
import tn.khotwa.entity.talent.Annonce;
import tn.khotwa.entity.talent.Startup;
import tn.khotwa.repository.repotalent.AnnonceRepository;
import tn.khotwa.repository.repotalent.StartupRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AnnonceService {

    private final AnnonceRepository annonceRepository;
    private final StartupRepository startupRepository;

    // Créer une annonce
    public Annonce creerAnnonce(AnnonceDTO dto) {
        Startup startup = startupRepository.findById(dto.getStartupId())
                .orElseThrow(() -> new RuntimeException("Startup introuvable"));

        Annonce annonce = Annonce.builder()
                .titre(dto.getTitre())
                .description(dto.getDescription())
                .typePoste(dto.getTypePoste())
                .competencesRequises(dto.getCompetencesRequises())
                .localisation(dto.getLocalisation())
                .startup(startup)
                .datePublication(LocalDate.now())
                .active(dto.getActive() != null ? dto.getActive() : true)
                .build();

        return annonceRepository.save(annonce);
    }

    // Modifier une annonce
    public Annonce modifierAnnonce(Long id, AnnonceDTO dto) {
        Annonce annonce = annonceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Annonce introuvable"));

        if (dto.getTitre() != null) annonce.setTitre(dto.getTitre());
        if (dto.getDescription() != null) annonce.setDescription(dto.getDescription());
        if (dto.getTypePoste() != null) annonce.setTypePoste(dto.getTypePoste());
        if (dto.getCompetencesRequises() != null) annonce.setCompetencesRequises(dto.getCompetencesRequises());
        if (dto.getLocalisation() != null) annonce.setLocalisation(dto.getLocalisation());
        if (dto.getActive() != null) annonce.setActive(dto.getActive());
        if (dto.getStartupId() != null) {
            Startup startup = startupRepository.findById(dto.getStartupId())
                    .orElseThrow(() -> new RuntimeException("Startup introuvable"));
            annonce.setStartup(startup);
        }

        return annonceRepository.save(annonce);
    }

    // Supprimer
    public void supprimerAnnonce(Long id) {
        annonceRepository.deleteById(id);
    }

    // Récupérer toutes
    public List<Annonce> getAllAnnonces() {
        return annonceRepository.findAll();
    }

    // Récupérer par id
    public Annonce getAnnonceById(Long id) {
        return annonceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Annonce introuvable"));
    }
}