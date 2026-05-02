package tn.khotwa.repository.messaging;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.khotwa.entity.Conversation;
import tn.khotwa.entity.ConversationType;

import java.util.List;
import java.util.Optional;

public interface ConversationRepository extends JpaRepository<Conversation, Long> {
    Optional<Conversation> findFirstByProjectIdAndTypeOrderByUpdatedAtDesc(Long projectId, ConversationType type);

    @Query("""
            SELECT c
            FROM Conversation c
            JOIN ConversationParticipant p1 ON p1.conversation.id = c.id AND p1.active = true
            JOIN ConversationParticipant p2 ON p2.conversation.id = c.id AND p2.active = true
            WHERE c.type = :type
              AND p1.userId = :userA
              AND p2.userId = :userB
              AND (SELECT COUNT(p.id) FROM ConversationParticipant p WHERE p.conversation.id = c.id AND p.active = true) = 2
            """)
    Optional<Conversation> findDirectBetween(
            @Param("type") ConversationType type,
            @Param("userA") Long userA,
            @Param("userB") Long userB
    );

    @Query("""
            SELECT c
            FROM Conversation c
            JOIN ConversationParticipant p ON p.conversation.id = c.id
            WHERE p.userId = :userId AND p.active = true
            ORDER BY c.updatedAt DESC
            """)
    List<Conversation> findAllForUser(@Param("userId") Long userId);
}
