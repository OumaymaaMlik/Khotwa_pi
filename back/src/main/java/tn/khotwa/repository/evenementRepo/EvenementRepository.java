package tn.khotwa.repository.evenementRepo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import tn.khotwa.entity.evenement.Evenement;
import tn.khotwa.enums.PlanType;
import tn.khotwa.enums.eventsEnums.EvenementStatus;
import tn.khotwa.enums.eventsEnums.EvenementType;

import java.util.List;

@Repository
public interface EvenementRepository extends JpaRepository<Evenement, Long> {


    @Query("SELECT e FROM Evenement e WHERE e.creator.role = 'ADMIN'")
    List<Evenement> findEventsByAdminRole();

    @Query("SELECT DISTINCT e FROM Evenement e LEFT JOIN FETCH e.creator LEFT JOIN FETCH e.participants")
    List<Evenement> findAllWithDetails();


    List<Evenement> findByPlanTypeAndStatut(PlanType planType, EvenementStatus statut);


    @Query("""
        SELECT e FROM Evenement e
        WHERE e.statut = tn.khotwa.enums.eventsEnums.EvenementStatus.ACCEPTED
        AND (
            (:plan = tn.khotwa.enums.PlanType.FREE
                AND e.planType = tn.khotwa.enums.PlanType.FREE)

         OR (:plan = tn.khotwa.enums.PlanType.PREMIUM
                AND e.planType IN (
                    tn.khotwa.enums.PlanType.FREE,
                    tn.khotwa.enums.PlanType.PREMIUM
                )
            )

         OR (:plan = tn.khotwa.enums.PlanType.INSTITUTIONAL)
        )
    """)
    List<Evenement> findVisibleForUser(@Param("plan") PlanType plan);


    @Query("""
        SELECT e FROM Evenement e
        WHERE e.planType = tn.khotwa.enums.PlanType.FREE
        AND e.statut = tn.khotwa.enums.eventsEnums.EvenementStatus.ACCEPTED
    """)
    List<Evenement> findAllFreeEvents();

    @Query("""
        SELECT e FROM Evenement e
        WHERE e.planType = tn.khotwa.enums.PlanType.FREE
        AND e.statut = tn.khotwa.enums.eventsEnums.EvenementStatus.ACCEPTED
        AND (:month IS NULL OR FUNCTION('MONTH', e.date) = :month)
        AND (:type IS NULL OR e.type = :type)
    """)
    List<Evenement> findFreeEventsByCriteria(
            @Param("month") Integer month,
            @Param("type") EvenementType type
    );

    @Query("""
        SELECT e FROM Evenement e
        WHERE e.statut = tn.khotwa.enums.eventsEnums.EvenementStatus.ACCEPTED
        AND (
            (:plan = tn.khotwa.enums.PlanType.PREMIUM
                AND e.planType IN (
                    tn.khotwa.enums.PlanType.FREE,
                    tn.khotwa.enums.PlanType.PREMIUM
                )
            )
         OR (:plan = tn.khotwa.enums.PlanType.INSTITUTIONAL)
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