package tn.khotwa.entity.talent;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "startups")
@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class Startup {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nom;

    private String secteur;
    private String description;
    private String email;

    @OneToMany(mappedBy = "startup", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Annonce> annonces;
}