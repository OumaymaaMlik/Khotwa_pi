package tn.khotwa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import tn.khotwa.entity.Evenement;
import tn.khotwa.enums.EvenementStatus;
import tn.khotwa.enums.EvenementType;
import tn.khotwa.enums.PlanType;

import java.util.List;
@Repository
public interface EvenementRepository  extends JpaRepository<Evenement,Long> {

    @Query("SELECT e FROM Evenement e WHERE e.creator.role = tn.khotwa.enums.Role.ADMIN")
    List<Evenement> findEventsByAdminRole();

    List<Evenement> findByPlanTypeAndStatut(PlanType planType, EvenementStatus statut);


    @Query("SELECT e FROM Evenement e WHERE e.statut = tn.khotwa.enums.EvenementStatus.ACCEPTED AND (" +
            "(:plan = tn.khotwa.enums.PlanType.FREE AND e.planType = tn.khotwa.enums.PlanType.FREE) OR " +
            "(:plan = tn.khotwa.enums.PlanType.PREMIUM AND e.planType IN (tn.khotwa.enums.PlanType.FREE, tn.khotwa.enums.PlanType.PREMIUM)) OR " +
            "(:plan = tn.khotwa.enums.PlanType.INSTITUTIONAL)" +
            ")")
    List<Evenement> findVisibleForUser(@Param("plan") PlanType plan);



    @Query("SELECT e FROM Evenement e WHERE e.statut = tn.khotwa.enums.EvenementStatus.ACCEPTED " +
            "AND e.planType = tn.khotwa.enums.PlanType.FREE")
    List<Evenement> findAllFreeEvents();


    @Query("SELECT e FROM Evenement e WHERE e.planType = tn.khotwa.enums.PlanType.FREE " +
            "AND e.statut = tn.khotwa.enums.EvenementStatus.ACCEPTED " +
            "AND (:month IS NULL OR FUNCTION('MONTH', e.date) = :month) " +
            "AND (:type IS NULL OR e.type = :type)")
    List<Evenement> findFreeEventsByCriteria(
            @Param("month") Integer month,
            @Param("type") EvenementType type
    );
    }
