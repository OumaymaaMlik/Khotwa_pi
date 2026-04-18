package tn.khotwa.repository.SubscriptionRepo.EngagementRepo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.khotwa.entity.SubscriptionEntities.EngagementScore;
import tn.khotwa.enums.SubscriptionEnums.RiskLevel;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface EngagementScoreRepository extends JpaRepository<EngagementScore, Long> {


    Optional<EngagementScore> findTopByUser_IdUserOrderByComputedAtDesc(Long userId);

    List<EngagementScore> findByRiskLevelAndEmailSentFalse(RiskLevel riskLevel);

    List<EngagementScore> findByRiskLevelOrderByRiskScoreDesc(RiskLevel riskLevel);

    @Query("SELECT c FROM EngagementScore c " +
            "WHERE c.user.idUser = :userId AND c.computedAt >= :since " +
            "ORDER BY c.computedAt DESC")
    List<EngagementScore> findRecentByUser(@Param("userId") Long userId,
                                           @Param("since") LocalDateTime since);

    @Query("SELECT c FROM EngagementScore c " +
            "WHERE c.computedAt = (" +
            "  SELECT MAX(c2.computedAt) FROM EngagementScore c2 WHERE c2.user = c.user" +
            ") ORDER BY c.riskScore DESC")
    List<EngagementScore> findLatestForAllUsers();

    @Query("SELECT c.riskLevel, COUNT(c) FROM EngagementScore c " +
            "WHERE c.computedAt = (" +
            "  SELECT MAX(c2.computedAt) FROM EngagementScore c2 WHERE c2.user = c.user" +
            ") GROUP BY c.riskLevel")
    List<Object[]> countLatestByRiskLevel();
}