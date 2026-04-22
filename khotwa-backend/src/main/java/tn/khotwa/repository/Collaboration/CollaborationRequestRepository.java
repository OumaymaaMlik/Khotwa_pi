package tn.khotwa.repository.Collaboration;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.khotwa.dto.Collaboration.CollaborationPendingRequestCountView;
import tn.khotwa.entity.Collaboration.Collaboration;
import tn.khotwa.entity.Collaboration.CollaborationRequest;
import tn.khotwa.entity.User.User;
import tn.khotwa.enums.Collaboration.CollaborationRequestScenario;
import tn.khotwa.enums.Collaboration.RequestStatus;

public interface CollaborationRequestRepository extends JpaRepository<CollaborationRequest, Long> {

    long countByStatusAndTargetCollaboration_Status(RequestStatus status, tn.khotwa.enums.Collaboration.CollaborationStatus collaborationStatus);

    @Query("""
        select case when count(request) > 0 then true else false end
        from CollaborationRequest request
        where request.requesterUser = :requester
          and request.targetUser = :targetUser
          and request.targetCollaboration = :collaboration
          and request.scenario = :scenario
          and request.status = :status
        """)
    boolean existsByRequesterAndTargetUserAndCollaborationAndScenarioAndStatus(
            @Param("requester") User requester,
            @Param("targetUser") User targetUser,
            @Param("collaboration") Collaboration collaboration,
            @Param("scenario") CollaborationRequestScenario scenario,
            @Param("status") RequestStatus status
    );

    @Query("""
        select case when count(request) > 0 then true else false end
        from CollaborationRequest request
        where request.targetCollaboration.id = :targetCollaborationId
          and request.scenario = :scenario
          and request.status = tn.khotwa.enums.Collaboration.RequestStatus.PENDING
          and (
                (:scenario = tn.khotwa.enums.Collaboration.CollaborationRequestScenario.JOIN_REQUEST
                    and request.requesterUser.idUser = :userId)
                or
                (:scenario = tn.khotwa.enums.Collaboration.CollaborationRequestScenario.COLLAB_INVITATION
                    and request.targetUser.idUser = :userId)
              )
        """)
    boolean existsPendingRequestForUserAndCollaborationAndScenario(
            @Param("userId") Long userId,
            @Param("targetCollaborationId") Long targetCollaborationId,
            @Param("scenario") CollaborationRequestScenario scenario
    );

    List<CollaborationRequest> findAllByRequesterUser_IdUserOrderByCreatedAtDesc(Long requesterUserId);

    List<CollaborationRequest> findAllByTargetUser_IdUserOrderByCreatedAtDesc(Long targetUserId);

    List<CollaborationRequest> findAllByTargetCollaboration_IdOrderByCreatedAtDesc(Long targetCollaborationId);

    List<CollaborationRequest> findAllByTargetCollaboration_IdAndTargetUser_IdUserOrderByCreatedAtDesc(
            Long targetCollaborationId,
            Long targetUserId
    );

    List<CollaborationRequest> findAllByTargetCollaboration_Project_IdOrderByCreatedAtDesc(Long projectId);

    @Query("""
        select request
        from CollaborationRequest request
        where request.status = tn.khotwa.enums.Collaboration.RequestStatus.PENDING
          and request.targetCollaboration is not null
        order by request.createdAt desc
        """)
    List<CollaborationRequest> findAllPendingRequests();

    @Query("""
        select request.targetCollaboration.id as collaborationId,
               count(request) as pendingRequestCount
        from CollaborationRequest request
        where request.status = tn.khotwa.enums.Collaboration.RequestStatus.PENDING
          and request.targetCollaboration.status = tn.khotwa.enums.Collaboration.CollaborationStatus.ACTIVE
        group by request.targetCollaboration.id
        order by request.targetCollaboration.id asc
        """)
    List<CollaborationPendingRequestCountView> countPendingRequestsPerCollaboration();
}
