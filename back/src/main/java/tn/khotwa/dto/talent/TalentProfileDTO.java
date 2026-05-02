package tn.khotwa.dto.talent;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TalentProfileDTO {
    private Long id;
    private String nom;
    private String prenom;
    private String email;
    private String telephone;
    private String bio;
    private String competences;
    private String diplomes;
    private String niveauExperience;
    private String cvUrl;
    private String linkedinUrl;
}
