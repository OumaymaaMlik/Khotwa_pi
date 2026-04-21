package tn.khotwa.repository.Collaboration;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.khotwa.entity.Collaboration.SharedResource;

public interface SharedResourceRepository extends JpaRepository<SharedResource, Long> {

    @Query("""
        select sr
        from SharedResource sr
        where sr.collaboration.id = :collaborationId
        order by sr.createdAt desc
        """)
    List<SharedResource> findAllByCollaborationId(@Param("collaborationId") Long collaborationId);

    @Query("""
        select sr
        from SharedResource sr
        where sr.collaboration.project.id = :projectId
        order by sr.createdAt desc
        """)
    List<SharedResource> findAllByProjectId(@Param("projectId") Long projectId);
}
