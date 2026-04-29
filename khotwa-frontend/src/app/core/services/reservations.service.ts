// src/app/core/services/reservations.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  Reservation,
  ReservationHistoryDto,
  BookingResponse,
  QrScanResponse,
  MyEventsTab
} from '../models/Reservations.model';

@Injectable({ providedIn: 'root' })
export class ReservationService {

  private apiUrl = '/khotwa/reservation';

  constructor(private http: HttpClient) {}

  // ── Réservation ────────────────────────────────────────────────────────────
  addReservation(idUser: number, idEvenement: number): Observable<BookingResponse> {
    return this.http.post<BookingResponse>(`${this.apiUrl}/add/${idUser}/${idEvenement}`, {});
  }

  cancelReservation(idReservation: number): Observable<{ message: string }> {
    return this.http.put<{ message: string }>(`${this.apiUrl}/cancel/${idReservation}`, {});
  }

  cancelReservationByEvent(idUser: number, idEvenement: number): Observable<{ message: string }> {
    return this.http.put<{ message: string }>(
      `${this.apiUrl}/cancel/user/${idUser}/event/${idEvenement}`, {}
    );
  }

  // ── Historique Mes Événements ──────────────────────────────────────────────
  /**
   * GET /reservation/my-events?userId=X&tab=Y
   * Retourne des DTOs avec l'événement embarqué.
   * tab : UPCOMING | PAST | CANCELLED | PENDING | ALL (défaut ALL)
   */
  getMyEventsHistory(
    userId: number,
    tab: MyEventsTab | 'ALL' = 'ALL'
  ): Observable<ReservationHistoryDto[]> {
    const params = new HttpParams()
      .set('userId', userId.toString())
      .set('tab', tab);
    return this.http.get<ReservationHistoryDto[]>(`${this.apiUrl}/my-events`, { params });
  }

  // ── Lectures ───────────────────────────────────────────────────────────────
  getReservationsByUser(idUser: number): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}/user/${idUser}`);
  }

  getReservationsByEvent(idEvenement: number): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}/event/${idEvenement}`);
  }

  getAllReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}/all`);
  }

  getWaitlistByEvent(idEvenement: number): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}/waitlist/event/${idEvenement}`);
  }

  // ── QR Code ────────────────────────────────────────────────────────────────
  getQrCode(idReservation: number): Observable<{ qrCode: string; lienMeet: string; titre: string }> {
    return this.http.get<{ qrCode: string; lienMeet: string; titre: string }>(
      `${this.apiUrl}/qr/${idReservation}`
    );
  }

  scanQrCode(qrToken: string): Observable<QrScanResponse> {
    return this.http.post<QrScanResponse>(`${this.apiUrl}/scan`, { qrToken });
  }
}
