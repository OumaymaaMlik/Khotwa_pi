package tn.khotwa.repository.messaging;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.khotwa.entity.ConversationParticipant;

import java.util.List;
import java.util.Optional;

public interface ConversationParticipantRepository extends JpaRepository<ConversationParticipant, Long> {
    List<ConversationParticipant> findByConversationIdAndActiveTrue(Long conversationId);
    List<ConversationParticipant> findByConversationId(Long conversationId);
    List<ConversationParticipant> findByUserIdAndActiveTrue(Long userId);
    Optional<ConversationParticipant> findByConversationIdAndUserIdAndActiveTrue(Long conversationId, Long userId);
    boolean existsByConversationIdAndUserIdAndActiveTrue(Long conversationId, Long userId);

    @Query("""
            SELECT COUNT(p.id)
            FROM ConversationParticipant p
            WHERE p.conversation.id = :conversationId AND p.active = true
            """)
    long countActiveByConversationId(@Param("conversationId") Long conversationId);
}
