// src/app/core/models/Reservations.model.ts
import { Evenement } from './evenement.model';

export type ReservationStatus = 'CONFIRMED' | 'CANCELLED' | 'PENDING' | 'WAITLIST' | 'ATTENDED';
export type MyEventsTab = 'UPCOMING' | 'PAST' | 'CANCELLED' | 'PENDING';

export interface Reservation {
  idReservation:    number;
  idEvenement:      number;
  dateReservation:  string;
  status:           ReservationStatus;
  idUser:           number;
  evenement:        Evenement;
  waitlistPosition: number | null;
  qrToken:          string | null;
  attendedAt:       string | null;
}

/**
 * DTO retourné par GET /reservation/my-events
 * L'événement est embarqué à plat (pas de relation circulaire JSON).
 */
export interface ReservationHistoryDto {
  idReservation:    number;
  dateReservation:  string;
  status:           ReservationStatus;
  waitlistPosition: number | null;
  qrToken:          string | null;
  attendedAt:       string | null;

  // Événement embarqué
  idEvenement:      number;
  titre:            string;
  description:      string;
  date:             string;   // LocalDate → 'yyyy-MM-dd'
  heure:            string;   // LocalTime → 'HH:mm:ss'
  intervenant:      string;
  lienMeet:         string | null;
  placesTotal:      number;
  placesRestantes:  number;
  type:             string;
  planType:         string;
  statut:           string;
}

export interface BookingResponse {
  status:      ReservationStatus;
  reservation: Reservation;
  message:     string;
}

export interface QrScanResponse {
  success:     boolean;
  message:     string;
  user:        string;
  event:       string;
  attendedAt?: string;
}