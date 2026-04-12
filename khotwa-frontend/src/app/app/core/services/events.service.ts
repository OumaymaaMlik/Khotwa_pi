import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Evenement } from '../models/evenement.model';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  private readonly apiUrl = 'http://localhost:8084/khotwa/evenement';

  constructor(private http: HttpClient) {}

  // ─────────────── CRUD ───────────────
  getAll(): Observable<Evenement[]> {
    return this.http.get<Evenement[]>(`${this.apiUrl}/getAll`).pipe(catchError(this.handleError));
  }

  getById(id: number): Observable<Evenement> {
    return this.http.get<Evenement>(`${this.apiUrl}/get/${id}`).pipe(catchError(this.handleError));
  }

  create(evenement: Evenement): Observable<Evenement> {
    return this.http.post<Evenement>(`${this.apiUrl}/add`, evenement).pipe(catchError(this.handleError));
  }

  update(id: number, evenement: Evenement): Observable<Evenement> {
    return this.http.put<Evenement>(`${this.apiUrl}/update/${id}`, evenement).pipe(catchError(this.handleError));
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`).pipe(catchError(this.handleError));
  }

  // ─────────────── PARTICIPATION ───────────────
  participer(idEv: number, idUser: number): Observable<Evenement> {
    return this.http.post<Evenement>(`${this.apiUrl}/participer/${idEv}/${idUser}`, {}).pipe(catchError(this.handleError));
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

  // ✅ FIX: "/freeEvenets/search" correspond au controller Spring
  return this.http.get<Evenement[]>(`${this.apiUrl}/freeEvenets/search`, { params })
    .pipe(catchError(this.handleError));
}

updateStatus(idEvenement: number, statut: string): Observable<void> {
  // ✅ FIX: params query string au lieu de body vide
  const params = new HttpParams().set('statut', statut);
  return this.http.put<void>(`${this.apiUrl}/update-status/${idEvenement}`, {}, { params })
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

  // ─────────────── HANDLE ERROR ───────────────
  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(() => new Error(error.message || 'Server Error'));
  }
}