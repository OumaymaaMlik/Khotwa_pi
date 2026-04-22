package tn.khotwa.repository.collaboration;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.khotwa.entity.collaboration.MarketingContentTask;
import tn.khotwa.enums.collaboration.CollaborationStatus;
import tn.khotwa.enums.collaboration.TaskStatus;

public interface MarketingContentTaskRepository extends JpaRepository<MarketingContentTask, Long> {

    List<MarketingContentTask> findAllByMarketingCollaborationIdOrderByDueDateAsc(Long marketingCollaborationId);

    List<MarketingContentTask> findAllByMarketingCollaboration_Collaboration_Project_IdOrderByDueDateAsc(Long projectId);

    long countByMarketingCollaboration_Collaboration_Project_IdAndMarketingCollaboration_Collaboration_Status(
            Long projectId,
            CollaborationStatus collaborationStatus
    );

    long countByMarketingCollaboration_Collaboration_Project_IdAndMarketingCollaboration_Collaboration_StatusAndStatus(
            Long projectId,
            CollaborationStatus collaborationStatus,
            TaskStatus status
    );

    @Query("""
        select task
        from MarketingContentTask task
        where task.dueDate is not null
          and task.dueDate < CURRENT_DATE
          and task.status <> tn.khotwa.enums.collaboration.TaskStatus.PUBLISHED
          and task.marketingCollaboration.collaboration.status = tn.khotwa.enums.collaboration.CollaborationStatus.ACTIVE
        order by task.dueDate asc
        """)
    List<MarketingContentTask> findOverdueMarketingContentTasks();

    @Query("""
        select count(task)
        from MarketingContentTask task
        where task.marketingCollaboration.collaboration.project.id = :projectId
          and task.marketingCollaboration.collaboration.status = tn.khotwa.enums.collaboration.CollaborationStatus.ACTIVE
          and task.dueDate is not null
          and task.dueDate < CURRENT_DATE
          and task.status <> tn.khotwa.enums.collaboration.TaskStatus.PUBLISHED
        """)
    long countOverdueMarketingContentTasksByProjectId(@Param("projectId") Long projectId);

    @Query("""
        select count(task)
        from MarketingContentTask task
        where task.marketingCollaboration.collaboration.status = tn.khotwa.enums.collaboration.CollaborationStatus.ACTIVE
          and task.dueDate is not null
          and task.dueDate < CURRENT_DATE
          and task.status <> tn.khotwa.enums.collaboration.TaskStatus.PUBLISHED
        """)
    long countOverdueMarketingContentTasks();
}

