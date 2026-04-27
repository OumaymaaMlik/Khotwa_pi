package tn.khotwa.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
@Table(
        name = "message_read_receipts",
        uniqueConstraints = {
                @UniqueConstraint(name = "uk_message_reader", columnNames = {"message_id", "reader_id"})
        }
)
public class MessageReadReceipt {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "message_id", nullable = false)
    private Message message;

    @Column(name = "reader_id", nullable = false)
    private Long readerId;

    @Column(name = "read_at", nullable = false)
    private LocalDateTime readAt;

    @PrePersist
    protected void onCreate() {
        if (readAt == null) {
            readAt = LocalDateTime.now();
        }
    }
}
