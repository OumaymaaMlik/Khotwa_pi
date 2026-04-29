package tn.khotwa.repository.SubscriptionRepo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.khotwa.entity.Subscription.Discount;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface DiscountRepository extends JpaRepository<Discount, Long> {

    /** Toutes les remises actives pour un user spécifique OU globales (user null), pour un plan donné */
    @Query("SELECT d FROM Discount d WHERE d.status = 'ACTIVE' " +
            "AND d.planOffer.id = :planOfferId " +
            "AND (d.user IS NULL OR d.user.idUser = :userId) " +
            "AND d.validFrom <= :now AND d.validUntil >= :now " +
            "ORDER BY d.discountPercent DESC")
    List<Discount> findActiveDiscountsForUserAndPlan(
            @Param("userId") Long userId,
            @Param("planOfferId") Long planOfferId,
            @Param("now") LocalDateTime now);

    /** Toutes les remises actives visibles par un user (globales OU ciblées à lui) */
    @Query("SELECT d FROM Discount d WHERE d.status = 'ACTIVE' " +
            "AND (d.user IS NULL OR d.user.idUser = :userId) " +
            "AND d.validFrom <= :now AND d.validUntil >= :now " +
            "ORDER BY d.discountPercent DESC")
    List<Discount> findActiveDiscountsForUser(
            @Param("userId") Long userId,
            @Param("now") LocalDateTime now);

    /** Toutes les remises (admin view) */
    List<Discount> findAllByOrderByCreatedAtDesc();

    /** Remises expirées à nettoyer */
    @Query("SELECT d FROM Discount d WHERE d.status = 'ACTIVE' AND d.validUntil < :now")
    List<Discount> findExpiredActive(@Param("now") LocalDateTime now);

    /** Meilleure remise active pour un user sur un plan */
    @Query("SELECT d FROM Discount d WHERE d.status = 'ACTIVE' " +
            "AND d.planOffer.id = :planOfferId " +
            "AND (d.user IS NULL OR d.user.idUser = :userId) " +
            "AND d.validFrom <= :now AND d.validUntil >= :now " +
            "ORDER BY d.discountPercent DESC")
    Optional<Discount> findBestDiscountForUserAndPlan(
            @Param("userId") Long userId,
            @Param("planOfferId") Long planOfferId,
            @Param("now") LocalDateTime now);
}