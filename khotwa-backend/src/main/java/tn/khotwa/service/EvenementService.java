package tn.khotwa.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import tn.khotwa.entity.Evenement;
import tn.khotwa.entity.User;
import tn.khotwa.enums.EvenementStatus;
import tn.khotwa.enums.EvenementType;
import tn.khotwa.enums.Role;
import tn.khotwa.repository.EvenementRepository;
import tn.khotwa.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;
@Service

public class EvenementService implements IEvenementService {
    @Autowired
    private EvenementRepository evenementRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public Evenement addEvenement(Evenement evenement) {
        /*if (evenement.getCreator() == null || evenement.getCreator().getIdUser() == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "Le créateur de l'événement est obligatoire");
        }

        if (evenement.getPlacesTotal() <= 0) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "Le nombre de places doit être supérieur à 0");
        }

        // 2. Récupération du créateur
        User creator = userRepository.findById(evenement.getCreator().getIdUser())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                        "Créateur non trouvé"));

        // 3. Vérifier que c’est un ADMIN
        if (creator.getRole() != Role.ADMIN) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN,
                    "Seul un ADMIN peut créer des événements");
        }

        // 4. Initialisation des champs automatiques
        evenement.setCreator(creator);
        evenement.setPlacesRestantes(evenement.getPlacesTotal());
        evenement.setStatut(EvenementStatus.PENDING); //
        if (evenement.getDate() == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Date obligatoire");
        }// ✅ IMPORTANT

        // 5. Sauvegarde
        return evenementRepository.save(evenement);
    }*/
            // Si tu veux initialiser certaines valeurs avant de sauvegarder
            if (evenement.getPlacesRestantes() == 0) {
                evenement.setPlacesRestantes(evenement.getPlacesTotal());
            }

            return evenementRepository.save(evenement);
        }

    @Override
    public Evenement updateEvenement(Long idEvenement, Evenement newEvenement) {

        Evenement existing = evenementRepository.findById(idEvenement)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Evenement non trouvé"));

        if (newEvenement.getPlacesTotal() <= 0) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "Le nombre de places doit être supérieur à 0");
        }

        if (newEvenement.getDate() == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "Date obligatoire");
        }


        int placesOccupees = existing.getPlacesTotal() - existing.getPlacesRestantes();

        if (newEvenement.getPlacesTotal() < placesOccupees) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "Impossible : " + placesOccupees + " places déjà occupées");
        }

        existing.setTitre(newEvenement.getTitre());
        existing.setDescription(newEvenement.getDescription());
        existing.setDate(newEvenement.getDate());
        existing.setHeure(newEvenement.getHeure());
        existing.setIntervenant(newEvenement.getIntervenant());
        existing.setLienMeet(newEvenement.getLienMeet());
        existing.setType(newEvenement.getType());
        existing.setPlanType(newEvenement.getPlanType());

        existing.setPlacesTotal(newEvenement.getPlacesTotal());
        existing.setPlacesRestantes(existing.getPlacesTotal() - placesOccupees);

        return evenementRepository.save(existing);
    }

    @Override
    public void deleteEvenement(Long idEvenement) {
        Evenement ev = evenementRepository.findById(idEvenement)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Evenement non trouvé"));
        ev.getParticipants().clear();
        evenementRepository.save(ev);
        evenementRepository.deleteById(idEvenement);
    }

    @Override
    public Evenement findEvenementById(Long idEvenement) {
        return evenementRepository.findById(idEvenement)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Evenement non trouvé"));
    }

    @Override
    public List<Evenement> findAllEvenements() {
        return evenementRepository.findAll();
    }

    @Override
    public Evenement addParticipant(Long idEvenement, long idUser) {

        Evenement ev = evenementRepository.findById(idEvenement)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Événement introuvable"));

        User user = userRepository.findById(idUser)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Utilisateur introuvable"));

        if (user.getRole() == Role.ADMIN) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "ADMIN ne peut pas participer");
        }

        if (ev.getStatut() != EvenementStatus.ACCEPTED) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Événement non accepté");
        }

        if (ev.getParticipants().contains(user)) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Déjà inscrit");
        }

        if (ev.getPlacesRestantes() <= 0) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Plus de places disponibles");
        }

        ev.getParticipants().add(user);
        ev.setPlacesRestantes(ev.getPlacesRestantes() - 1);

        return evenementRepository.save(ev);
    }
    public void changeStatus(Long idEvenement, EvenementStatus statut) {
        Evenement ev = evenementRepository.findById(idEvenement)
                .orElseThrow(() -> new RuntimeException("Événement introuvable"));

        ev.setStatut(statut);
        evenementRepository.save(ev);
    }

    @Override
    public List<Evenement> findAdminEvents() {
        return evenementRepository.findEventsByAdminRole();
    }
    public List<Evenement> getVisibleEventsForUser(Long idUser) {
        User user = userRepository.findById(idUser)
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));

        return evenementRepository.findVisibleForUser(user.getPlanType());
    }

    public List<Evenement> getStrictEventsForUser(Long idUser) {
        User user = userRepository.findById(idUser).orElseThrow();
        return evenementRepository.findByPlanTypeAndStatut(user.getPlanType(), EvenementStatus.ACCEPTED
        );
    }

    public List<Evenement> getAllFreeEvents() {
        return evenementRepository.findAllFreeEvents();
    }


    public List<Evenement> searchFreeEvents(Integer month, String typeStr) {
        EvenementType type = null;

        try {
            if (typeStr != null && !typeStr.equalsIgnoreCase("ALL")) {
                type = EvenementType.valueOf(typeStr.toUpperCase());
            }
        } catch (IllegalArgumentException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Type invalide");
        }

        return evenementRepository.findFreeEventsByCriteria(month, type);
    }

}
