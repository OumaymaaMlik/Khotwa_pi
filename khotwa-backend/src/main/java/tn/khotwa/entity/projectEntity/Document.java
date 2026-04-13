package tn.khotwa.entity.projectEntity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "documents")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Document {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nomFichier;

    @Column(nullable = false)
    private String nomOriginal;

    @Column(nullable = false)
    private String typeContenu;

    @Column(nullable = false)
    private String cheminStockage;

    @Column(nullable = false)
    private long tailleFichier;

    @Column(nullable = false)
    private LocalDateTime dateUpload;

    @Column(name = "sous_tache_id", nullable = false)
    private Long sousTacheId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "sous_tache_id", insertable = false, updatable = false)
    @JsonIgnore
    private SousTache sousTache;
}
