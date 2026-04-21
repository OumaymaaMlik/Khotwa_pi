package tn.khotwa.service.Collaboration;

import java.time.LocalDateTime;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.khotwa.entity.Collaboration.Collaboration;
import tn.khotwa.entity.Collaboration.CollaborationMember;
import tn.khotwa.entity.Collaboration.CollaborationRequest;
import tn.khotwa.entity.Collaboration.Project;
import tn.khotwa.entity.User.User;
import tn.khotwa.enums.Collaboration.CollaborationStatus;
import tn.khotwa.enums.Collaboration.CollaborationType;
import tn.khotwa.enums.Collaboration.RequestStatus;
import tn.khotwa.enums.User.Role;
import tn.khotwa.exception.Collaboration.BusinessException;
import tn.khotwa.exception.Collaboration.ForbiddenOperationException;
import tn.khotwa.exception.Collaboration.ResourceNotFoundException;
import tn.khotwa.repository.Collaboration.CollaborationMemberRepository;
import tn.khotwa.repository.Collaboration.CollaborationRequestRepository;
import tn.khotwa.repository.Collaboration.CollaborationRepository;
import tn.khotwa.repository.Collaboration.ProjectRepository;
import tn.khotwa.service.User.CurrentUserService;
import tn.khotwa.service.User.UserService;

@Service
@RequiredArgsConstructor
@Transactional
public class CollaborationService {

    private final CollaborationRepository collaborationRepository;
    private final CollaborationMemberRepository collaborationMemberRepository;
    private final CollaborationRequestRepository collaborationRequestRepository;
    private final ProjectRepository projectRepository;
    private final CurrentUserService currentUserService;
    private final UserService userService;
    private final CollaborationAuthorizationService authorizationService;

    public Collaboration createCollaboration(Long projectId, CollaborationType type) {
        Project project = getProject(projectId);
        User actor = currentUserService.requireCurrentUser();

        validateCollaborationType(type);
        authorizationService.checkCanCreateCollaboration(actor, project);
        return createCollaborationInternal(project, type);
    }

    public void removeMember(Long collaborationId, Long memberId) {
        Collaboration collaboration = getCollaborationOrThrow(collaborationId);
        User actor = currentUserService.requireCurrentUser();

        authorizationService.checkCanRemoveMember(actor, collaboration);
        ensureWritableCollaboration(collaboration);

        CollaborationMember member = collaborationMemberRepository
                .findByIdAndCollaborationId(memberId, collaborationId)
                .orElseThrow(() -> new ResourceNotFoundException("Collaboration member not found."));

        if (member.getUser().getIdUser().equals(collaboration.getProject().getOwner().getIdUser())) {
            throw new BusinessException("The project owner cannot be removed from the collaboration.");
        }

        collaborationMemberRepository.delete(member);
    }

    public void leaveCollaboration(Long collaborationId) {
        Collaboration collaboration = getCollaborationOrThrow(collaborationId);
        User actor = currentUserService.requireCurrentUser();

        if (actor.getIdUser().equals(collaboration.getProject().getOwner().getIdUser())) {
            authorizationService.checkCanLeaveCollaboration(actor);
            ensureWritableCollaboration(collaboration);
            collaboration.setStatus(CollaborationStatus.CLOSED);
            collaborationRepository.save(collaboration);
            return;
        }

        ensureWritableCollaboration(collaboration);

        CollaborationMember member = collaborationMemberRepository
            .findByCollaborationIdAndUser_IdUser(collaborationId, actor.getIdUser())
                .orElseThrow(() -> new ResourceNotFoundException("You are not a member of this collaboration."));

        authorizationService.checkCanLeaveCollaboration(actor);
        collaborationMemberRepository.delete(member);
    }

    public Collaboration updateCollaboration(Long collaborationId, CollaborationStatus status) {
        Collaboration collaboration = getCollaborationOrThrow(collaborationId);
        User actor = currentUserService.requireCurrentUser();

        authorizationService.checkCanUpdateStatus(actor, collaboration);

        if (status == null) {
            throw new BusinessException("Collaboration status is required.");
        }

        if (collaboration.getStatus() == CollaborationStatus.CLOSED) {
            throw new BusinessException("Closed collaborations cannot be changed.");
        }

        collaboration.setStatus(status);

        if (status == CollaborationStatus.CLOSED) {
            ensureOwnerMembership(collaboration);
        }

        return collaborationRepository.save(collaboration);
    }

    public CollaborationRequest createCollaborationRequest(Long projectId, Long targetUserId, CollaborationType type, Long targetCollaborationId) {
        validateCollaborationType(type);
        User actor = currentUserService.requireCurrentUser();
        authorizationService.checkCanCreateCollaborationRequest(actor);
        if (targetCollaborationId != null) {
            return createJoinCollaborationRequest(actor, targetCollaborationId, targetUserId, type);
        }

        return createProjectInvitationRequest(actor, projectId, targetUserId, type);
    }

    public CollaborationRequest acceptCollaborationRequest(Long requestId) {
        User actor = currentUserService.requireCurrentUser();
        CollaborationRequest request = getCollaborationRequest(requestId);

        authorizationService.checkCanRespondToCollaborationRequest(actor, request);

        if (request.getStatus() != RequestStatus.PENDING) {
            throw new BusinessException("Only pending collaboration requests can be accepted.");
        }

        if (request.isJoinRequest()) {
            Collaboration collaboration = request.getTargetCollaboration();
            ensureSameProject(collaboration, request.getProject().getId());
            ensureWritableCollaboration(collaboration);
            addMemberIfAbsent(collaboration, request.getRequesterUser());
        } else {
            Collaboration collaboration = findOrCreateCollaborationForInvitation(request.getProject(), request.getType());
            addMemberIfAbsent(collaboration, request.getTargetUser());
        }

        request.setStatus(RequestStatus.ACCEPTED);
        request.setRespondedAt(LocalDateTime.now());
        return collaborationRequestRepository.save(request);
    }

    public CollaborationRequest rejectCollaborationRequest(Long requestId) {
        User actor = currentUserService.requireCurrentUser();
        CollaborationRequest request = getCollaborationRequest(requestId);

        authorizationService.checkCanRespondToCollaborationRequest(actor, request);

        if (request.getStatus() != RequestStatus.PENDING) {
            throw new BusinessException("Only pending collaboration requests can be rejected.");
        }

        request.setStatus(RequestStatus.REJECTED);
        request.setRespondedAt(LocalDateTime.now());
        return collaborationRequestRepository.save(request);
    }

    @Transactional(readOnly = true)
    public List<Collaboration> getCollaborations() {
        User actor = currentUserService.requireCurrentUser();
        List<Collaboration> collaborations = collaborationRepository.findAllByFilters(null, null);

        if (actor.getRole() == Role.ADMIN || actor.getRole() == Role.COACH) {
            return collaborations;
        }

        return collaborations.stream()
                .filter(collaboration -> canViewCollaboration(actor, collaboration))
                .toList();
    }

    @Transactional(readOnly = true)
    public List<Collaboration> getCollaborationsByProjectId(Long projectId) {
        User actor = currentUserService.requireCurrentUser();
        return collaborationRepository.findAllByProjectId(projectId)
                .stream()
                .filter(collaboration -> canViewCollaboration(actor, collaboration))
                .toList();
    }

    @Transactional(readOnly = true)
    public List<CollaborationRequest> getSentCollaborationRequests() {
        User actor = currentUserService.requireCurrentUser();
        return collaborationRequestRepository.findAllByRequesterUserId(actor.getIdUser());
    }

    @Transactional(readOnly = true)
    public List<CollaborationRequest> getReceivedCollaborationRequests() {
        User actor = currentUserService.requireCurrentUser();
        return collaborationRequestRepository.findAllByTargetUserId(actor.getIdUser());
    }

    @Transactional(readOnly = true)
    public List<CollaborationRequest> getProjectCollaborationRequests(Long projectId) {
        User actor = currentUserService.requireCurrentUser();
        Project project = getProject(projectId);
        authorizationService.checkCanViewProjectRequests(actor, project);
        return collaborationRequestRepository.findAllByProjectId(projectId);
    }

    @Transactional(readOnly = true)
    public List<CollaborationRequest> getPendingCollaborationRequests() {
        User actor = currentUserService.requireCurrentUser();
        authorizationService.checkCanReviewPendingRequests(actor);
        return collaborationRequestRepository.findAllPendingRequests();
    }

    @Transactional(readOnly = true)
    public Collaboration getCollaboration(Long collaborationId) {
        Collaboration collaboration = getCollaborationOrThrow(collaborationId);
        User actor = currentUserService.requireCurrentUser();
        boolean isMember = collaborationMemberRepository.existsByCollaborationIdAndUserId(
                collaborationId,
                actor.getIdUser()
        );

        authorizationService.checkCanViewCollaboration(actor, collaboration, isMember);
        return collaboration;
    }

    public void ensureWritableCollaboration(Collaboration collaboration) {
        ensureOwnerMembership(collaboration);

        if (collaboration.getStatus() == CollaborationStatus.SUSPENDED) {
            throw new BusinessException("Suspended collaborations cannot be changed.");
        }

        if (collaboration.getStatus() == CollaborationStatus.CLOSED) {
            throw new BusinessException("Closed collaborations cannot be changed.");
        }
    }

    public void ensureCollaborationType(Collaboration collaboration, CollaborationType expectedType, String message) {
        if (collaboration.getType() != expectedType) {
            throw new BusinessException(message);
        }
    }

    private Collaboration getCollaborationOrThrow(Long collaborationId) {
        return collaborationRepository.findById(collaborationId)
                .orElseThrow(() -> new ResourceNotFoundException("Collaboration not found."));
    }

    private Project getProject(Long projectId) {
        return projectRepository.findById(projectId)
                .orElseThrow(() -> new ResourceNotFoundException("Project not found."));
    }

    private CollaborationRequest getCollaborationRequest(Long requestId) {
        return collaborationRequestRepository.findById(requestId)
                .orElseThrow(() -> new ResourceNotFoundException("Collaboration request not found."));
    }

    private Collaboration createCollaborationInternal(Project project, CollaborationType type) {
        ensureProjectOwnerCanBeMember(project);

        if (collaborationRepository.existsByProject_IdAndType(project.getId(), type)) {
            throw new BusinessException("A collaboration of this type already exists for the project.");
        }

        Collaboration collaboration = new Collaboration();
        collaboration.setProject(project);
        collaboration.setStatus(CollaborationStatus.ACTIVE);
        collaboration.setType(type);
        collaboration.setCreatedAt(LocalDateTime.now());

        Collaboration savedCollaboration = collaborationRepository.save(collaboration);
        ensureOwnerMembership(savedCollaboration);
        return savedCollaboration;
    }

    private CollaborationRequest createJoinCollaborationRequest(
            User actor,
            Long targetCollaborationId,
            Long targetUserId,
            CollaborationType type
    ) {
        Collaboration targetCollaboration = getCollaborationOrThrow(targetCollaborationId);
        ensureWritableCollaboration(targetCollaboration);

        if (type != targetCollaboration.getType()) {
            throw new BusinessException("Collaboration request type must match the target collaboration type.");
        }

        User targetUser = requireEntrepreneurUser(
                targetCollaboration.getOwner(),
                "Project owner must be an entrepreneur to manage a collaboration."
        );

        if (targetUserId != null && !targetUser.getIdUser().equals(targetUserId)) {
            throw new BusinessException("Target user must be the owner of the collaboration.");
        }
        if (targetUser.getIdUser().equals(actor.getIdUser())) {
            throw new BusinessException("Cannot create a collaboration request targeting yourself.");
        }
        if (collaborationMemberRepository.existsByCollaborationIdAndUserId(targetCollaborationId, actor.getIdUser())) {
            throw new BusinessException("You are already a member of this collaboration.");
        }
        if (collaborationRequestRepository.existsPendingJoinRequest(actor.getIdUser(), targetCollaborationId)) {
            throw new BusinessException("A pending join request already exists for this collaboration.");
        }

        return saveCollaborationRequest(actor, targetUser, targetCollaboration.getProject(), type, targetCollaboration);
    }

    private CollaborationRequest createProjectInvitationRequest(
            User actor,
            Long projectId,
            Long targetUserId,
            CollaborationType type
    ) {
        if (projectId == null) {
            throw new BusinessException("projectId is required for project invitations.");
        }
        if (targetUserId == null) {
            throw new BusinessException("targetUserId is required for project invitations.");
        }

        Project project = getProject(projectId);
        User targetUser = requireEntrepreneurUser(
                userService.getRequiredUser(targetUserId),
                "Collaboration requests can only target entrepreneurs."
        );

        authorizationService.checkCanCreateProjectInvitation(actor, project);

        if (targetUser.getIdUser().equals(actor.getIdUser())) {
            throw new BusinessException("Cannot create a collaboration request targeting yourself.");
        }

        ensureProjectOwnerCanBeMember(project);
        if (collaborationRepository.existsByProject_IdAndType(project.getId(), type)) {
            throw new BusinessException("A collaboration of this type already exists for the project.");
        }
        if (collaborationRequestRepository.existsPendingProjectInvitation(
                actor.getIdUser(),
                targetUser.getIdUser(),
                project.getId(),
                type
        )) {
            throw new BusinessException("A matching pending invitation already exists for this project.");
        }

        return saveCollaborationRequest(actor, targetUser, project, type, null);
    }

    private Collaboration findOrCreateCollaborationForInvitation(Project project, CollaborationType type) {
        return collaborationRepository.findFirstByProject_IdAndTypeOrderByCreatedAtAsc(project.getId(), type)
                .map(existingCollaboration -> {
                    ensureWritableCollaboration(existingCollaboration);
                    return existingCollaboration;
                })
                .orElseGet(() -> createCollaborationInternal(project, type));
    }

    private void ensureOwnerMembership(Collaboration collaboration) {
        Long collaborationId = collaboration.getId();
        User owner = requireEntrepreneurUser(
                collaboration.getProject().getOwner(),
                "Project owner must be an entrepreneur to manage a collaboration."
        );
        Long ownerId = owner.getIdUser();

        if (collaborationMemberRepository.existsByCollaborationIdAndUserId(collaborationId, ownerId)) {
            return;
        }

        CollaborationMember ownerMember = new CollaborationMember();
        ownerMember.setCollaboration(collaboration);
        ownerMember.setUser(owner);
        ownerMember.setJoinedAt(LocalDateTime.now());
        collaborationMemberRepository.save(ownerMember);
    }

    private void ensureProjectOwnerCanBeMember(Project project) {
        requireEntrepreneurUser(
                project.getOwner(),
                "Project owner must be an entrepreneur to manage a collaboration."
        );
    }

    private void addMemberIfAbsent(Collaboration collaboration, User user) {
        Long userId = user.getIdUser();
        if (collaborationMemberRepository.existsByCollaborationIdAndUserId(collaboration.getId(), userId)) {
            return;
        }

        CollaborationMember member = new CollaborationMember();
        member.setCollaboration(collaboration);
        member.setUser(requireEntrepreneurUser(user, "Only entrepreneur users can be collaboration members."));
        member.setJoinedAt(LocalDateTime.now());
        collaborationMemberRepository.save(member);
    }

    private void ensureSameProject(Collaboration collaboration, Long projectId) {
        if (!collaboration.getProject().getId().equals(projectId)) {
            throw new BusinessException("Target collaboration must belong to the provided project.");
        }
    }

    private CollaborationRequest saveCollaborationRequest(
            User requesterUser,
            User targetUser,
            Project project,
            CollaborationType type,
            Collaboration targetCollaboration
    ) {
        CollaborationRequest request = new CollaborationRequest();
        request.setRequesterUser(requesterUser);
        request.setTargetUser(targetUser);
        request.setProject(project);
        request.setTargetCollaboration(targetCollaboration);
        request.setType(type);
        request.setStatus(RequestStatus.PENDING);
        request.setCreatedAt(LocalDateTime.now());
        return collaborationRequestRepository.save(request);
    }

    private void validateCollaborationType(CollaborationType type) {
        if (type == null) {
            throw new BusinessException("Collaboration type is required.");
        }
    }

    private User requireEntrepreneurUser(User user, String message) {
        if (user.getRole() != Role.ENTREPRENEUR) {
            throw new BusinessException(message);
        }
        return user;
    }

    private boolean canViewCollaboration(User actor, Collaboration collaboration) {
        boolean isMember = collaborationMemberRepository.existsByCollaborationIdAndUserId(
                collaboration.getId(),
                actor.getIdUser()
        );

        try {
            authorizationService.checkCanViewCollaboration(actor, collaboration, isMember);
            return true;
        } catch (ForbiddenOperationException exception) {
            return false;
        }
    }

    public boolean isMember(Collaboration collaboration, User user) {
        return collaborationMemberRepository.existsByCollaborationIdAndUserId(
                collaboration.getId(),
                user.getIdUser()
        );
    }
}
