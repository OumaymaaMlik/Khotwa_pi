package tn.khotwa.service.Collaboration;

import java.time.LocalDateTime;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.khotwa.entity.Collaboration.Collaboration;
import tn.khotwa.entity.Collaboration.MarketingCollaboration;
import tn.khotwa.entity.Collaboration.MarketingContentTask;
import tn.khotwa.entity.User.User;
import tn.khotwa.enums.Collaboration.CollaborationType;
import tn.khotwa.enums.Collaboration.ContentType;
import tn.khotwa.enums.Collaboration.Platform;
import tn.khotwa.enums.Collaboration.TaskStatus;
import tn.khotwa.exception.Collaboration.BusinessException;
import tn.khotwa.exception.Collaboration.ResourceNotFoundException;
import tn.khotwa.repository.Collaboration.MarketingContentTaskRepository;
import tn.khotwa.service.User.CurrentUserService;
import tn.khotwa.service.User.UserService;

@Service
@RequiredArgsConstructor
@Transactional
public class MarketingContentTaskService {

    private final MarketingContentTaskRepository marketingContentTaskRepository;
    private final MarketingCollaborationService marketingCollaborationService;
    private final CollaborationService collaborationService;
    private final CurrentUserService currentUserService;
    private final UserService userService;
    private final CollaborationAuthorizationService authorizationService;

    public MarketingContentTask createMarketingContentTask(Long marketingCollaborationId, Long assignedUserId, String title, String description, ContentType contentType, Platform platform, LocalDateTime dueDate) {
        MarketingCollaboration marketingCollaboration = marketingCollaborationService.getMarketingCollaboration(marketingCollaborationId);
        User actor = currentUserService.requireCurrentUser();

        authorizationService.checkCanCreateMarketingContentTask(actor, marketingCollaboration);
        collaborationService.ensureWritableCollaboration(marketingCollaboration.getCollaboration());

        if (title == null || title.trim().isEmpty()) {
            throw new BusinessException("Task title is required.");
        }

        if (contentType == null) {
            throw new BusinessException("Content type is required.");
        }

        if (platform == null) {
            throw new BusinessException("Platform is required.");
        }

        User assignedUser = getUser(assignedUserId);

        Collaboration collaboration = marketingCollaboration.getCollaboration();
        if (!collaborationService.isMember(collaboration, assignedUser)) {
            throw new BusinessException("Assigned user must be a member of the collaboration.");
        }

        MarketingContentTask task = new MarketingContentTask();
        task.setMarketingCollaboration(marketingCollaboration);
        task.setAssignedUser(assignedUser);
        task.setTitle(title.trim());
        task.setDescription(description != null ? description.trim() : null);
        task.setContentType(contentType);
        task.setPlatform(platform);
        task.setStatus(TaskStatus.TODO);
        task.setDueDate(dueDate);

        return marketingContentTaskRepository.save(task);
    }

    public MarketingContentTask updateMarketingContentTaskStatus(Long taskId, TaskStatus status, LocalDateTime publishedAt) {
        MarketingContentTask task = getMarketingContentTask(taskId);
        User actor = currentUserService.requireCurrentUser();

        collaborationService.ensureCollaborationType(
                task.getMarketingCollaboration().getCollaboration(),
                CollaborationType.MARKETING,
                "Marketing tasks are only available for MARKETING collaborations."
        );
        authorizationService.checkCanUpdateMarketingContentTaskStatus(actor, task);
        collaborationService.ensureWritableCollaboration(task.getMarketingCollaboration().getCollaboration());

        if (status == null) {
            throw new BusinessException("Status is required.");
        }

        task.setStatus(status);
        if (status == TaskStatus.PUBLISHED && publishedAt != null) {
            task.setPublishedAt(publishedAt);
        }

        return marketingContentTaskRepository.save(task);
    }

    @Transactional(readOnly = true)
    public List<MarketingContentTask> getMarketingContentTasks(Long marketingCollaborationId) {
        MarketingCollaboration marketingCollaboration = marketingCollaborationService.getMarketingCollaboration(marketingCollaborationId);
        User actor = currentUserService.requireCurrentUser();

        authorizationService.checkCanViewMarketingCollaboration(actor, marketingCollaboration);

        return marketingContentTaskRepository.findAllByMarketingCollaborationId(marketingCollaborationId);
    }

    @Transactional(readOnly = true)
    public MarketingContentTask getMarketingContentTask(Long taskId) {
        MarketingContentTask task = marketingContentTaskRepository.findById(taskId)
                .orElseThrow(() -> new ResourceNotFoundException("Marketing content task not found."));
        collaborationService.ensureCollaborationType(
                task.getMarketingCollaboration().getCollaboration(),
                CollaborationType.MARKETING,
                "Marketing tasks are only available for MARKETING collaborations."
        );
        return task;
    }

    private User getUser(Long userId) {
        return userService.getRequiredUser(userId);
    }
}
