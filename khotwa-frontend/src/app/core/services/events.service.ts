import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Evenement, EvenementStatus } from '../models/evenement.model';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  private readonly apiUrl = '/khotwa/evenement';

  constructor(private http: HttpClient) {}

  // ─────────────── CRUD ───────────────
  getAll(): Observable<Evenement[]> {
    return this.http.get<Evenement[]>(`${this.apiUrl}/getAll`).pipe(catchError(this.handleError));
  }

  getById(id: number): Observable<Evenement> {
    return this.http.get<Evenement>(`${this.apiUrl}/get/${id}`).pipe(catchError(this.handleError));
  }

  create(evenement: any): Observable<Evenement> {
    return this.http.post<Evenement>(`${this.apiUrl}/add`, evenement).pipe(catchError(this.handleError));
  }

  update(id: number, evenement: any): Observable<Evenement> {
    return this.http.put<Evenement>(`${this.apiUrl}/update/${id}`, evenement).pipe(catchError(this.handleError));
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`).pipe(catchError(this.handleError));
  }

  // ─────────────── PARTICIPATION ───────────────
  participer(idEv: number, idUser: number): Observable<Evenement> {
    return this.http.post<Evenement>(`${this.apiUrl}/participer/${idEv}/${idUser}`, {}).pipe(catchError(this.handleError));
  }

  // ─────────────── STATUS ───────────────
  updateStatus(idEvenement: number, statut: string): Observable<void> {
    const params = new HttpParams().set('statut', statut);
    return this.http.put<void>(`${this.apiUrl}/update-status/${idEvenement}`, {}, { params })
      .pipe(catchError(this.handleError));
  }

  /** Alias utilisé par AdminEvenementsComponent */
  changeStatus(idEvenement: number, statut: EvenementStatus): Observable<void> {
    return this.updateStatus(idEvenement, statut);
  }

  // ─────────────── FILTRAGE PAR PLAN ───────────────
  getVisibleEventsByPlan(idUser: number): Observable<Evenement[]> {
    return this.http.get<Evenement[]>(`${this.apiUrl}/my-plan/${idUser}`).pipe(catchError(this.handleError));
  }

  getStrictEventsByPlan(idUser: number): Observable<Evenement[]> {
    return this.http.get<Evenement[]>(`${this.apiUrl}/my-plan/strict/${idUser}`).pipe(catchError(this.handleError));
  }

  // ─────────────── EVENTS FREE ───────────────
  getFreeEvents(): Observable<Evenement[]> {
    return this.http.get<Evenement[]>(`${this.apiUrl}/free/all`).pipe(catchError(this.handleError));
  }

  searchFreeEvents(month?: number | null, type?: string): Observable<Evenement[]> {
    let params = new HttpParams();
    if (month != null) params = params.set('month', month.toString());
    if (type && type !== 'ALL') params = params.set('type', type);
    return this.http.get<Evenement[]>(`${this.apiUrl}/freeEvenets/search`, { params })
      .pipe(catchError(this.handleError));
  }

  searchEventsByPlan(idUser: number, month?: number | null, type?: string): Observable<Evenement[]> {
    let params = new HttpParams();
    if (month != null) params = params.set('month', month.toString());
    if (type && type !== 'ALL') params = params.set('type', type);
    return this.http.get<Evenement[]>(`${this.apiUrl}/my-plan/${idUser}/search`, { params }).pipe(catchError(this.handleError));
  }

  // ─────────────── ADMIN EVENTS ───────────────
  getAdminEvents(): Observable<Evenement[]> {
    return this.http.get<Evenement[]>(`${this.apiUrl}/admin-events`).pipe(catchError(this.handleError));
  }

  // ─────────────── QR CODE MEET ───────────────
  // Appelé par le coach pour afficher le QR de son événement.
  // Le QR encode le lienMeet → l'entrepreneur scanne et rejoint directement.
  getMeetQrCode(idEvenement: number): Observable<{ qrCode: string; lienMeet: string; titre: string }> {
    return this.http.get<{ qrCode: string; lienMeet: string; titre: string }>(
      `${this.apiUrl}/${idEvenement}/qr-meet`
    ).pipe(catchError(this.handleError));
  }

  

  // ─────────────── IA - GÉNÉRATION AUTOMATIQUE ───────────────
  generateAiEvent(): Observable<Evenement> {
    return this.http.post<Evenement>(`${this.apiUrl}/ai/generate`, {})
      .pipe(catchError(this.handleError));
  }

  getTopEventsStats(): Observable<{ id: number; titre: string; type: string; participants: number; placesTotal: number; tauxRemplissage: number }[]> {
    return this.http.get<any[]>(`${this.apiUrl}/ai/top-stats`)
      .pipe(catchError(this.handleError));
  }

  // ─────────────── REPORT ───────────────
  generateActivityReport(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/activity-report`).pipe(catchError(this.handleError));
  }

  // ─────────────── HANDLE ERROR ───────────────
  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => new Error(error.message || 'Server Error'));
  }


  
}
