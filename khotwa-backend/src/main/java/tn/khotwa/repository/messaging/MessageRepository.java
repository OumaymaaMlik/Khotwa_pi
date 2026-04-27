package tn.khotwa.repository.messaging;

import tn.khotwa.entity.Message;
import tn.khotwa.entity.MessageStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;
import tn.khotwa.entity.MessageType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface MessageRepository extends JpaRepository<Message, Long> {

    List<Message> findByReceiverId(Long receiverId);
    List<Message> findBySenderId(Long senderId);
    List<Message> findByReceiverIdAndStatus(Long receiverId, MessageStatus status);
    List<Message> findByReceiverIdAndType(Long receiverId, MessageType type);
    List<Message> findByReceiverIdAndStatusNot(Long receiverId, MessageStatus status);
    Page<Message> findByReceiverId(Long receiverId, Pageable pageable);
    Page<Message> findBySenderId(Long senderId, Pageable pageable);
    Page<Message> findByReceiverIdAndStatusNot(Long receiverId, MessageStatus status, Pageable pageable);
    @Query("SELECT m FROM Message m WHERE (m.senderId = :userId OR m.receiverId = :userId)")
    List<Message> searchMessages(@Param("userId") Long userId, @Param("query") String query);
    @Query("SELECT m FROM Message m WHERE m.createdAt BETWEEN :start AND :end")
    List<Message> findTodaysMessages(
            @Param("start") LocalDateTime start,
            @Param("end") LocalDateTime end
    );
    @Query("SELECT m FROM Message m WHERE (m.senderId = :u1 AND m.receiverId = :u2) OR (m.senderId = :u2 AND m.receiverId = :u1) ORDER BY m.createdAt ASC")
    List<Message> findRecentConversation(@Param("u1") Long user1, @Param("u2") Long user2, Pageable pageable);

    @Query("SELECT m FROM Message m WHERE (m.senderId = :u1 AND m.receiverId = :u2) OR (m.senderId = :u2 AND m.receiverId = :u1) ORDER BY m.createdAt DESC")
    List<Message> findRecentConversationDesc(@Param("u1") Long user1, @Param("u2") Long user2, Pageable pageable);
}