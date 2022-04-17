import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  flightId : number;

  constructor() {
    this.flightId = 0;
   }

  setFlightId(id: number){
    this.flightId = id
  }
  getFlightId(){
    return this.flightId;
  }
}
