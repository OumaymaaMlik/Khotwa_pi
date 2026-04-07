package tn.khotwa.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import tn.khotwa.enums.RoleUtilisateur;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;
    private String prenom;

    @Column(unique = true, nullable = false)
    private String email;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private RoleUtilisateur role;

    private String telephone;
    private String region;
    private String specialite;
    private String disponibilite;
    private String nomAffiche;

    @OneToMany(mappedBy = "entrepreneur")
    @JsonIgnore
    @Builder.Default
    private List<Projet> projetsEntrepreneur = new ArrayList<>();

    @OneToMany(mappedBy = "admin")
    @JsonIgnore
    @Builder.Default
    private List<Projet> projetsAdmin = new ArrayList<>();

    @OneToMany(mappedBy = "coachCreateur")
    @JsonIgnore
    @Builder.Default
    private List<Tache> tachesCreees = new ArrayList<>();

    @OneToMany(mappedBy = "coach")
    @JsonIgnore
    @Builder.Default
    private List<ProjetCoach> affectationsCoach = new ArrayList<>();
}
