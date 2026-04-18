package tn.khotwa.service.projet;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import tn.khotwa.dto.projet.SousTacheCreateRequestDto;
import tn.khotwa.dto.projet.SousTacheStatutUpdateRequestDto;
import tn.khotwa.dto.projet.TacheCreateRequestDto;
import tn.khotwa.dto.projet.TacheStatutUpdateRequestDto;
import tn.khotwa.dto.projet.ProlongationRequestDto;
import tn.khotwa.dto.projet.DocumentUploadRequestDto;
import tn.khotwa.entity.projet.Document;
import tn.khotwa.entity.projet.Projet;
import tn.khotwa.entity.projet.SousTache;
import tn.khotwa.entity.projet.Tache;
import tn.khotwa.enums.EtatValidationProjet;
import tn.khotwa.enums.StatutProjet;
import tn.khotwa.enums.StatutTache;
import tn.khotwa.exception.BusinessException;
import tn.khotwa.repository.projet.DocumentRepository;
import tn.khotwa.repository.projet.ProjetRepository;
import tn.khotwa.repository.projet.SousTacheRepository;
import tn.khotwa.repository.projet.TacheRepository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class TacheService {

    @Value("${app.upload.dir:./uploads}")
    private String uploadBaseDir;

    private final TacheRepository tacheRepository;
    private final SousTacheRepository sousTacheRepository;
    private final DocumentRepository documentRepository;
    private final ProjetRepository projetRepository;
    private final ScoreService scoreService;

    @Transactional
    public Tache createTache(Long projetId, Long coachId, TacheCreateRequestDto dto) {
        Tache tache = Tache.builder()
                .titre(dto.getTitre())
                .description(dto.getDescription())
                .typeTache(dto.getTypeTache())
                .priorite(dto.getPriorite())
                .statutTache(StatutTache.A_FAIRE)
                .dateDebut(dto.getDateDebut())
                .dateFin(dto.getDateFin())
                .retardJours(0)
                .commentaireCoach(dto.getCommentaireCoach())
                .scoreImpact(0)
                .dateCreation(LocalDateTime.now())
                .dateMiseAJour(LocalDateTime.now())
                .projetId(projetId)
                .coachCreateurId(coachId)
                .build();

        return tacheRepository.save(tache);
    }

    @Transactional
    public SousTache createSousTache(Long tacheId, SousTacheCreateRequestDto dto) {
        SousTache st = SousTache.builder()
                .titre(dto.getTitre())
                .description(dto.getDescription())
                .priorite(dto.getPriorite())
                .statutSousTache(StatutTache.A_FAIRE)
                .dateDebut(dto.getDateDebut())
                .dateFin(dto.getDateFin())
                .retardJours(0)
                .commentaireCoach(dto.getCommentaireCoach())
                .scoreImpact(0)
                .dateCreation(LocalDateTime.now())
                .dateMiseAJour(LocalDateTime.now())
                .tacheId(tacheId)
                .build();

        return sousTacheRepository.save(st);
    }

    @Transactional
    public Tache updateStatutTache(Long tacheId, TacheStatutUpdateRequestDto dto) {
        Tache tache = tacheRepository.findById(tacheId)
                .orElseThrow(() -> new BusinessException("Tache introuvable"));

        validateTransitionTache(tache.getStatutTache(), dto.getStatutTache(), dto.getCommentaireCoach(), dto.getJustificationEntrepreneur());
        tache.setStatutTache(dto.getStatutTache());
        if (dto.getCommentaireCoach() != null) {
            tache.setCommentaireCoach(dto.getCommentaireCoach());
        }
        if (dto.getJustificationEntrepreneur() != null) {
            tache.setJustificationEntrepreneur(dto.getJustificationEntrepreneur());
        }
        applyRetard(tache, dto.getStatutTache());
        tache.setDateMiseAJour(LocalDateTime.now());

        tacheRepository.save(tache);
        synchronizeProjetValidationFromTasks(tache.getProjetId());
        scoreService.updateTaskScoreAndProject(tache);
        return tache;
    }

    @Transactional
    public SousTache updateStatutSousTache(Long sousTacheId, SousTacheStatutUpdateRequestDto dto) {
        SousTache sousTache = sousTacheRepository.findById(sousTacheId)
                .orElseThrow(() -> new BusinessException("Sous-tache introuvable"));

        validateTransitionSousTache(sousTache.getStatutSousTache(), dto.getStatutSousTache(), dto.getCommentaireCoach(), dto.getJustificationEntrepreneur());
        sousTache.setStatutSousTache(dto.getStatutSousTache());
        if (dto.getCommentaireCoach() != null) {
            sousTache.setCommentaireCoach(dto.getCommentaireCoach());
        }
        if (dto.getJustificationEntrepreneur() != null) {
            sousTache.setJustificationEntrepreneur(dto.getJustificationEntrepreneur());
        }
        applyRetard(sousTache, dto.getStatutSousTache());
        sousTache.setDateMiseAJour(LocalDateTime.now());

        sousTacheRepository.save(sousTache);
        Tache parent = synchronizeParentTaskStatus(sousTache.getTacheId());
        synchronizeProjetValidationFromTasks(parent.getProjetId());
        scoreService.updateSousTacheScoreAndProject(sousTache);
        return sousTache;
    }

    @Transactional
    public Document uploaderDocumentSousTache(Long sousTacheId, DocumentUploadRequestDto dto) {
        sousTacheRepository.findById(sousTacheId)
                .orElseThrow(() -> new BusinessException("Sous-tache introuvable"));

        Document document = Document.builder()
                .nomFichier(dto.getNomFichier())
                .nomOriginal(dto.getNomOriginal())
                .typeContenu(dto.getTypeContenu())
                .cheminStockage(dto.getCheminStockage())
                .tailleFichier(dto.getTailleFichier())
                .dateUpload(LocalDateTime.now())
                .sousTacheId(sousTacheId)
                .build();

        return documentRepository.save(document);
    }

    @Transactional
    public Document uploaderDocumentSousTacheFichier(Long sousTacheId, MultipartFile file) {
        sousTacheRepository.findById(sousTacheId)
                .orElseThrow(() -> new BusinessException("Sous-tache introuvable"));

        if (file == null || file.isEmpty()) {
            throw new BusinessException("Fichier obligatoire pour l'upload");
        }

        String originalName = StringUtils.cleanPath(file.getOriginalFilename() == null ? "document" : file.getOriginalFilename());
        if (originalName.isBlank()) {
            originalName = "document";
        }

        String storedName = UUID.randomUUID() + "_" + originalName;
        Path storageDir = Paths.get(uploadBaseDir, "sous-taches", String.valueOf(sousTacheId));
        Path targetPath = storageDir.resolve(storedName);

        try {
            Files.createDirectories(storageDir);
            file.transferTo(targetPath);
        } catch (IOException ex) {
            throw new BusinessException("Impossible de sauvegarder le fichier uploadé");
        }

        Document document = Document.builder()
                .nomFichier(storedName)
                .nomOriginal(originalName)
                .typeContenu(file.getContentType() == null ? "application/octet-stream" : file.getContentType())
                .cheminStockage(targetPath.toAbsolutePath().toString())
                .tailleFichier(file.getSize())
                .dateUpload(LocalDateTime.now())
                .sousTacheId(sousTacheId)
                .build();

        return documentRepository.save(document);
    }

    public List<Tache> tachesProjet(Long projetId) {
        refreshRetardsProjet(projetId);
        return tacheRepository.findByProjetId(projetId);
    }

    public List<SousTache> sousTachesTache(Long tacheId) {
        refreshRetardsTache(tacheId);
        return sousTacheRepository.findByTacheId(tacheId);
    }

    public List<Document> documentsSousTache(Long sousTacheId) {
        return documentRepository.findBySousTacheId(sousTacheId);
    }

    public List<Document> documentsProjet(Long projetId) {
        return documentRepository.findByProjetId(projetId);
    }

    public Document documentById(Long documentId) {
        return documentRepository.findById(documentId)
                .orElseThrow(() -> new BusinessException("Document introuvable"));
    }

    public byte[] lireContenuDocument(Long documentId) {
        Document document = documentById(documentId);
        try {
            return Files.readAllBytes(Paths.get(document.getCheminStockage()));
        } catch (IOException ex) {
            throw new BusinessException("Fichier document introuvable sur le stockage");
        }
    }

    @Transactional
    public Tache demanderProlongationTache(Long tacheId, ProlongationRequestDto dto) {
        Tache tache = tacheRepository.findById(tacheId)
                .orElseThrow(() -> new BusinessException("Tache introuvable"));

        tache.setDateFin(dto.getNouvelleDateFin());
        tache.setJustificationEntrepreneur(dto.getJustificationEntrepreneur());
        tache.setDateMiseAJour(LocalDateTime.now());
        applyRetard(tache, tache.getStatutTache());

        return tacheRepository.save(tache);
    }

    @Transactional
    public SousTache demanderProlongationSousTache(Long sousTacheId, ProlongationRequestDto dto) {
        SousTache sousTache = sousTacheRepository.findById(sousTacheId)
                .orElseThrow(() -> new BusinessException("Sous-tache introuvable"));

        sousTache.setDateFin(dto.getNouvelleDateFin());
        sousTache.setJustificationEntrepreneur(dto.getJustificationEntrepreneur());
        sousTache.setDateMiseAJour(LocalDateTime.now());
        applyRetard(sousTache, sousTache.getStatutSousTache());

        return sousTacheRepository.save(sousTache);
    }

    @Transactional
    public Tache demanderCorrectionTache(Long tacheId, String commentaireCoach) {
        if (commentaireCoach == null || commentaireCoach.isBlank()) {
            throw new BusinessException("Commentaire de correction obligatoire");
        }
        Tache tache = tacheRepository.findById(tacheId)
                .orElseThrow(() -> new BusinessException("Tache introuvable"));
        tache.setCommentaireCoach(commentaireCoach);
        tache.setStatutTache(StatutTache.A_CORRIGER);
        tache.setDateMiseAJour(LocalDateTime.now());
        tacheRepository.save(tache);
        markProjetEnCorrectionEtEnCours(tache.getProjetId());
        scoreService.updateTaskScoreAndProject(tache);
        return tache;
    }

    @Transactional
    public SousTache demanderCorrectionSousTache(Long sousTacheId, String commentaireCoach) {
        if (commentaireCoach == null || commentaireCoach.isBlank()) {
            throw new BusinessException("Commentaire de correction obligatoire");
        }
        SousTache sousTache = sousTacheRepository.findById(sousTacheId)
                .orElseThrow(() -> new BusinessException("Sous-tache introuvable"));
        sousTache.setCommentaireCoach(commentaireCoach);
        sousTache.setStatutSousTache(StatutTache.A_CORRIGER);
        sousTache.setDateMiseAJour(LocalDateTime.now());
        sousTacheRepository.save(sousTache);

        Tache parent = synchronizeParentTaskStatus(sousTache.getTacheId());
        markProjetEnCorrectionEtEnCours(parent.getProjetId());
        scoreService.updateSousTacheScoreAndProject(sousTache);
        return sousTache;
    }

    private void applyRetard(Tache tache, StatutTache nouveauStatut) {
        if (tache.getDateFin() == null) {
            tache.setRetardJours(0);
            return;
        }
        if (nouveauStatut == StatutTache.TERMINEE && LocalDate.now().isAfter(tache.getDateFin())) {
            tache.setRetardJours((int) ChronoUnit.DAYS.between(tache.getDateFin(), LocalDate.now()));
        } else if (nouveauStatut != StatutTache.TERMINEE && LocalDate.now().isAfter(tache.getDateFin())) {
            if (canAutoSwitchToLateStatus(nouveauStatut)) {
                tache.setStatutTache(StatutTache.EN_RETARD);
            }
            tache.setRetardJours((int) ChronoUnit.DAYS.between(tache.getDateFin(), LocalDate.now()));
        } else {
            tache.setRetardJours(0);
        }
    }

    private void applyRetard(SousTache sousTache, StatutTache nouveauStatut) {
        if (sousTache.getDateFin() == null) {
            sousTache.setRetardJours(0);
            return;
        }
        if (nouveauStatut == StatutTache.TERMINEE && LocalDate.now().isAfter(sousTache.getDateFin())) {
            sousTache.setRetardJours((int) ChronoUnit.DAYS.between(sousTache.getDateFin(), LocalDate.now()));
        } else if (nouveauStatut != StatutTache.TERMINEE && LocalDate.now().isAfter(sousTache.getDateFin())) {
            if (canAutoSwitchToLateStatus(nouveauStatut)) {
                sousTache.setStatutSousTache(StatutTache.EN_RETARD);
            }
            sousTache.setRetardJours((int) ChronoUnit.DAYS.between(sousTache.getDateFin(), LocalDate.now()));
        } else {
            sousTache.setRetardJours(0);
        }
    }

    private void refreshRetardsProjet(Long projetId) {
        for (Tache tache : tacheRepository.findByProjetId(projetId)) {
            StatutTache initial = tache.getStatutTache();
            int retardInitial = tache.getRetardJours();
            applyRetard(tache, tache.getStatutTache());

            if (initial != tache.getStatutTache() || retardInitial != tache.getRetardJours()) {
                tache.setDateMiseAJour(LocalDateTime.now());
                tacheRepository.save(tache);
            }

            refreshRetardsTache(tache.getId());
        }
    }

    private void refreshRetardsTache(Long tacheId) {
        for (SousTache sousTache : sousTacheRepository.findByTacheId(tacheId)) {
            StatutTache initial = sousTache.getStatutSousTache();
            int retardInitial = sousTache.getRetardJours();
            applyRetard(sousTache, sousTache.getStatutSousTache());

            if (initial != sousTache.getStatutSousTache() || retardInitial != sousTache.getRetardJours()) {
                sousTache.setDateMiseAJour(LocalDateTime.now());
                sousTacheRepository.save(sousTache);
            }
        }
    }

    private Tache synchronizeParentTaskStatus(Long tacheId) {
        Tache tache = tacheRepository.findById(tacheId)
                .orElseThrow(() -> new BusinessException("Tache introuvable"));

        List<SousTache> sousTaches = sousTacheRepository.findByTacheId(tacheId);
        if (sousTaches.isEmpty()) {
            return tache;
        }

        boolean allTerminees = sousTaches.stream().allMatch(st -> st.getStatutSousTache() == StatutTache.TERMINEE);
        boolean hasCorrectionRequested = sousTaches.stream().anyMatch(st -> st.getStatutSousTache() == StatutTache.A_CORRIGER);
        boolean hasCorrectionSubmitted = sousTaches.stream().anyMatch(st -> st.getStatutSousTache() == StatutTache.EN_CORRECTION);
        boolean allPending = sousTaches.stream().allMatch(st -> st.getStatutSousTache() == StatutTache.A_FAIRE);

        if (allTerminees) {
            tache.setStatutTache(StatutTache.TERMINEE);
        } else if (hasCorrectionRequested) {
            tache.setStatutTache(StatutTache.A_CORRIGER);
        } else if (hasCorrectionSubmitted) {
            tache.setStatutTache(StatutTache.EN_CORRECTION);
        } else if (allPending) {
            tache.setStatutTache(StatutTache.A_FAIRE);
        } else {
            tache.setStatutTache(StatutTache.EN_COURS);
        }

        applyRetard(tache, tache.getStatutTache());
        tache.setDateMiseAJour(LocalDateTime.now());
        return tacheRepository.save(tache);
    }

    private void markProjetEnCorrectionEtEnCours(Long projetId) {
        Projet projet = projetRepository.findById(projetId)
                .orElseThrow(() -> new BusinessException("Projet introuvable"));

        projet.setEtatValidation(EtatValidationProjet.A_CORRIGER);
        projet.setStatutProjet(StatutProjet.EN_COURS);
        projet.setDateDerniereMiseAJour(LocalDateTime.now());
        projetRepository.save(projet);
    }

    private void synchronizeProjetValidationFromTasks(Long projetId) {
        Projet projet = projetRepository.findById(projetId)
                .orElseThrow(() -> new BusinessException("Projet introuvable"));

        List<Tache> taches = tacheRepository.findByProjetId(projetId);
        if (taches.isEmpty()) {
            return;
        }

        boolean hasCorrectionRequested = taches.stream().anyMatch(t -> t.getStatutTache() == StatutTache.A_CORRIGER);
        boolean allTerminees = taches.stream().allMatch(t -> t.getStatutTache() == StatutTache.TERMINEE);

        if (hasCorrectionRequested) {
            projet.setEtatValidation(EtatValidationProjet.A_CORRIGER);
            projet.setStatutProjet(StatutProjet.EN_COURS);
            projet.setDateDerniereMiseAJour(LocalDateTime.now());
            projetRepository.save(projet);
            return;
        }

        if (allTerminees
                && projet.getEtatValidation() != EtatValidationProjet.VALIDE
                && projet.getEtatValidation() != EtatValidationProjet.REFUSE) {
            projet.setEtatValidation(EtatValidationProjet.EN_REVUE);
            projet.setDateDerniereMiseAJour(LocalDateTime.now());
            projetRepository.save(projet);
        }
    }

    private void validateTransitionTache(StatutTache current, StatutTache next, String commentaireCoach, String justificationEntrepreneur) {
        if (current == next) {
            return;
        }

        if (current == StatutTache.A_CORRIGER && next != StatutTache.EN_CORRECTION) {
            throw new BusinessException("Une tache en A_CORRIGER doit d'abord passer en EN_CORRECTION avant toute autre transition");
        }

        if (next == StatutTache.A_CORRIGER) {
            if (commentaireCoach == null || commentaireCoach.isBlank()) {
                throw new BusinessException("Commentaire coach obligatoire pour passer une tache en A_CORRIGER");
            }
            if (current != StatutTache.TERMINEE && current != StatutTache.EN_CORRECTION) {
                throw new BusinessException("Une tache peut passer en A_CORRIGER uniquement depuis TERMINEE ou EN_CORRECTION");
            }
        }

        if (next == StatutTache.EN_CORRECTION) {
            if (justificationEntrepreneur == null || justificationEntrepreneur.isBlank()) {
                throw new BusinessException("Justification entrepreneur obligatoire pour passer une tache en EN_CORRECTION");
            }
            if (current != StatutTache.A_CORRIGER) {
                throw new BusinessException("Une tache peut passer en EN_CORRECTION uniquement depuis A_CORRIGER");
            }
        }
    }

    private void validateTransitionSousTache(StatutTache current, StatutTache next, String commentaireCoach, String justificationEntrepreneur) {
        if (current == next) {
            return;
        }

        if (current == StatutTache.A_CORRIGER && next != StatutTache.EN_CORRECTION) {
            throw new BusinessException("Une sous-tache en A_CORRIGER doit d'abord passer en EN_CORRECTION avant toute autre transition");
        }

        if (next == StatutTache.A_CORRIGER) {
            if (commentaireCoach == null || commentaireCoach.isBlank()) {
                throw new BusinessException("Commentaire coach obligatoire pour passer une sous-tache en A_CORRIGER");
            }
            if (current != StatutTache.TERMINEE && current != StatutTache.EN_CORRECTION) {
                throw new BusinessException("Une sous-tache peut passer en A_CORRIGER uniquement depuis TERMINEE ou EN_CORRECTION");
            }
        }

        if (next == StatutTache.EN_CORRECTION) {
            if (justificationEntrepreneur == null || justificationEntrepreneur.isBlank()) {
                throw new BusinessException("Justification entrepreneur obligatoire pour passer une sous-tache en EN_CORRECTION");
            }
            if (current != StatutTache.A_CORRIGER) {
                throw new BusinessException("Une sous-tache peut passer en EN_CORRECTION uniquement depuis A_CORRIGER");
            }
        }
    }

    private boolean canAutoSwitchToLateStatus(StatutTache statut) {
        return statut == StatutTache.A_FAIRE
                || statut == StatutTache.EN_COURS
                || statut == StatutTache.BLOQUEE;
    }
}
