package tn.khotwa.repository.projectRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.khotwa.entity.projectEntity.ProjetCorrection;

import java.util.List;
import java.util.Optional;

public interface ProjetCorrectionRepository extends JpaRepository<ProjetCorrection, Long> {

    Optional<ProjetCorrection> findTopByProjetIdOrderByDateDemandeCorrectionDesc(Long projetId);

    @Query(value = """
        select *
        from projet_corrections pc
        where pc.projet_id = :projetId
          and pc.commentaire is not null
          and trim(pc.commentaire) <> ''
        order by pc.date_demande_correction desc
        """, nativeQuery = true)
  List<ProjetCorrection> findLatestNonBlankCommentByProjetId(@Param("projetId") Long projetId);

    @Query("""
        select pc from ProjetCorrection pc
        where pc.projetId in :projetIds
          and pc.dateDemandeCorrection = (
            select max(pc2.dateDemandeCorrection)
            from ProjetCorrection pc2
            where pc2.projetId = pc.projetId
          )
        """)
    List<ProjetCorrection> findLatestByProjetIds(@Param("projetIds") List<Long> projetIds);
}
