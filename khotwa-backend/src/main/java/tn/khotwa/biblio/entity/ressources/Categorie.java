package tn.khotwa.biblio.entity.ressources;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "categories")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Categorie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 100)
    private String nom;

    @Column(length = 255)
    private String description;

    @Column(length = 50)
    private String couleur;

    @Column(length = 10)
    private String icone;

    // Secteur d'activité auquel cette catégorie est liée (ex: "agriculture", "tech", "sante")
    // null = catégorie transversale, visible par tous les secteurs
    @Column(length = 100)
    private String secteur;
}
