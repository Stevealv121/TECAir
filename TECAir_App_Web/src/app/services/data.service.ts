import { Injectable } from '@angular/core';
import { FlightI } from '../models/flight.interface';
import { UserI } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  public availableFlights: FlightI[];
  private _numberTravelers: number;
  user!: UserI;

  constructor() {
    this.availableFlights = [];
    this._numberTravelers = 0;
  }

  getNumberTravelers(): number {
    return this._numberTravelers;
  }
  setNumberTravelers(value: number) {
    this._numberTravelers = value;
  }

  setUser(data: UserI) {
    this.user = data;
  }

  getUser() {
    return this.user;
  }

}
