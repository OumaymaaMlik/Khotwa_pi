package tn.khotwa.repository.projet;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.khotwa.entity.projet.Document;

import java.util.List;

public interface DocumentRepository extends JpaRepository<Document, Long> {
    List<Document> findBySousTacheId(Long sousTacheId);

    @Query("select d from Document d, SousTache st, Tache t where d.sousTacheId = st.id and st.tacheId = t.id and t.projetId = :projetId")
    List<Document> findByProjetId(@Param("projetId") Long projetId);
}
