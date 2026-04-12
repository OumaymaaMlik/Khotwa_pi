package tn.khotwa.repository.SubscriptionRepo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.khotwa.entity.SubscriptionEntities.Subscription;
import tn.khotwa.enums.SubscriptionEnums.PlanType;
import tn.khotwa.enums.SubscriptionEnums.SubscriptionStatus;


import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface SubscriptionRepository extends JpaRepository<Subscription, Long> {

    List<Subscription> findByStatutAndDateFinBefore(
            SubscriptionStatus statut,
            LocalDate date);
    Optional<Subscription> findByUser_IdUser(Long userId);


    Optional<Subscription> findByUser_IdUserAndStatutIn(Long userId, List<SubscriptionStatus> statuts);
    List<Subscription> findByStatutAndDateFinBetween(
            SubscriptionStatus statut,
            LocalDate from,
            LocalDate to
    );

    @Query("SELECT COUNT(s) FROM Subscription s " +
            "WHERE s.statut = :statut " +
            "AND s.plan = :plan " +
            "AND s.dateFin >= :today")
    long countActiveByPlan(
            @Param("statut") SubscriptionStatus statut,
            @Param("plan")   PlanType plan,
            @Param("today")  LocalDate today
    );


    @Query("SELECT s FROM Subscription s " +
            "WHERE s.user.idUser = :userId " +
            "AND s.plan = :plan " +
            "AND s.statut = :statut " +
            "AND s.dateFin >= :today")
    Optional<Subscription> findActiveSubscriptionByUserAndPlan(
            @Param("userId") Long userId,
            @Param("plan")   PlanType plan,
            @Param("statut") SubscriptionStatus statut,
            @Param("today")  LocalDate today
    );
}