package tn.khotwa.biblio.repository.ressources;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.khotwa.biblio.entity.ressources.Ressource;
import tn.khotwa.biblio.enums.PlanType;
import tn.khotwa.biblio.enums.ResourceType;
import tn.khotwa.biblio.projection.ressources.RessourceSummaryView;
import tn.khotwa.biblio.projection.ressources.RessourceView;
import tn.khotwa.biblio.projection.ressources.TagView;

import java.util.List;
import java.util.Optional;

public interface RessourceRepository extends JpaRepository<Ressource, Long> {

    Optional<RessourceView> findProjectedById(Long id);

    long countByPublieTrue();
    long countByPlanType(PlanType planType);
    long countByType(ResourceType type);

    @Query("SELECT t.id AS id, t.nom AS nom FROM Ressource r JOIN r.tags t WHERE r.id = :id")
    List<TagView> findTagsByRessourceId(@Param("id") Long id);

    // ── Pour les utilisateurs (publiés seulement) ──────────────────────────
    // Filtre par plan + type + catégorie + tag + recherche + secteur
    // secteur null = toutes les catégories (pas de filtrage secteur)
    // secteur non-null = catégories de ce secteur OU catégories transversales (secteur IS NULL)
    @Query("""
        SELECT DISTINCT r FROM Ressource r
        LEFT JOIN r.tags t
        WHERE r.publie = true
          AND r.planType IN :plans
          AND (:type      IS NULL OR r.type = :type)
          AND (:catId     IS NULL OR r.categorie.id = :catId)
          AND (:tagNom    IS NULL OR t.nom = :tagNom)
          AND (:recherche IS NULL
               OR LOWER(r.titre)       LIKE LOWER(CONCAT('%', :recherche, '%'))
               OR LOWER(r.description) LIKE LOWER(CONCAT('%', :recherche, '%')))
          AND (:secteur IS NULL
               OR r.categorie IS NULL
               OR r.categorie.secteur IS NULL
               OR LOWER(r.categorie.secteur) = LOWER(:secteur))
    """)
    Page<RessourceSummaryView> findPubliesAvecFiltres(
        @Param("plans")     List<PlanType> plans,
        @Param("type")      ResourceType type,
        @Param("catId")     Long catId,
        @Param("tagNom")    String tagNom,
        @Param("recherche") String recherche,
        @Param("secteur")   String secteur,
        Pageable pageable
    );

    // ── Pour l'admin (publiés + brouillons) ───────────────────────────────
    @Query("""
        SELECT DISTINCT r FROM Ressource r
        LEFT JOIN r.tags t
        WHERE r.planType IN :plans
          AND (:type      IS NULL OR r.type = :type)
          AND (:catId     IS NULL OR r.categorie.id = :catId)
          AND (:tagNom    IS NULL OR t.nom = :tagNom)
          AND (:recherche IS NULL
               OR LOWER(r.titre)       LIKE LOWER(CONCAT('%', :recherche, '%'))
               OR LOWER(r.description) LIKE LOWER(CONCAT('%', :recherche, '%')))
    """)
    Page<RessourceSummaryView> findToutesAvecFiltres(
        @Param("plans")     List<PlanType> plans,
        @Param("type")      ResourceType type,
        @Param("catId")     Long catId,
        @Param("tagNom")    String tagNom,
        @Param("recherche") String recherche,
        Pageable pageable
    );

    @Modifying
    @Query("UPDATE Ressource r SET r.vues = r.vues + 1 WHERE r.id = :id")
    void incrementerVues(@Param("id") Long id);

    @Modifying
    @Query("UPDATE Ressource r SET r.telechargements = r.telechargements + 1 WHERE r.id = :id")
    void incrementerTelechargements(@Param("id") Long id);
}
