package tn.khotwa.service.ressources;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import tn.khotwa.entity.ressources.Categorie;
import tn.khotwa.entity.ressources.Ressource;
import tn.khotwa.entity.ressources.Tag;
import tn.khotwa.enums.*;
import tn.khotwa.enums.SubscriptionEnums.PlanType;
import tn.khotwa.enums.UserEnum.Role;
import tn.khotwa.exception.ResourceNotFoundException;
import tn.khotwa.projection.ressources.*;
import tn.khotwa.repository.ressources.*;
import tn.khotwa.service.AccessControlService;
import tn.khotwa.service.ressources.ai.AiService;

import java.nio.file.Path;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional
public class RessourceService implements IRessourceService {

    private final RessourceRepository ressourceRepo;
    private final CategorieRepository categorieRepo;
    private final TagRepository       tagRepo;
    private final ProgressionRepository progressionRepo;
    private final FileStorageService  fileService;
    private final AccessControlService accessControl;
    private final AiService           aiService;

    // ── Listing ───────────────────────────────────────────────────────

    @Override
    public Page<RessourceSummaryView> lister(
            Role role, PlanType userPlan,
            Long userId, ResourceType type, Long catId,
            String tag, String recherche,
            String secteur,          // null = pas de filtrage secteur
            int page, int size) {

        List<PlanType> plansAccessibles = accessControl.getPlanTypesAccessibles(role, userPlan);
        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, "createdAt"));

        // Admin voit tout, sans filtrage par secteur
        if (role == Role.ADMIN) {
            return ressourceRepo.findToutesAvecFiltres(
                    plansAccessibles, type, catId, tag, recherche, pageable
            );
        }

        // Coach voit tout (publiés), sans filtrage par secteur
        // Entrepreneur : filtrage automatique par secteur de son projet
        return ressourceRepo.findPubliesAvecFiltres(
                plansAccessibles, type, catId, tag, recherche,
                secteur,  // null pour coach, secteur du projet pour entrepreneur
                pageable
        );
    }

    // ── Détail ────────────────────────────────────────────────────────

    @Override
    public EnrichedRessource getParId(Long id, Long userId, Role role, PlanType userPlan) {
        RessourceView vue = ressourceRepo.findProjectedById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Ressource", id));

        accessControl.verifierAcces(role, userPlan, vue.getPlanType());
        ressourceRepo.incrementerVues(id);

        List<TagView> tags = ressourceRepo.findTagsByRessourceId(id);

        ProgressionView progression = null;
        if (userId != null) {
            progression = progressionRepo
                    .findProjectedByUtilisateurIdAndRessourceId(userId, id)
                    .orElse(null);
        }

        return new EnrichedRessource(vue, tags, progression);
    }

    @Override
    public RessourceView getVueById(Long id, Role role, PlanType userPlan) {
        RessourceView vue = ressourceRepo.findProjectedById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Ressource", id));
        accessControl.verifierAcces(role, userPlan, vue.getPlanType());
        return vue;
    }

    // ── CRUD ──────────────────────────────────────────────────────────

    @Override
    public RessourceView creer(
            String titre, String description, ResourceType type,
            PlanType planType, Long categorieId, List<String> tags,
            String urlExterne, Integer dureeSec, Integer nombrePages,
            Boolean publie, MultipartFile fichier, Long adminId) {

        Ressource ressource = construireRessource(titre, description, type, planType,
                dureeSec, nombrePages, publie, adminId);
        gererContenu(ressource, fichier, urlExterne, type);
        gererCategorie(ressource, categorieId);
        gererTags(ressource, tags);

        Ressource sauvegardee = ressourceRepo.save(ressource);
        log.info("Ressource créée — id={} titre={}", sauvegardee.getId(), sauvegardee.getTitre());
        // Auto-indexation IA après création
        if (Boolean.TRUE.equals(sauvegardee.getPublie())) {
            try { aiService.indexerUneRessource(sauvegardee); }
            catch (Exception e) { log.warn("Auto-indexation échouée id={}: {}", sauvegardee.getId(), e.getMessage()); }
        }
        return ressourceRepo.findProjectedById(sauvegardee.getId()).orElseThrow();
    }

    @Override
    public RessourceView mettreAJour(
            Long id, String titre, String description, PlanType planType,
            Long categorieId, List<String> tags, Integer dureeSec,
            Integer nombrePages, Boolean publie) {

        Ressource ressource = ressourceRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Ressource", id));

        if (titre       != null) ressource.setTitre(titre);
        if (description != null) ressource.setDescription(description);
        if (planType    != null) ressource.setPlanType(planType);
        if (dureeSec    != null) ressource.setDureeSec(dureeSec);
        if (nombrePages != null) ressource.setNombrePages(nombrePages);
        if (publie      != null) ressource.setPublie(publie);
        if (categorieId != null) gererCategorie(ressource, categorieId);
        if (tags        != null) gererTags(ressource, tags);

        Ressource maj = ressourceRepo.save(ressource);
        // Auto-indexation IA après mise à jour
        if (Boolean.TRUE.equals(maj.getPublie())) {
            try { aiService.indexerUneRessource(maj); }
            catch (Exception e) { log.warn("Auto-indexation échouée id={}: {}", id, e.getMessage()); }
        }
        return ressourceRepo.findProjectedById(id).orElseThrow();
    }

    @Override
    public RessourceView remplacerFichier(Long id, MultipartFile fichier) {
        Ressource ressource = ressourceRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Ressource", id));

        fileService.supprimer(ressource.getCheminFichier());
        ressource.setCheminFichier(fileService.sauvegarder(fichier, ressource.getType()));
        ressource.setNomFichierOriginal(fichier.getOriginalFilename());
        ressource.setMimeType(fichier.getContentType());
        ressource.setTailleFichierOctets(fichier.getSize());
        ressourceRepo.save(ressource);
        return ressourceRepo.findProjectedById(id).orElseThrow();
    }

    @Override
    public RessourceView togglePublie(Long id) {
        Ressource ressource = ressourceRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Ressource", id));
        ressource.setPublie(!ressource.getPublie());
        Ressource toggled = ressourceRepo.save(ressource);
        // Auto-indexation IA après changement de statut publié
        if (Boolean.TRUE.equals(toggled.getPublie())) {
            try { aiService.indexerUneRessource(toggled); }
            catch (Exception e) { log.warn("Auto-indexation échouée id={}: {}", id, e.getMessage()); }
        }
        return ressourceRepo.findProjectedById(id).orElseThrow();
    }

    @Override
    public void supprimer(Long id) {
        Ressource ressource = ressourceRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Ressource", id));
        fileService.supprimer(ressource.getCheminFichier());
        ressourceRepo.delete(ressource);
        log.info("Ressource supprimée — id={}", id);
    }

    @Override
    public Path obtenirCheminFichier(Long id, Role role, PlanType userPlan) {
        RessourceView vue = ressourceRepo.findProjectedById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Ressource", id));
        accessControl.verifierAcces(role, userPlan, vue.getPlanType());
        if (vue.getCheminFichier() == null) throw new ResourceNotFoundException("Aucun fichier attaché");
        ressourceRepo.incrementerTelechargements(id);
        return fileService.obtenirChemin(vue.getCheminFichier());
    }

    @Override
    public Map<String, Object> getStats(Long userId) {
        Map<String, Object> stats = new LinkedHashMap<>();
        stats.put("totalRessources",    ressourceRepo.count());
        stats.put("ressourcesPubliees", ressourceRepo.countByPublieTrue());
        stats.put("free",          ressourceRepo.countByPlanType(PlanType.FREE));
        stats.put("premium",       ressourceRepo.countByPlanType(PlanType.PREMIUM));
        stats.put("institutional", ressourceRepo.countByPlanType(PlanType.INSTITUTIONAL));
        Map<String, Long> parType = new LinkedHashMap<>();
        for (ResourceType t : ResourceType.values()) parType.put(t.name(), ressourceRepo.countByType(t));
        stats.put("parType", parType);
        if (userId != null) {
            stats.put("mesConsultees",
                    progressionRepo.countByUtilisateurIdAndStatut(userId, ProgressStatus.IN_PROGRESS));
            stats.put("mesCompletees",
                    progressionRepo.countByUtilisateurIdAndStatut(userId, ProgressStatus.COMPLETED));
        }
        return stats;
    }

    // ── Méthodes privées ──────────────────────────────────────────────

    private Ressource construireRessource(String titre, String description, ResourceType type,
                                          PlanType planType, Integer dureeSec, Integer nombrePages, Boolean publie, Long adminId) {
        Ressource r = new Ressource();
        r.setTitre(titre); r.setDescription(description);
        r.setType(type); r.setPlanType(planType);
        r.setDureeSec(dureeSec); r.setNombrePages(nombrePages);
        r.setPublie(publie != null ? publie : false);
        r.setCreateurId(adminId);
        return r;
    }

    private void gererContenu(Ressource r, MultipartFile fichier, String urlExterne, ResourceType type) {
        if (fichier != null && !fichier.isEmpty()) {
            r.setCheminFichier(fileService.sauvegarder(fichier, type));
            r.setNomFichierOriginal(fichier.getOriginalFilename());
            r.setMimeType(fichier.getContentType());
            r.setTailleFichierOctets(fichier.getSize());
        }
        if (StringUtils.hasText(urlExterne)) r.setUrlExterne(urlExterne.trim());
    }

    private void gererCategorie(Ressource r, Long categorieId) {
        if (categorieId != null) {
            Categorie cat = categorieRepo.findById(categorieId)
                    .orElseThrow(() -> new ResourceNotFoundException("Catégorie", categorieId));
            r.setCategorie(cat);
        }
    }

    private void gererTags(Ressource r, List<String> tagNames) {
        if (tagNames == null || tagNames.isEmpty()) {
            r.setTags(new ArrayList<>());
            return;
        }

        Set<String> nomsUniques = tagNames.stream()
                .filter(StringUtils::hasText)
                .map(String::trim)
                .collect(Collectors.toSet());

        List<Tag> tagList = nomsUniques.stream()
                .map(nom -> {
                    try {
                        // Try to find it or create it
                        return tagRepo.findByNom(nom)
                                .orElseGet(() -> tagRepo.saveAndFlush(Tag.builder().nom(nom).build()));
                    } catch (org.springframework.dao.DataIntegrityViolationException e) {
                        // If a duplicate error occurs, someone else just created it.
                        // Fetch that version and move on.
                        return tagRepo.findByNom(nom)
                                .orElseThrow(() -> new RuntimeException("Concurrent tag creation failed for: " + nom));
                    }
                })
                .collect(Collectors.toList());

        r.setTags(tagList);
    }
}