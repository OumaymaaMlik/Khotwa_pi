package tn.khotwa.repository.Collaboration;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.khotwa.entity.Collaboration.Collaboration;
import tn.khotwa.enums.Collaboration.CollaborationStatus;
import tn.khotwa.enums.Collaboration.CollaborationType;

public interface CollaborationRepository extends JpaRepository<Collaboration, Long> {

    boolean existsByProject_IdAndType(Long projectId, CollaborationType type);

    Optional<Collaboration> findFirstByProject_IdAndTypeOrderByCreatedAtAsc(Long projectId, CollaborationType type);

    @Query("""
        select c
        from Collaboration c
        where c.project.id = :projectId
        order by c.createdAt desc
        """)
    List<Collaboration> findAllByProjectId(@Param("projectId") Long projectId);

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
}
