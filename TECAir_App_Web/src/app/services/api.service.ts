import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { LoginI } from '../models/login.interface';
import { ResponseI } from '../models/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserI } from '../models/user.interface';
import { SimpPromotion } from '../models/simp-promotion';
import { AppliesTo } from '../models/applies-to';
import { FlightPost } from '../models/flight-post';
import { Scales } from '../models/scales';
import { BaggageModel } from '../models/baggage-model';
import { Has } from '../models/has';

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
  flightPromoPath: string = this.url+ "AppliesTo/PromotionandAppliesTo/";
  deletePromoPath: string = this.url+"AppliesTo/";
  promotionPath: string = this.url + "Promotion";
  applyToPath:string =this.url + "AppliesTo";
  passengersPath:string = this.url + "Flight/Users/";
  flightBaggagePath:string = this.url + "Flight/Baggage/";
  booksPath:string = this.url + "Books/";
  flightPostPath:string = this.url + "Flight";
  baggagePath:string = this.url + "Baggage";
  haspath:string = this.url +"Has";


  constructor(private http: HttpClient) { }

  //post
  loginByEmail(form: LoginI): Observable<ResponseI> {
    return this.http.post<ResponseI>(this.userPath, form)

  }
  signUp(form: UserI): Observable<ResponseI> {
    return this.http.post<ResponseI>(this.userPath, form)
  }
  postPromo(form: SimpPromotion){
    return this.http.post<SimpPromotion>(this.promotionPath,form);
  }
  postAppliesTo(form: AppliesTo){
    return this.http.post<AppliesTo>(this.applyToPath,form);
  }
  postFlight(form: FlightPost){
    return this.http.post<FlightPost>(this.flightPostPath,form);
  }
  postScale(form: Scales){
    return this.http.post<Scales>(this.scalesPath,form);
  }
  postBaggage(form: BaggageModel){
    return this.http.post<BaggageModel>(this.baggagePath,form);
  }
  postHas(form:Has){
    return this.http.post<Has>(this.haspath,form);
  }
  //gets

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

  getBaggage(){
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

    return this.http.get<string>(this.baggagePath, requestOptions);
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

  getUsers(){
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

    return this.http.get<string>(this.userPath, requestOptions);
  }

  getFlightPromo(id: number){
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

    return this.http.get<string>(this.flightPromoPath+ id, requestOptions);
  }
  getFlightPassengers(id: number){
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

    return this.http.get<string>(this.passengersPath+ id, requestOptions);
  }
  getFlightBaggage(id: number){
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

    return this.http.get<string>(this.flightBaggagePath+ id, requestOptions);
  }

  // Deletes
  deleteFlightPromo(id: number){
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

    return this.http.delete<string>(this.deletePromoPath + id,requestOptions);
  }
  deleteFlightPassenger(id: number){
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

    return this.http.delete<string>(this.booksPath + id,requestOptions);
  }
  deleteBaggage(id: number){
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

    return this.http.delete<string>(this.baggagePath + "/"+id,requestOptions);
  }
}

