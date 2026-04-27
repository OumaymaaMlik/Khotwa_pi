package tn.khotwa.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
@Data
@Table(name = "messages")
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Subject cannot be empty")
    private String subject;

    @Column(columnDefinition = "TEXT")
    @NotBlank(message = "Body cannot be empty")
    private String body;

    @NotNull(message = "Sender ID is required")
    private Long senderId;

    // Nullable for group conversations. For DIRECT conversations we still set receiverId for compatibility.
    private Long receiverId;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "conversation_id", nullable = false)
    private Conversation conversation;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "parent_message_id")
    private Message parentMessage;

    @NotNull(message = "Message type is required")
    @Enumerated(EnumType.STRING)
    private MessageType type;

    @Enumerated(EnumType.STRING)
    private MessageStatus status;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private String fileUrl;
    private boolean deletedForAll = false;

    @Column(columnDefinition = "TEXT")
    private String deletedForUsers;


    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
        status = MessageStatus.PENDING;
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }
}