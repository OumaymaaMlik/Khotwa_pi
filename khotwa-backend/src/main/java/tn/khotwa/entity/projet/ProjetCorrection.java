package tn.khotwa.entity.projet;

import jakarta.persistence.*;
import lombok.*;
import tn.khotwa.enums.projectEnum.ProjetCorrectionStatut;


import java.time.LocalDateTime;

@Entity
@Table(name = "projet_corrections")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProjetCorrection {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "projet_id", nullable = false)
    private Long projetId;

    @Lob
    @Column(name = "commentaire", nullable = false, columnDefinition = "TEXT")
    private String commentaire;

    @Column(name = "date_demande_correction", nullable = false)
    private LocalDateTime dateDemandeCorrection;

    @Enumerated(EnumType.STRING)
    @Column(name = "statut_correction", nullable = false, length = 40)
    private ProjetCorrectionStatut statutCorrection;
}
