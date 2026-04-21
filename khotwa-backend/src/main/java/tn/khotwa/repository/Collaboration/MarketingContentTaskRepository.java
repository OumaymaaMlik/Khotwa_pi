package tn.khotwa.repository.Collaboration;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.khotwa.entity.Collaboration.MarketingContentTask;

public interface MarketingContentTaskRepository extends JpaRepository<MarketingContentTask, Long> {

    @Query("""
        select mct
        from MarketingContentTask mct
        where mct.marketingCollaboration.id = :marketingCollaborationId
        order by mct.dueDate asc
        """)
    List<MarketingContentTask> findAllByMarketingCollaborationId(@Param("marketingCollaborationId") Long marketingCollaborationId);

    @Query("""
        select mct
        from MarketingContentTask mct
        where mct.marketingCollaboration.collaboration.project.id = :projectId
        order by mct.dueDate asc
        """)
    List<MarketingContentTask> findAllByProjectId(@Param("projectId") Long projectId);
}
