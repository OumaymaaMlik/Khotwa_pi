package tn.khotwa.service.EvenementService;

import tn.khotwa.dto.Evenement.Reservationhistorydto;

import tn.khotwa.entity.evenement.Reservation;

import tn.khotwa.enums.EventsEnums.ReservationsStatus;

import java.util.List;

import java.util.Map;

public interface IReservationService {

    // ── Réservation de base ───────────────────────────────────────────────────

    Reservation addReservation(Long userId, Long eventId);

    void cancelReservation(Long reservationId);

    void cancelByUserAndEvent(Long idUser, Long idEvenement);

    // ── Lecture ───────────────────────────────────────────────────────────────

    List<Reservation> getReservationsByUser(Long userId);

    List<Reservation> getReservationsByEvent(Long eventId);

    List<Reservation> getAllReservations();

    // ── Historique entrepreneur (DTO avec événement embarqué + filtre onglet) ─

    /**

     * Retourne l'historique complet des réservations d'un utilisateur

     * avec l'événement déjà embarqué dans le DTO.

     * Le paramètre tab filtre côté serveur :

     *   UPCOMING  → à venir, non annulés, non PENDING

     *   PAST      → passés (date < now) ou ATTENDED, non annulés

     *   CANCELLED → statut CANCELLED ou événement CANCELLED

     *   PENDING   → statut PENDING

     *   ALL       → tout (pas de filtre)

     */

    List<Reservationhistorydto> getMyEventsHistory(Long userId, String tab);

    // ── Liste d'attente ───────────────────────────────────────────────────────

    List<Reservation> getWaitlistByEvent(Long eventId);

    // ── QR Code présence ─────────────────────────────────────────────────────

    Map<String, String> generateQrCode(Long reservationId);

    Map<String, Object> scanQrCode(String qrToken);

}