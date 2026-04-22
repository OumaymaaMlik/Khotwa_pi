package tn.khotwa.repository.collaboration;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.khotwa.dto.collaboration.CollaborationMemberCountView;
import tn.khotwa.entity.collaboration.CollaborationMember;

public interface CollaborationMemberRepository extends JpaRepository<CollaborationMember, Long> {

        @Query("""
                        select case when count(member) > 0 then true else false end
                        from CollaborationMember member
                        where member.collaboration.id = :collaborationId
                            and member.user.idUser = :userId
                        """)
        boolean existsByCollaborationIdAndUserId(
                        @Param("collaborationId") Long collaborationId,
                        @Param("userId") Long userId
        );

    Optional<CollaborationMember> findByCollaborationIdAndUser_IdUser(Long collaborationId, Long userId);

    Optional<CollaborationMember> findByIdAndCollaborationId(Long memberId, Long collaborationId);

    List<CollaborationMember> findAllByCollaborationIdOrderByJoinedAtAsc(Long collaborationId);

    @Query("""
        select case when count(member) > 0 then true else false end
        from CollaborationMember member
        where member.collaboration.project.id = :projectId
            and member.user.idUser = :userId
        """)
    boolean existsByProjectIdAndUserId(
            @Param("projectId") Long projectId,
            @Param("userId") Long userId
    );

    @Query("""
        select member.collaboration.id as collaborationId,
               count(member) as memberCount
        from CollaborationMember member
        where member.collaboration.status = tn.khotwa.enums.collaboration.CollaborationStatus.ACTIVE
        group by member.collaboration.id
        order by member.collaboration.id asc
        """)
    List<CollaborationMemberCountView> countMembersPerCollaboration();
}

