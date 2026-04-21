package tn.khotwa.config.configtalent;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import tn.khotwa.entity.talent.Annonce;
import tn.khotwa.entity.talent.Startup;
import tn.khotwa.entity.talent.TalentProfile;
import tn.khotwa.repository.repotalent.AnnonceRepository;
import tn.khotwa.repository.repotalent.StartupRepository;
import tn.khotwa.repository.repotalent.TalentProfileRepository;

import java.time.LocalDate;

@Component
@RequiredArgsConstructor
public class DataSeeder implements CommandLineRunner {

    private final TalentProfileRepository talentRepository;
    private final AnnonceRepository annonceRepository;
    private final StartupRepository startupRepository;

    @Override
    public void run(String... args) {
        if (talentRepository.count() < 3) {
            talentRepository.save(TalentProfile.builder()
                    .nom("Ben Salah").prenom("Amine").email("amine@talent.tn")
                    .competences("Java,Spring,Docker,SQL")
                    .diplomes("Master Informatique")
                    .niveauExperience("INTERMEDIAIRE")
                    .bio("Basé à Tunis")
                    .build());
            talentRepository.save(TalentProfile.builder()
                    .nom("Trabelsi").prenom("Leila").email("leila@talent.tn")
                    .competences("Python,LLM Fine-tuning,Vector databases,Prompt engineering")
                    .diplomes("Ingénieur IA")
                    .niveauExperience("SENIOR")
                    .bio("Remote")
                    .build());
            talentRepository.save(TalentProfile.builder()
                    .nom("Mansour").prenom("Hatem").email("hatem@talent.tn")
                    .competences("Angular,TypeScript,UX")
                    .diplomes("Licence")
                    .niveauExperience("JUNIOR")
                    .bio("Sfax")
                    .build());
        }

        Startup startup = startupRepository.findAll().stream().findFirst().orElseGet(() ->
                startupRepository.save(Startup.builder()
                        .nom("Khotwa Labs")
                        .secteur("HR Tech")
                        .email("contact@khotwa.tn")
                        .description("Plateforme recrutement IA")
                        .build()));

        if (annonceRepository.count() < 3) {
            annonceRepository.save(Annonce.builder()
                    .titre("GenAI Engineer")
                    .description("Build LLM products, RAG systems, vector search.")
                    .typePoste(Annonce.TypePoste.EMPLOI)
                    .competencesRequises("Python,Prompt engineering,LLM Fine-tuning,Vector databases,Docker")
                    .localisation("Remote")
                    .datePublication(LocalDate.now())
                    .active(true)
                    .startup(startup)
                    .build());
            annonceRepository.save(Annonce.builder()
                    .titre("Senior Backend Engineer")
                    .description("Build scalable Spring microservices")
                    .typePoste(Annonce.TypePoste.EMPLOI)
                    .competencesRequises("Java,Spring,SQL,Docker")
                    .localisation("Tunis")
                    .datePublication(LocalDate.now())
                    .active(true)
                    .startup(startup)
                    .build());
            annonceRepository.save(Annonce.builder()
                    .titre("Frontend Angular Developer")
                    .description("Angular dashboard and reusable UI components.")
                    .typePoste(Annonce.TypePoste.STAGIAIRE)
                    .competencesRequises("Angular,TypeScript,RxJS")
                    .localisation("Hybrid")
                    .datePublication(LocalDate.now())
                    .active(true)
                    .startup(startup)
                    .build());
        }
    }
}
