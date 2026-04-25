package tn.khotwa.service.EvenementService;

import tn.khotwa.entity.evenement.Evenement;
import tn.khotwa.enums.EventsEnums.EvenementStatus;


import java.util.List;

public interface IEvenementService {
    Evenement addEvenement(Evenement evenement);
    Evenement updateEvenement(Long idEvenement, Evenement evenement);
    void deleteEvenement(Long idEvenement);
    List<Evenement> findAllEvenements();
    Evenement findEvenementById(Long idEvenement);
    Evenement addParticipant(Long idEvenement, long idUser);
    void changeStatus(Long idEvenement, EvenementStatus statut) ;
    List<Evenement> findAdminEvents();
    List<Evenement> getVisibleEventsForUser(Long idUser);
    List<Evenement> getStrictEventsForUser(Long idUser) ;
    List<Evenement> getAllFreeEvents();
    List<Evenement> searchFreeEvents(Integer month, String typeStr);
}
