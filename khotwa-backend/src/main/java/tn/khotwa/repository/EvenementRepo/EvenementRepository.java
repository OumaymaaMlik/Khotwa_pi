package tn.khotwa.repository.EvenementRepo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import tn.khotwa.entity.evenement.Evenement;
import tn.khotwa.enums.EventsEnums.EvenementStatus;
import tn.khotwa.enums.EventsEnums.EvenementType;
import tn.khotwa.enums.SubscriptionEnums.PlanType;

import java.util.List;

@Repository
public interface EvenementRepository extends JpaRepository<Evenement, Long> {


    @Query("SELECT e FROM Evenement e WHERE e.creator.role = 'ADMIN'")
    List<Evenement> findEventsByAdminRole();


    List<Evenement> findByPlanTypeAndStatut(PlanType planType, EvenementStatus statut);


    @Query("""
        SELECT e FROM Evenement e
        WHERE e.statut = tn.khotwa.enums.EventsEnums.EvenementStatus.ACCEPTED
        AND (
            (:plan = tn.khotwa.enums.SubscriptionEnums.PlanType.FREE
                AND e.planType = tn.khotwa.enums.SubscriptionEnums.PlanType.FREE)

         OR (:plan = tn.khotwa.enums.SubscriptionEnums.PlanType.PREMIUM
                AND e.planType IN (
                    tn.khotwa.enums.SubscriptionEnums.PlanType.FREE,
                    tn.khotwa.enums.SubscriptionEnums.PlanType.PREMIUM
                )
            )

         OR (:plan = tn.khotwa.enums.SubscriptionEnums.PlanType.INSTITUTIONAL)
        )
    """)
    List<Evenement> findVisibleForUser(@Param("plan") PlanType plan);


    @Query("""
        SELECT e FROM Evenement e
        WHERE e.planType = tn.khotwa.enums.SubscriptionEnums.PlanType.FREE
        AND e.statut = tn.khotwa.enums.EventsEnums.EvenementStatus.ACCEPTED
    """)
    List<Evenement> findAllFreeEvents();

    @Query("""
        SELECT e FROM Evenement e
        WHERE e.planType = tn.khotwa.enums.SubscriptionEnums.PlanType.FREE
        AND e.statut = tn.khotwa.enums.EventsEnums.EvenementStatus.ACCEPTED
        AND (:month IS NULL OR FUNCTION('MONTH', e.date) = :month)
        AND (:type IS NULL OR e.type = :type)
    """)
    List<Evenement> findFreeEventsByCriteria(
            @Param("month") Integer month,
            @Param("type") EvenementType type
    );

    @Query("""
        SELECT e FROM Evenement e
        WHERE e.statut = tn.khotwa.enums.EventsEnums.EvenementStatus.ACCEPTED
        AND (
            (:plan = tn.khotwa.enums.SubscriptionEnums.PlanType.PREMIUM
                AND e.planType IN (
                    tn.khotwa.enums.SubscriptionEnums.PlanType.FREE,
                    tn.khotwa.enums.SubscriptionEnums.PlanType.PREMIUM
                )
            )
         OR (:plan = tn.khotwa.enums.SubscriptionEnums.PlanType.INSTITUTIONAL)
        )
        AND (:month IS NULL OR FUNCTION('MONTH', e.date) = :month)
        AND (:type IS NULL OR e.type = :type)
    """)
    List<Evenement> findEventsByPlanAndCriteria(
            @Param("plan") PlanType plan,
            @Param("month") Integer month,
            @Param("type") EvenementType type
    );
}