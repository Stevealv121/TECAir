import { Injectable } from '@angular/core';
import { FlightI } from '../models/flight.interface';
import { StopOver } from '../models/stopOver';
import { UserI } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  public availableFlights: FlightI[];
  private _numberTravelers: number;
  user!: UserI;
  iDflightSelected!: number;
  stopOvers: StopOver[] = [];
  flightNumber!: string;
  selectedAirplane!: string;
  date!: string;
  origin!: string;
  destination!: string;
  numberOfStops: number = 0;
  //seatID

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
