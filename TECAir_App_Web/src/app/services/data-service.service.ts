import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  flightId : number;
  routeId: number;
  flightInfo: string[];

  constructor() {
    this.flightId = 0;
    this.routeId =0;
    this.flightInfo =[];
   }

  setFlightId(id: number){
    this.flightId = id
  }
  getFlightId(){
    return this.flightId;
  }
  setFlightInfo(info: string[]){
    this.flightInfo = info;
  }
  getFlightInfo(){
    return this.flightInfo;
  }
  getRouteId(){
    return this.routeId;
  }
  setRouteId(id:number){
    this.routeId = id;
  }
}
