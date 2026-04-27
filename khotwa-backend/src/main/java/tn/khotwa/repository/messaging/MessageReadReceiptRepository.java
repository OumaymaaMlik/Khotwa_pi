package tn.khotwa.repository.messaging;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.khotwa.entity.MessageReadReceipt;

import java.util.List;
import java.util.Optional;

public interface MessageReadReceiptRepository extends JpaRepository<MessageReadReceipt, Long> {
    List<MessageReadReceipt> findByMessageId(Long messageId);
    Optional<MessageReadReceipt> findByMessageIdAndReaderId(Long messageId, Long readerId);
}
