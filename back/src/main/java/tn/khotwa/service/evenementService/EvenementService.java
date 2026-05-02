package tn.khotwa.service.evenementService;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;
import tn.khotwa.entity.evenement.Evenement;
import tn.khotwa.entity.user.User;
import tn.khotwa.entity.evenement.Reservation;
import tn.khotwa.enums.eventsEnums.EvenementStatus;
import tn.khotwa.enums.eventsEnums.EvenementType;

import tn.khotwa.enums.PlanType;
import tn.khotwa.enums.user.Role;
import tn.khotwa.repository.evenementRepo.EvenementRepository;
import tn.khotwa.repository.evenementRepo.ReservationRepository;
import tn.khotwa.repository.user.UserRepository;


import java.util.List;
@Service

public class EvenementService implements IEvenementService {
    @Autowired
    private EvenementRepository evenementRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ReservationRepository reservationRepository;

    @Override
    public Evenement addEvenement(Evenement evenement) {

        if (evenement.getDate() == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "La date de l’événement est obligatoire.");
        }
        if (!evenement.getDate().isAfter(java.time.LocalDate.now())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "La date de l’événement doit être postérieure à aujourd’hui.");
        }
        if (evenement.getPlacesRestantes() == 0) {
            evenement.setPlacesRestantes(evenement.getPlacesTotal());
        }
        evenement.setLienMeet(normalizeMeetUrl(evenement.getLienMeet()));

        // Les événements (manuels ou générés par l’IA) démarrent toujours en PENDING
        if (evenement.getStatut() == null) {
            evenement.setStatut(EvenementStatus.PENDING);
        }

        return evenementRepository.save(evenement);
    }

    private String normalizeMeetUrl(String url) {
        if (url == null || url.isBlank()) return url;
        if (!url.startsWith("http://") && !url.startsWith("https://")) {
            return "https://" + url;
        }
        return url;
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
                    "La date de l'événement est obligatoire.");
        }
        if (!newEvenement.getDate().isAfter(java.time.LocalDate.now())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "La date de l'événement doit être postérieure à aujourd'hui.");
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
        existing.setLienMeet(normalizeMeetUrl(existing.getLienMeet()));
        existing.setType(newEvenement.getType());
        existing.setPlanType(newEvenement.getPlanType());

        existing.setPlacesTotal(newEvenement.getPlacesTotal());
        existing.setPlacesRestantes(existing.getPlacesTotal() - placesOccupees);

        return evenementRepository.save(existing);
    }


    @Override
    @Transactional
    public void deleteEvenement(Long idEvenement) {
        Evenement ev = evenementRepository.findById(idEvenement)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Evenement non trouvé"));

        List<Reservation> reservations = reservationRepository.findByEvenement(ev);
        reservationRepository.deleteAll(reservations);

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
    @Transactional(readOnly = true)
    public List<Evenement> findAllEvenements() {
        return evenementRepository.findAllWithDetails();
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

        PlanType plan = user.getPlanType() != null ? user.getPlanType() : PlanType.FREE;
        return evenementRepository.findVisibleForUser(plan);
    }

    public List<Evenement> getStrictEventsForUser(Long idUser) {
        User user = userRepository.findById(idUser)
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));

        PlanType plan = user.getPlanType() != null ? user.getPlanType() : PlanType.FREE;
        return evenementRepository.findByPlanTypeAndStatut(plan, EvenementStatus.ACCEPTED);
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