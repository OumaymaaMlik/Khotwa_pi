// service/TalentService.java
package tn.khotwa.service.sertalent;

import tn.khotwa.DTO.talent.TalentProfileDTO;
import tn.khotwa.entity.talent.TalentProfile;
import tn.khotwa.repository.repotalent.TalentProfileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TalentService {

    private final TalentProfileRepository talentRepository;

    public TalentProfile creerProfil(TalentProfileDTO dto) {
        TalentProfile talent = TalentProfile.builder()
                .nom(dto.getNom())
                .prenom(dto.getPrenom())
                .email(dto.getEmail())
                .telephone(dto.getTelephone())
                .bio(dto.getBio())
                .competences(dto.getCompetences())
                .diplomes(dto.getDiplomes())
                .niveauExperience(dto.getNiveauExperience())
                .cvUrl(dto.getCvUrl())
                .linkedinUrl(dto.getLinkedinUrl())
                .build();
        return talentRepository.save(talent);
    }

    public List<TalentProfile> getAllTalents() {
        return talentRepository.findAll();
    }

    public TalentProfile getTalentById(Long id) {
        return talentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Talent introuvable: " + id));
    }

    public TalentProfile modifierProfil(Long id, TalentProfileDTO dto) {
        TalentProfile talent = getTalentById(id);
        talent.setNom(dto.getNom());
        talent.setPrenom(dto.getPrenom());
        talent.setCompetences(dto.getCompetences());
        talent.setDiplomes(dto.getDiplomes());
        talent.setBio(dto.getBio());
        return talentRepository.save(talent);
    }

    public void supprimerProfil(Long id) {
        talentRepository.deleteById(id);
    }
}