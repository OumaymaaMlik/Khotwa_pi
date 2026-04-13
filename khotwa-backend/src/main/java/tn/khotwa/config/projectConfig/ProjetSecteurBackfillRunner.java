package tn.khotwa.config.projectConfig;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import tn.khotwa.entity.projectEntity.Projet;
import tn.khotwa.repository.projectRepository.ProjetRepository;

import java.util.List;

@Component
@RequiredArgsConstructor
public class ProjetSecteurBackfillRunner implements CommandLineRunner {

    private final ProjetRepository projetRepository;

    @Override
    @Transactional
    public void run(String... args) {
        List<Projet> projets = projetRepository.findAll();
        if (projets.isEmpty()) {
            return;
        }

        // Re-saving persisted projects normalizes legacy free-text sector values through the converter.
        projetRepository.saveAll(projets);
    }
}
