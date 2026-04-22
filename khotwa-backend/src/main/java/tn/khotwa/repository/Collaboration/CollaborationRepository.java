package tn.khotwa.repository.Collaboration;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.khotwa.dto.Collaboration.CollaborationTypeCountView;
import tn.khotwa.entity.Collaboration.Collaboration;
import tn.khotwa.enums.Collaboration.CollaborationStatus;
import tn.khotwa.enums.Collaboration.CollaborationType;

public interface CollaborationRepository extends JpaRepository<Collaboration, Long> {

    boolean existsByProject_IdAndType(Long projectId, CollaborationType type);

    long countByProject_Id(Long projectId);

    long countByProject_IdAndStatus(Long projectId, CollaborationStatus status);

    long countByStatus(CollaborationStatus status);

    long countByCreatedAtBetween(LocalDateTime startDate, LocalDateTime endDate);

    Optional<Collaboration> findFirstByProject_IdAndTypeOrderByCreatedAtAsc(Long projectId, CollaborationType type);

    List<Collaboration> findAllByProjectIdOrderByCreatedAtDesc(Long projectId);

    @Query("""
        select case when count(c) > 0 then true else false end
        from Collaboration c
        where c.id = :collaborationId
                    and c.project.owner.idUser = :userId
        """)
    boolean isProjectOwner(@Param("collaborationId") Long collaborationId, @Param("userId") Long userId);

    @Query("""
                select c
                from Collaboration c
                where (:status is null or c.status = :status)
                    and (:type is null or c.type = :type)
                order by c.createdAt desc
        """)
        List<Collaboration> findAllByFilters(
                        @Param("status") CollaborationStatus status,
                        @Param("type") CollaborationType type
        );

    @Query("""
        select c
        from Collaboration c
        where c.status = tn.khotwa.enums.Collaboration.CollaborationStatus.CLOSED
        order by c.createdAt desc
        """)
    List<Collaboration> findAllClosedCollaborations();

    @Query("""
        select c
        from Collaboration c
        where c.project.owner.idUser = :ownerUserId
          and c.status = tn.khotwa.enums.Collaboration.CollaborationStatus.ACTIVE
        order by c.createdAt desc
        """)
    List<Collaboration> findActiveCollaborationsByProjectOwner(@Param("ownerUserId") Long ownerUserId);

    @Query("""
        select c.type as collaborationType,
               count(c) as collaborationCount
        from Collaboration c
        where c.status = tn.khotwa.enums.Collaboration.CollaborationStatus.ACTIVE
        group by c.type
        order by c.type asc
        """)
    List<CollaborationTypeCountView> countCollaborationsByType();

    @Query("""
        select c
        from Collaboration c
        where c.createdAt between :startDate and :endDate
          and c.status = tn.khotwa.enums.Collaboration.CollaborationStatus.ACTIVE
        order by c.createdAt desc
        """)
    List<Collaboration> findCollaborationsCreatedDuring(
            @Param("startDate") LocalDateTime startDate,
            @Param("endDate") LocalDateTime endDate
    );
}
