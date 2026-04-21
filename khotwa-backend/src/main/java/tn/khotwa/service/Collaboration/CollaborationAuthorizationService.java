package tn.khotwa.service.Collaboration;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tn.khotwa.entity.Collaboration.Collaboration;
import tn.khotwa.entity.Collaboration.CollaborationRequest;
import tn.khotwa.entity.Collaboration.MarketingCollaboration;
import tn.khotwa.entity.Collaboration.MarketingContentTask;
import tn.khotwa.entity.Collaboration.Project;
import tn.khotwa.entity.Collaboration.ResourceRequest;
import tn.khotwa.entity.User.User;
import tn.khotwa.enums.User.Role;
import tn.khotwa.exception.Collaboration.ForbiddenOperationException;
import tn.khotwa.repository.Collaboration.CollaborationMemberRepository;

@Service
@RequiredArgsConstructor
public class CollaborationAuthorizationService {

    private final CollaborationMemberRepository collaborationMemberRepository;

    public void checkCanCreateCollaboration(User actor, Project project) {
        if (isAdmin(actor) || (isEntrepreneur(actor) && actor.getIdUser().equals(project.getOwner().getIdUser()))) {
            return;
        }

        throw new ForbiddenOperationException("Only the project owner or admin can create the collaboration.");
    }

    public void checkCanCreateProjectInvitation(User actor, Project project) {
        if (isAdmin(actor) || (isEntrepreneur(actor) && actor.getIdUser().equals(project.getOwner().getIdUser()))) {
            return;
        }

        throw new ForbiddenOperationException("Only the project owner or admin can invite members to a collaboration.");
    }

    public void checkCanManageOwnedCollaboration(User actor, Collaboration collaboration) {
        if (isAdmin(actor) || (isEntrepreneur(actor) && actor.getIdUser().equals(collaboration.getOwner().getIdUser()))) {
            return;
        }

        throw new ForbiddenOperationException("Only the collaboration owner or admin can manage the collaboration.");
    }

    public void checkCanRemoveMember(User actor, Collaboration collaboration) {
        if (isAdmin(actor)) {
            return;
        }

        checkCanManageOwnedCollaboration(actor, collaboration);
    }

    public void checkCanLeaveCollaboration(User actor) {
        if (isAdmin(actor) || isEntrepreneur(actor)) {
            return;
        }

        throw new ForbiddenOperationException("Only entrepreneurs or admin can leave a collaboration.");
    }

    public void checkCanUpdateStatus(User actor, Collaboration collaboration) {
        if (isAdmin(actor) || (isEntrepreneur(actor) && actor.getIdUser().equals(collaboration.getOwner().getIdUser()))) {
            return;
        }

        throw new ForbiddenOperationException("Only the project owner or admin can update collaboration status.");
    }

    public void checkCanReviewPendingRequests(User actor) {
        if (isAdmin(actor)) {
            return;
        }

        throw new ForbiddenOperationException("Only admin can review pending collaboration requests.");
    }

    public void checkCanViewCollaboration(User actor, Collaboration collaboration, boolean isMember) {
        if (isAdmin(actor) || isCoach(actor)) {
            return;
        }

        if (isEntrepreneur(actor)
                && (actor.getIdUser().equals(collaboration.getOwner().getIdUser()) || isMember)) {
            return;
        }

        throw new ForbiddenOperationException("You are not allowed to view this collaboration.");
    }

    public void checkCanCreateCollaborationRequest(User actor) {
        if (isEntrepreneur(actor)) {
            return;
        }

        throw new ForbiddenOperationException("Only entrepreneurs can initiate collaboration requests.");
    }

    public void checkCanViewProjectRequests(User actor, Project project) {
        if (isAdmin(actor) || isCoach(actor)) {
            return;
        }

        if (isEntrepreneur(actor) && actor.getIdUser().equals(project.getOwner().getIdUser())) {
            return;
        }

        throw new ForbiddenOperationException("You are not allowed to view requests for this project.");
    }

    public void checkCanRespondToCollaborationRequest(User actor, CollaborationRequest request) {
        if (isAdmin(actor)) {
            return;
        }

        if (isEntrepreneur(actor) && actor.getIdUser().equals(request.getExpectedResponder().getIdUser())) {
            return;
        }

        throw new ForbiddenOperationException("Only the expected responder or admin can respond to this collaboration request.");
    }

    public void checkCanViewProject(User actor, Project project, boolean isProjectCollaborationMember) {
        if (isAdmin(actor) || isCoach(actor)) {
            return;
        }

        if (isEntrepreneur(actor)
                && (actor.getIdUser().equals(project.getOwner().getIdUser()) || isProjectCollaborationMember)) {
            return;
        }

        throw new ForbiddenOperationException("You are not allowed to view this project.");
    }

    public void checkCanCreateSharedResource(User actor, Collaboration collaboration) {
        if (isAdmin(actor)) {
            return;
        }

        if (isEntrepreneur(actor) && collaborationMemberRepository.existsByCollaborationIdAndUserId(
                collaboration.getId(), actor.getIdUser())) {
            return;
        }

        throw new ForbiddenOperationException("Only collaboration members or admin can create shared resources.");
    }

    public void checkCanCreateResourceRequest(User actor, Collaboration collaboration) {
        if (isAdmin(actor)) {
            return;
        }

        if (isEntrepreneur(actor) && collaborationMemberRepository.existsByCollaborationIdAndUserId(
                collaboration.getId(), actor.getIdUser())) {
            return;
        }

        throw new ForbiddenOperationException("Only collaboration members or admin can create resource requests.");
    }

    public void checkCanUpdateResourceRequestStatus(User actor, ResourceRequest request) {
        if (isAdmin(actor)) {
            return;
        }

        if (isEntrepreneur(actor)
                && actor.getIdUser().equals(request.getCollaboration().getOwner().getIdUser())) {
            return;
        }

        throw new ForbiddenOperationException("Only the project owner or admin can update resource request status.");
    }

    public void checkCanCreateMarketingCollaboration(User actor, Collaboration collaboration) {
        if (isAdmin(actor)) {
            return;
        }

        if (isEntrepreneur(actor) && collaborationMemberRepository.existsByCollaborationIdAndUserId(
                collaboration.getId(), actor.getIdUser())) {
            return;
        }

        throw new ForbiddenOperationException("Only collaboration members or admin can create marketing collaborations.");
    }

    public void checkCanCreateMarketingContentTask(User actor, MarketingCollaboration marketingCollaboration) {
        if (isAdmin(actor)) {
            return;
        }

        if (isEntrepreneur(actor) && collaborationMemberRepository.existsByCollaborationIdAndUserId(
                marketingCollaboration.getCollaboration().getId(), actor.getIdUser())) {
            return;
        }

        throw new ForbiddenOperationException("Only collaboration members or admin can create marketing content tasks.");
    }

    public void checkCanUpdateMarketingContentTaskStatus(User actor, MarketingContentTask task) {
        if (isAdmin(actor)) {
            return;
        }

        if (isEntrepreneur(actor) && (actor.getIdUser().equals(task.getAssignedUser().getIdUser())
                || actor.getIdUser().equals(task.getMarketingCollaboration().getCollaboration().getOwner().getIdUser()))) {
            return;
        }

        throw new ForbiddenOperationException("Only the assigned user, project owner, or admin can update task status.");
    }

    public void checkCanViewMarketingCollaboration(User actor, MarketingCollaboration marketingCollaboration) {
        if (isAdmin(actor) || isCoach(actor)) {
            return;
        }

        if (isEntrepreneur(actor) && collaborationMemberRepository.existsByCollaborationIdAndUserId(
                marketingCollaboration.getCollaboration().getId(), actor.getIdUser())) {
            return;
        }

        throw new ForbiddenOperationException("You are not allowed to view this marketing collaboration.");
    }

    private boolean isAdmin(User user) {
        return user.getRole() == Role.ADMIN;
    }

    private boolean isCoach(User user) {
        return user.getRole() == Role.COACH;
    }

    private boolean isEntrepreneur(User user) {
        return user.getRole() == Role.ENTREPRENEUR;
    }
}
