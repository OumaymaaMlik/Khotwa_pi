package tn.khotwa.service.collaboration;

import java.time.LocalDateTime;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.khotwa.entity.collaboration.Collaboration;
import tn.khotwa.entity.collaboration.MarketingCollaboration;
import tn.khotwa.entity.collaboration.MarketingContentTask;
import tn.khotwa.entity.user.User;
import tn.khotwa.enums.collaboration.CollaborationType;
import tn.khotwa.enums.collaboration.ContentType;
import tn.khotwa.enums.collaboration.MarketingCollaborationStatus;
import tn.khotwa.enums.collaboration.Platform;
import tn.khotwa.enums.collaboration.TaskStatus;
import tn.khotwa.exception.collaboration.BusinessException;
import tn.khotwa.exception.collaboration.ResourceNotFoundException;
import tn.khotwa.repository.collaboration.MarketingContentTaskRepository;
import tn.khotwa.service.user.CurrentUserService;
import tn.khotwa.service.user.impl.UserServiceImpl;

@Service
@RequiredArgsConstructor
@Transactional
public class MarketingContentTaskService {

    private final MarketingContentTaskRepository marketingContentTaskRepository;
    private final MarketingCollaborationService marketingCollaborationService;
    private final CollaborationService collaborationService;
    private final CurrentUserService currentUserService;
    private final UserServiceImpl userService;
    private final CollaborationAuthorizationService authorizationService;

    public MarketingContentTask createMarketingContentTask(Long marketingCollaborationId, Long assignedUserId, String title, String description, ContentType contentType, Platform platform, LocalDateTime dueDate) {
        MarketingCollaboration marketingCollaboration = marketingCollaborationService.getMarketingCollaboration(marketingCollaborationId);
        Collaboration collaboration = marketingCollaboration.getCollaboration();
        User actor = currentUserService.requireCurrentUser();

        authorizationService.checkCanCreateMarketingContentTask(actor, marketingCollaboration);
        collaborationService.ensureWritableCollaboration(collaboration);
        ensureCampaignIsOpen(marketingCollaboration);

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
        ensureAssignedUserIsMember(collaboration, assignedUser);

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
        Collaboration collaboration = task.getMarketingCollaboration().getCollaboration();

        collaborationService.ensureCollaborationType(
                collaboration,
                CollaborationType.MARKETING,
                "Marketing tasks are only available for MARKETING collaborations."
        );
        authorizationService.checkCanUpdateMarketingContentTaskStatus(actor, task);
        collaborationService.ensureWritableCollaboration(collaboration);
        ensureCampaignIsOpen(task.getMarketingCollaboration());

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

        return marketingContentTaskRepository.findAllByMarketingCollaborationIdOrderByDueDateAsc(marketingCollaborationId);
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

    private void ensureAssignedUserIsMember(Collaboration collaboration, User assignedUser) {
        if (!collaborationService.isMember(collaboration, assignedUser)) {
            throw new BusinessException("Assigned user must be a member of the collaboration.");
        }
    }

    private void ensureCampaignIsOpen(MarketingCollaboration marketingCollaboration) {
        if (marketingCollaboration.getStatus() == MarketingCollaborationStatus.COMPLETED
                || marketingCollaboration.getStatus() == MarketingCollaborationStatus.CANCELLED) {
            throw new BusinessException("This campaign is closed. Create a new campaign to continue.");
        }
    }
}

