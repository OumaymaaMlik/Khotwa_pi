package tn.khotwa.repository.Collaboration;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.khotwa.entity.Collaboration.ResourceRequest;

public interface ResourceRequestRepository extends JpaRepository<ResourceRequest, Long> {

    @Query("""
        select rr
        from ResourceRequest rr
        where rr.collaboration.id = :collaborationId
        order by rr.createdAt desc
        """)
    List<ResourceRequest> findAllByCollaborationId(@Param("collaborationId") Long collaborationId);

    @Query("""
        select rr
        from ResourceRequest rr
        where rr.collaboration.project.id = :projectId
        order by rr.createdAt desc
        """)
    List<ResourceRequest> findAllByProjectId(@Param("projectId") Long projectId);
}
