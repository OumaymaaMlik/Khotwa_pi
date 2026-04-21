package tn.khotwa.repository.Collaboration;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.khotwa.entity.Collaboration.MarketingCollaboration;

public interface MarketingCollaborationRepository extends JpaRepository<MarketingCollaboration, Long> {

    @Query("""
        select mc
        from MarketingCollaboration mc
        where mc.collaboration.id = :collaborationId
        order by mc.createdAt desc
        """)
    List<MarketingCollaboration> findAllByCollaborationId(@Param("collaborationId") Long collaborationId);

    @Query("""
        select mc
        from MarketingCollaboration mc
        where mc.collaboration.project.id = :projectId
        order by mc.createdAt desc
        """)
    List<MarketingCollaboration> findAllByProjectId(@Param("projectId") Long projectId);
}
