package tn.khotwa.service.admin;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tn.khotwa.dto.admin.AdminDashboardDTO;
import tn.khotwa.entity.talent.Annonce;
import tn.khotwa.entity.talent.Candidature;
import tn.khotwa.repository.repotalent.AnnonceRepository;
import tn.khotwa.repository.repotalent.CandidatureRepository;

import java.time.Duration;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AdminDashboardService {

    private final AnnonceRepository annonceRepository;
    private final CandidatureRepository candidatureRepository;

    public AdminDashboardDTO getDashboardAnalytics() {
        long totalOffres = annonceRepository.count();
        long totalCandidats = candidatureRepository.count();
        long offresAvecCandidatures = annonceRepository.findAnnoncesWithCandidatures().size();

        List<Candidature> allCandidatures = candidatureRepository.findAll();
        
        Set<Long> offresContactees = new HashSet<>();
        long totalReponseTimeHours = 0;
        int contactCount = 0;

        Map<Annonce, Long> candidaturesCountByAnnonce = new HashMap<>();

        for (Candidature c : allCandidatures) {
            if (c.getAnnonce() != null) {
                candidaturesCountByAnnonce.put(c.getAnnonce(), candidaturesCountByAnnonce.getOrDefault(c.getAnnonce(), 0L) + 1);

                if (Boolean.TRUE.equals(c.getContactEntrepreneur())) {
                    offresContactees.add(c.getAnnonce().getId());
                    if (c.getDateCandidature() != null && c.getDateContactEntrepreneur() != null) {
                        totalReponseTimeHours += Duration.between(c.getDateCandidature(), c.getDateContactEntrepreneur()).toHours();
                        contactCount++;
                    }
                }
            }
        }

        double tauxContact = 0;
        if (totalOffres > 0) {
            tauxContact = ((double) offresContactees.size() / totalOffres) * 100;
        }

        double tempsMoyenReponse = 0;
        if (contactCount > 0) {
            tempsMoyenReponse = (double) totalReponseTimeHours / contactCount;
        }

        List<AdminDashboardDTO.OffreActiveDTO> top5Offres = candidaturesCountByAnnonce.entrySet().stream()
                .sorted(Map.Entry.<Annonce, Long>comparingByValue().reversed())
                .limit(5)
                .map(entry -> AdminDashboardDTO.OffreActiveDTO.builder()
                        .id(entry.getKey().getId())
                        .titre(entry.getKey().getTitre())
                        .nombreCandidatures(entry.getValue())
                        .build())
                .collect(Collectors.toList());

        return AdminDashboardDTO.builder()
                .totalOffres(totalOffres)
                .totalCandidats(totalCandidats)
                .offresAvecCandidatures(offresAvecCandidatures)
                .tauxContactEntrepreneurs(Math.round(tauxContact * 100.0) / 100.0)
                .tempsMoyenReponse(Math.round(tempsMoyenReponse * 100.0) / 100.0)
                .offresPlusActives(top5Offres)
                .build();
    }
}
