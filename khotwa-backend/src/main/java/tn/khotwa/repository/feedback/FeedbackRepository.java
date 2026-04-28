package tn.khotwa.repository.feedback;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.khotwa.entity.Feedback;

import java.util.List;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
    List<Feedback> findAllByOrderByCreatedAtDesc();
}
