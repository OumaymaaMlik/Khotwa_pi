package tn.khotwa.service.collaboration;

import java.time.LocalDateTime;
import java.util.EnumSet;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.khotwa.entity.collaboration.Collaboration;
import tn.khotwa.entity.collaboration.CollaborationMember;
import tn.khotwa.entity.collaboration.CollaborationRequest;
import tn.khotwa.entity.collaboration.Project;
import tn.khotwa.entity.User.User;
import tn.khotwa.enums.collaboration.CollaborationRequestScenario;
import tn.khotwa.enums.collaboration.CollaborationStatus;
import tn.khotwa.enums.collaboration.CollaborationType;
import tn.khotwa.enums.collaboration.RequestStatus;
import tn.khotwa.enums.User.Role;
import tn.khotwa.exception.collaboration.BusinessException;
import tn.khotwa.exception.collaboration.ForbiddenOperationException;
import tn.khotwa.exception.collaboration.ResourceNotFoundException;
import tn.khotwa.repository.collaboration.CollaborationMemberRepository;
import tn.khotwa.repository.collaboration.CollaborationRequestRepository;
import tn.khotwa.repository.collaboration.CollaborationRepository;
import tn.khotwa.repository.collaboration.ProjectRepository;
import tn.khotwa.service.User.CurrentUserService;
import tn.khotwa.service.User.UserService;

@Service
@RequiredArgsConstructor
@Transactional
public class CollaborationService {

    private static final EnumSet<CollaborationStatus> OPEN_COLLABORATION_STATUSES = EnumSet.of(
            CollaborationStatus.ACTIVE,
            CollaborationStatus.SUSPENDED
    );

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

        authorizationService.requireOwnerOrAdmin(actor, collaboration);
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
            applyStatus(collaboration, CollaborationStatus.CLOSED);
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
        boolean hasLifecycleOverride = authorizationService.hasLifecycleOverride(actor);

        if (status == null) {
            throw new BusinessException("Collaboration status is required.");
        }

        if (!hasLifecycleOverride && collaboration.getStatus() == CollaborationStatus.CLOSED) {
            throw new BusinessException("Closed collaborations cannot be changed.");
        }

        applyStatus(collaboration, status);

        if (status == CollaborationStatus.CLOSED) {
            ensureOwnerMembership(collaboration);
        }

        return collaborationRepository.save(collaboration);
    }

    public CollaborationRequest createCollaborationRequest(Long targetUserId, Long targetCollaborationId) {
        User actor = currentUserService.requireCurrentUser();
        authorizationService.checkCanCreateCollaborationRequest(actor);

        if (targetCollaborationId == null) {
            throw new BusinessException("targetCollaborationId is required.");
        }

        Collaboration targetCollaboration = getCollaborationOrThrow(targetCollaborationId);
        ensureActiveCollaboration(targetCollaboration, "Only active collaborations can receive collaboration requests.");
        User collaborationOwner = requireEntrepreneurUser(
                targetCollaboration.getOwner(),
                "Project owner must be an entrepreneur to manage a collaboration."
        );

        if (targetUserId != null
                && !targetUserId.equals(collaborationOwner.getIdUser())
                && actor.getRole() != Role.ADMIN
                && !actor.getIdUser().equals(collaborationOwner.getIdUser())) {
            throw new BusinessException("Target user must be the owner of the collaboration.");
        }

        CollaborationRequestScenario scenario = resolveScenario(targetUserId, collaborationOwner);

        if (scenario == CollaborationRequestScenario.JOIN_REQUEST) {
            return createJoinCollaborationRequest(actor, targetCollaboration, collaborationOwner);
        }

        return createCollaborationInvitationRequest(actor, targetUserId, targetCollaboration);
    }

    public CollaborationRequest acceptCollaborationRequest(Long requestId) {
        User actor = currentUserService.requireCurrentUser();
        CollaborationRequest request = getCollaborationRequest(requestId);

        authorizationService.checkCanRespondToCollaborationRequest(actor, request);

        if (request.getStatus() != RequestStatus.PENDING) {
            throw new BusinessException("Only pending collaboration requests can be accepted.");
        }

        Collaboration collaboration = request.getTargetCollaboration();
        ensureActiveCollaboration(collaboration, "Only active collaborations can accept collaboration requests.");
        ensureUserIsNotMember(
                collaboration,
                request.getSubjectUser(),
                "The user is already a member of this collaboration."
        );
        addMember(collaboration, request.getSubjectUser());

        request.setStatus(RequestStatus.ACCEPTED);
        request.setProcessedAt(LocalDateTime.now());
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
        request.setProcessedAt(LocalDateTime.now());
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
        return collaborationRepository.findAllByProjectIdOrderByCreatedAtDesc(projectId)
                .stream()
                .filter(collaboration -> canViewCollaboration(actor, collaboration))
                .toList();
    }

    @Transactional(readOnly = true)
    public List<CollaborationRequest> getSentCollaborationRequests() {
        User actor = currentUserService.requireCurrentUser();
        return collaborationRequestRepository.findAllByRequesterUser_IdUserOrderByCreatedAtDesc(actor.getIdUser());
    }

    @Transactional(readOnly = true)
    public List<CollaborationRequest> getReceivedCollaborationRequests() {
        User actor = currentUserService.requireCurrentUser();
        return collaborationRequestRepository.findAllByTargetUser_IdUserOrderByCreatedAtDesc(actor.getIdUser());
    }

    @Transactional(readOnly = true)
    public List<CollaborationRequest> getCollaborationScopedRequests(Long collaborationId) {
        Collaboration collaboration = getCollaborationOrThrow(collaborationId);
        User actor = currentUserService.requireCurrentUser();
        boolean isMember = collaborationMemberRepository.existsByCollaborationIdAndUserId(
                collaborationId,
                actor.getIdUser()
        );

        try {
            authorizationService.checkCanViewCollaboration(actor, collaboration, isMember);
            return collaborationRequestRepository.findAllByTargetCollaboration_IdOrderByCreatedAtDesc(collaborationId);
        } catch (ForbiddenOperationException exception) {
            return collaborationRequestRepository.findAllByTargetCollaboration_IdAndTargetUser_IdUserOrderByCreatedAtDesc(
                    collaborationId,
                    actor.getIdUser()
            );
        }
    }

    @Transactional(readOnly = true)
    public List<CollaborationRequest> getProjectCollaborationRequests(Long projectId) {
        User actor = currentUserService.requireCurrentUser();
        Project project = getProject(projectId);
        authorizationService.checkCanViewProjectRequests(actor, project);
        return collaborationRequestRepository.findAllByTargetCollaboration_Project_IdOrderByCreatedAtDesc(projectId);
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
        CollaborationRequest request = collaborationRequestRepository.findById(requestId)
                .orElseThrow(() -> new ResourceNotFoundException("Collaboration request not found."));

        if (request.getTargetCollaboration() == null) {
            throw new BusinessException("Legacy project-wide collaboration requests are no longer supported.");
        }

        return request;
    }

    private Collaboration createCollaborationInternal(Project project, CollaborationType type) {
        ensureProjectOwnerCanBeMember(project);

        if (collaborationRepository.existsByProject_IdAndTypeAndStatusIn(
                project.getId(),
                type,
                OPEN_COLLABORATION_STATUSES
        )) {
            throw new BusinessException("An open collaboration of this type already exists for the project.");
        }

        Collaboration collaboration = new Collaboration();
        collaboration.setProject(project);
        applyStatus(collaboration, CollaborationStatus.ACTIVE);
        collaboration.setType(type);
        collaboration.setCreatedAt(LocalDateTime.now());

        Collaboration savedCollaboration = collaborationRepository.save(collaboration);
        ensureOwnerMembership(savedCollaboration);
        return savedCollaboration;
    }

    private CollaborationRequest createJoinCollaborationRequest(
            User actor,
            Collaboration targetCollaboration,
            User collaborationOwner
    ) {
        requireEntrepreneurUser(actor, "JOIN_REQUEST requester must be an entrepreneur.");
        if (collaborationOwner.getIdUser().equals(actor.getIdUser())) {
            throw new BusinessException("Collaboration owners cannot create join requests for their own collaboration.");
        }
        ensureUserIsNotMember(targetCollaboration, actor, "You are already a member of this collaboration.");

        return saveCollaborationRequest(
                actor,
                collaborationOwner,
                targetCollaboration,
                CollaborationRequestScenario.JOIN_REQUEST
        );
    }

    private CollaborationRequest createCollaborationInvitationRequest(
            User actor,
            Long targetUserId,
            Collaboration targetCollaboration
    ) {
        if (targetUserId == null) {
            throw new BusinessException("targetUserId is required for collaboration invitations.");
        }

        authorizationService.checkCanInviteToCollaboration(actor, targetCollaboration);

        User targetUser = requireEntrepreneurUser(
                userService.getRequiredUser(targetUserId),
                "Collaboration requests can only target entrepreneurs."
        );
        User collaborationOwner = requireEntrepreneurUser(
                targetCollaboration.getOwner(),
                "Project owner must be an entrepreneur to manage a collaboration."
        );

        if (targetUser.getIdUser().equals(actor.getIdUser())) {
            throw new BusinessException("Cannot create a collaboration request targeting yourself.");
        }
        if (targetUser.getIdUser().equals(collaborationOwner.getIdUser())) {
            throw new BusinessException("COLLAB_INVITATION targetUser cannot be the collaboration owner.");
        }
        ensureUserIsNotMember(targetCollaboration, targetUser, "The target user is already a member of this collaboration.");

        return saveCollaborationRequest(
                actor,
                targetUser,
                targetCollaboration,
                CollaborationRequestScenario.COLLAB_INVITATION
        );
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

    private void addMember(Collaboration collaboration, User user) {
        CollaborationMember member = new CollaborationMember();
        member.setCollaboration(collaboration);
        member.setUser(requireEntrepreneurUser(user, "Only entrepreneur users can be collaboration members."));
        member.setJoinedAt(LocalDateTime.now());
        collaborationMemberRepository.save(member);
    }

    private void ensureUserIsNotMember(Collaboration collaboration, User user, String message) {
        if (collaborationMemberRepository.existsByCollaborationIdAndUserId(collaboration.getId(), user.getIdUser())) {
            throw new BusinessException(message);
        }
    }

    private void applyStatus(Collaboration collaboration, CollaborationStatus status) {
        CollaborationStatus previousStatus = collaboration.getStatus();
        collaboration.setStatus(status);

        if (status == CollaborationStatus.CLOSED) {
            if (previousStatus != CollaborationStatus.CLOSED || collaboration.getClosedAt() == null) {
                collaboration.setClosedAt(LocalDateTime.now());
            }
            return;
        }

        collaboration.setClosedAt(null);
    }

    private CollaborationRequest saveCollaborationRequest(
            User requesterUser,
            User targetUser,
            Collaboration targetCollaboration,
            CollaborationRequestScenario scenario
    ) {
        ensureNoPendingRequestConflict(requesterUser, targetUser, targetCollaboration, scenario);

        CollaborationRequest request = new CollaborationRequest();
        request.setRequesterUser(requesterUser);
        request.setTargetUser(targetUser);
        request.setProject(targetCollaboration.getProject());
        request.setTargetCollaboration(targetCollaboration);
        request.setScenario(scenario);
        request.setStatus(RequestStatus.PENDING);
        request.setCreatedAt(LocalDateTime.now());
        return collaborationRequestRepository.save(request);
    }

    private void ensureNoPendingRequestConflict(
            User requesterUser,
            User targetUser,
            Collaboration targetCollaboration,
            CollaborationRequestScenario scenario
    ) {
        if (collaborationRequestRepository.existsByRequesterAndTargetUserAndCollaborationAndScenarioAndStatus(
                requesterUser,
                targetUser,
                targetCollaboration,
                scenario,
                RequestStatus.PENDING
        )) {
            throw new BusinessException("A matching pending collaboration request already exists.");
        }

        User subjectUser = scenario == CollaborationRequestScenario.JOIN_REQUEST ? requesterUser : targetUser;
        CollaborationRequestScenario oppositeScenario = scenario == CollaborationRequestScenario.JOIN_REQUEST
                ? CollaborationRequestScenario.COLLAB_INVITATION
                : CollaborationRequestScenario.JOIN_REQUEST;

        if (collaborationRequestRepository.existsPendingRequestForUserAndCollaborationAndScenario(
                subjectUser.getIdUser(),
                targetCollaboration.getId(),
                oppositeScenario
        )) {
            throw new BusinessException("A conflicting pending collaboration request already exists for this user and collaboration.");
        }
    }

    private CollaborationRequestScenario resolveScenario(Long targetUserId, User collaborationOwner) {
        if (targetUserId == null || targetUserId.equals(collaborationOwner.getIdUser())) {
            return CollaborationRequestScenario.JOIN_REQUEST;
        }

        return CollaborationRequestScenario.COLLAB_INVITATION;
    }

    private void ensureActiveCollaboration(Collaboration collaboration, String message) {
        ensureOwnerMembership(collaboration);

        if (collaboration.getStatus() != CollaborationStatus.ACTIVE) {
            throw new BusinessException(message);
        }
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

