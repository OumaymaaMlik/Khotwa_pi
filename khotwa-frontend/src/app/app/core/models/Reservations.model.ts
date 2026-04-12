// src/app/models/Reservations.model.ts
import { User } from './user.model';
import { Evenement } from './evenement.model';

export type ReservationStatus = 'CONFIRMED' | 'CANCELLED' | 'PENDING';

export interface Reservation {
  idReservation: number;   
  idEvenement:  number;   
  dateReservation: string;      
  status: ReservationStatus;   
  idUser:       number;                
  evenement: Evenement;         
}