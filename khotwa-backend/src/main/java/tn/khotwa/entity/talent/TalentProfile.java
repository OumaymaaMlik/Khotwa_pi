package tn.khotwa.entity.talent;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "talent_profiles")
@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class TalentProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nom;

    private String prenom;
    private String email;
    private String telephone;

    @Column(columnDefinition = "TEXT")
    private String bio;

    // Compétences séparées par virgule : "Java,React,MySQL"
    @Column(name = "competences", columnDefinition = "TEXT")
    private String competences;

    // Diplômes séparés par virgule : "Master Informatique,Licence Math"
    @Column(name = "diplomes", columnDefinition = "TEXT")
    private String diplomes;

    private String niveauExperience; // JUNIOR, INTERMEDIAIRE, SENIOR
    private String cvUrl;
    private String linkedinUrl;
}