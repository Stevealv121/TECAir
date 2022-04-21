import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { LoginI } from '../models/login.interface';
import { ResponseI } from '../models/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserI } from '../models/user.interface';
import { Flight } from '../models/flight';
import { FlightI } from '../models/flight.interface';
import { PromotionI } from '../models/promotion.interface';
import { SeatI } from '../models/seat.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = "http://localhost:5104/api/";
  userPath: string = this.url + "User";
  flightPath: string = this.url + "Flight/FlightsandRoutes";
  airplanePath: string = this.url + "Airplane";
  routesPath: string = this.url + "Route";
  scalesPath: string = this.url + "Flight_Stopover/";

  constructor(private http: HttpClient) { }

  loginByEmail(email: string, password: string): Observable<UserI> {

    let loginPath = this.userPath + "/" + email + "/" + password;
    return this.http.get<UserI>(loginPath)

  }

  signUp(form: UserI): Observable<ResponseI> {
    return this.http.post<ResponseI>(this.userPath, form)
  }

  searchFlights(origin: string, destination: string): Observable<FlightI[]> {
    let flightPath = this.url + "Flight/" + origin + "/" + destination;
    return this.http.get<FlightI[]>(flightPath)
  }

  getPromotions(): Observable<PromotionI[]> {
    let dealsPath = this.url + "Promotion";
    return this.http.get<PromotionI[]>(dealsPath)
  }

  getSeats(): Observable<SeatI[]> {
    let seatPath = this.url + "Seat";
    return this.http.get<SeatI[]>(seatPath)

  }

  getFlights(){
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this.http.get<string>(this.flightPath, requestOptions);
  }

  getAirplanes(){
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this.http.get<string>(this.airplanePath, requestOptions);

  }

  getRoutes(){
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this.http.get<string>(this.routesPath, requestOptions);
  }

  getScales(id:number){
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this.http.get<string>(this.scalesPath+ id, requestOptions);
  }

}
