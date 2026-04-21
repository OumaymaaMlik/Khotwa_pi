package tn.khotwa.repository.Collaboration;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.khotwa.entity.Collaboration.CollaborationMember;

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
}
