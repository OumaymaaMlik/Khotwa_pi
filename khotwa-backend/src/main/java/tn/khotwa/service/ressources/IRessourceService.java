package tn.khotwa.service.ressources;

import org.springframework.data.domain.Page;
import org.springframework.web.multipart.MultipartFile;
import tn.khotwa.enums.PlanType;
import tn.khotwa.enums.ResourceType;
import tn.khotwa.enums.User.Role;
import tn.khotwa.projection.ressources.ProgressionView;
import tn.khotwa.projection.ressources.RessourceSummaryView;
import tn.khotwa.projection.ressources.RessourceView;
import tn.khotwa.projection.ressources.TagView;

import java.nio.file.Path;
import java.util.List;
import java.util.Map;

public interface IRessourceService {

    /**
     * Lister les ressources avec contrôle d'accès et filtrage par secteur.
     * secteur = null pour ne pas filtrer par secteur (admin, coach).
     * secteur = "agriculture" → ressources de catégories agriculture + catégories transversales.
     */
    Page<RessourceSummaryView> lister(
        Role role, PlanType userPlan,
        Long userId, ResourceType type, Long catId,
        String tag, String recherche,
        String secteur,      // filtre automatique par secteur de l'entrepreneur
        int page, int size
    );

    EnrichedRessource getParId(Long id, Long userId, Role role, PlanType userPlan);

    /**
     * Retourne la vue brute d'une ressource après vérification des droits d'accès.
     * Utilisé par l'endpoint download pour distinguer fichier vs urlExterne.
     */
    RessourceView getVueById(Long id, Role role, PlanType userPlan);

    RessourceView creer(
        String titre, String description, ResourceType type, PlanType planType,
        Long categorieId, List<String> tags, String urlExterne,
        Integer dureeSec, Integer nombrePages, Boolean publie,
        MultipartFile fichier, Long adminId
    );

    RessourceView mettreAJour(
        Long id, String titre, String description, PlanType planType,
        Long categorieId, List<String> tags, Integer dureeSec,
        Integer nombrePages, Boolean publie
    );

    RessourceView remplacerFichier(Long id, MultipartFile fichier);
    RessourceView togglePublie(Long id);
    void supprimer(Long id);
    Path obtenirCheminFichier(Long id, Role role, PlanType userPlan);
    Map<String, Object> getStats(Long userId);

    record EnrichedRessource(
        RessourceView ressource,
        List<TagView> tags,
        ProgressionView maProgression
    ) {}
}
