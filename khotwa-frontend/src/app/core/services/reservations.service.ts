import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from '../models/Reservations.model';

@Injectable({ providedIn: 'root' })
export class ReservationService {

  private apiUrl = 'http://localhost:8084/khotwa/reservation';

  constructor(private http: HttpClient) {}

  // ✅ FIX : backend attend /add/{idUser}/{idEvenement} (path vars, pas query params)
  addReservation(idUser: number, idEvenement: number): Observable<Reservation> {
    return this.http.post<Reservation>(
      `${this.apiUrl}/add/${idUser}/${idEvenement}`, {}
    );
  }

  // ✅ FIX : backend retourne void, pas Reservation
  cancelReservation(idReservation: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/cancel/${idReservation}`, {});
  }

  getReservationsByUser(idUser: number): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}/user/${idUser}`);
  }

  getReservationsByEvent(idEvenement: number): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}/event/${idEvenement}`);
  }

  getAllReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}/all`);
  }

  // reservation.service.ts

cancelReservationByEvent(idUser: number, idEvenement: number): Observable<void> {
  return this.http.put<void>(
    `${this.apiUrl}/cancelByuserandEvenet/user/${idUser}/event/${idEvenement}`, 
    {}
  );
}
}