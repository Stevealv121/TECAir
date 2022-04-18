import { Injectable } from '@angular/core';
import { FlightI } from '../models/flight.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public availableFlights: FlightI[];

  constructor() {
    this.availableFlights = [];
  }
}
