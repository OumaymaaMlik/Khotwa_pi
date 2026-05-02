package tn.khotwa.entity.talent;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "audit_logs")
@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class AuditLog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String action; // ex: "CONSULTATION_PROFIL", "SIGNATURE_NDA", "EXPORT_DONNEES"

    private String targetId; // ID of the resource affected
    
    private String performedBy; // user email or ID

    private LocalDateTime timestamp;
    
    private String details;
}
