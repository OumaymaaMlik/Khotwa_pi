package tn.khotwa.repository.Collaboration;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.khotwa.entity.Collaboration.CollaborationRequest;

public interface CollaborationRequestRepository extends JpaRepository<CollaborationRequest, Long> {

    @Query("""
        select case when count(request) > 0 then true else false end
        from CollaborationRequest request
        where request.requesterUser.idUser = :requesterUserId
          and request.targetUser.idUser = :targetUserId
          and request.project.id = :projectId
          and request.type = :type
          and request.targetCollaboration is null
          and request.status = tn.khotwa.enums.Collaboration.RequestStatus.PENDING
        """)
    boolean existsPendingProjectInvitation(
            @Param("requesterUserId") Long requesterUserId,
            @Param("targetUserId") Long targetUserId,
            @Param("projectId") Long projectId,
            @Param("type") tn.khotwa.enums.Collaboration.CollaborationType type
    );

    @Query("""
        select case when count(request) > 0 then true else false end
        from CollaborationRequest request
        where request.requesterUser.idUser = :requesterUserId
          and request.targetCollaboration.id = :targetCollaborationId
          and request.status = tn.khotwa.enums.Collaboration.RequestStatus.PENDING
        """)
    boolean existsPendingJoinRequest(
            @Param("requesterUserId") Long requesterUserId,
            @Param("targetCollaborationId") Long targetCollaborationId
    );

    @Query("""
        select request
        from CollaborationRequest request
        where request.requesterUser.idUser = :requesterUserId
        order by request.createdAt desc
        """)
    List<CollaborationRequest> findAllByRequesterUserId(@Param("requesterUserId") Long requesterUserId);

    @Query("""
        select request
        from CollaborationRequest request
        where request.targetUser.idUser = :targetUserId
        order by request.createdAt desc
        """)
    List<CollaborationRequest> findAllByTargetUserId(@Param("targetUserId") Long targetUserId);

    @Query("""
        select request
        from CollaborationRequest request
        where request.project.id = :projectId
        order by request.createdAt desc
        """)
    List<CollaborationRequest> findAllByProjectId(@Param("projectId") Long projectId);

    @Query("""
        select request
        from CollaborationRequest request
        where request.status = tn.khotwa.enums.Collaboration.RequestStatus.PENDING
        order by request.createdAt desc
        """)
    List<CollaborationRequest> findAllPendingRequests();
}
