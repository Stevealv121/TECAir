import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { LoginI } from '../models/login.interface';
import { ResponseI } from '../models/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserI } from '../models/user.interface';
import { SimpPromotion } from '../models/simp-promotion';
import { AppliesTo } from '../models/applies-to';
import { FlightPost } from '../models/flight-post';
import { BaggageModel } from '../models/baggage-model';
import { Has } from '../models/has';
import { Flight } from '../models/flight';
import { FlightI } from '../models/flight.interface';
import { PromotionI } from '../models/promotion.interface';
import { SeatI } from '../models/seat.interface';
import { Routes } from '../models/routes';
import { Scales } from '../models/scales';
import { Airplane } from '../models/airplane';
//import { StopOverI } from '../models/stopOver.interface';
import { StopOver } from '../models/stopOver';
import { Promotion } from '../models/promotion';
import { Book } from '../models/book';
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
  flightPromoPath: string = this.url + "AppliesTo/PromotionandAppliesTo/";
  deletePromoPath: string = this.url + "AppliesTo/";
  promotionPath: string = this.url + "Promotion";
  applyToPath: string = this.url + "AppliesTo";
  passengersPath: string = this.url + "Flight/Users/";
  flightBaggagePath: string = this.url + "Flight/Baggage/";
  booksPath: string = this.url + "Books/";
  flightPostPath: string = this.url + "Flight";
  baggagePath: string = this.url + "Baggage";
  haspath: string = this.url + "Has";
  bookpath: string = this.url + "Books";


  constructor(private http: HttpClient) { }

  loginByEmail(email: string, password: string): Observable<UserI> {

    let loginPath = this.userPath + "/" + email + "/" + password;
    return this.http.get<UserI>(loginPath)

  }
  signUp(form: UserI): Observable<ResponseI> {
    return this.http.post<ResponseI>(this.userPath, form)
  }
  /**
   * Send to the api a new promo to post
   * @param form promo information
   * @returns Api response
   */
  postPromo(form: SimpPromotion) {
    return this.http.post<SimpPromotion>(this.promotionPath, form);
  }
  /**
   * Send to the api a new applies to post
   * @param form applies information
   * @returns Api response
   */
  postAppliesTo(form: AppliesTo) {
    return this.http.post<AppliesTo>(this.applyToPath, form);
  }
  /**
   * Send to the api a new Flight to post
   * @param form flight information
   * @returns Api response
   */
  postFlight(form: FlightPost) {
    return this.http.post<FlightPost>(this.flightPostPath, form);
  }
  /**
   * Send to the api a new scale to post
   * @param form scale information
   * @returns Api response
   */
  postScale(form: Scales) {
    return this.http.post<Scales>(this.scalesPath, form);
  }
  /**
   * Send to the api a new Baggge to post
   * @param form baggage information
   * @returns Api response
   */
  postBaggage(form: BaggageModel) {
    return this.http.post<BaggageModel>(this.baggagePath, form);
  }
  /**
   * Send to the api a new has to post
   * @param form has information
   * @returns Api response
   */
  postHas(form: Has) {
    return this.http.post<Has>(this.haspath, form);
  }
  /**
   * Send to the api a new route to post
   * @param form route information
   * @returns Api response
   */
  postRoute(form: Routes) {
    return this.http.post<Routes>(this.routesPath, form);
  }
  UpdateSeat(seat: SeatI) {
    let seatPath = this.url + "Seat";
    return this.http.put<SeatI>(seatPath, seat)
  }
  /**
   * Send to the api a new books to post
   * @param form books information
   * @returns Api response
   */
  Book(form:Book){
    return this.http.post<Book>(this.bookpath,form)
  }
  //gets

  searchFlights(origin: string, destination: string): Observable<FlightI[]> {
    let flightPath = this.url + "Flight/" + "FlightRouteAirplane/" + origin + "/" + destination;
    return this.http.get<FlightI[]>(flightPath)
  }

  getPromotions(): Observable<PromotionI[]> {
    let dealsPath = this.url + "Promotion";
    return this.http.get<PromotionI[]>(dealsPath)
  }
  getAppliesTo(promo_code: number): Observable<string[]> {
    let p = this.applyToPath + "/" + promo_code;
    return this.http.get<string[]>(p);
  }
  getAppliesToByFlightID(flight_id: string): Observable<string[]> {
    let p = this.url + "AppliesTo/PromotionandAppliesTo/" + flight_id;
    //let p = this.url + "AppliesTo/PromotionandAppliesTo/3"
    return this.http.get<string[]>(p);
  }

  getSeats(plate: string): Observable<SeatI[]> {
    let seatPath = this.url + "Seat/Plate/" + plate;
    return this.http.get<SeatI[]>(seatPath)
  }

  selectFlight(id: string): Observable<Flight> {
    let flightPath = this.url + "Flight/" + id;
    return this.http.get<Flight>(flightPath)
  }

  retrieveRoutes(route_code: string): Observable<Routes> {
    let routePath = this.url + "Route/" + route_code;
    return this.http.get<Routes>(routePath)
  }

  getStopOvers(flight_Id: string): Observable<string[]> {
    let scalesPath = this.url + "Flight_Stopover/" + flight_Id;
    return this.http.get<string[]>(scalesPath);
  }

  getAirplane(airplane_plate: string): Observable<Airplane> {
    let airplanePath = this.url + "Airplane/" + airplane_plate;
    return this.http.get<Airplane>(airplanePath)
  }
  /**
   * Asks the API for the flights in the data base
   * @returns flight in the data Base
   */
  getFlights() {
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
  /**
   * Asks the API for the flight's capacity according to the id in the data base
   * @returns capacity in the data Base
   */
  getFlightCapacity(id: number) {
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

    return this.http.get<string>(this.flightPostPath + "/Capacity/" + id, requestOptions);
  }

  /**
   * Asks the API for the baggage in the data base
   * @returns baggage in the data Base
   */
  getBaggage() {
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
  /**
   * Asks the API for the airplanes in the data base
   * @returns airplane in the data Base
   */
  getAirplanes() {
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
  /**
   * Asks the API for the routes in the data base
   * @returns routes in the data Base
   */
  getRoutes() {
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
  /**
   * Asks the API for the route, according its id, in the data base
   * @param id number of the route
   * @returns route in the data Base
   */
  getRouteId(id: number) {
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

    return this.http.get<string>(this.routesPath + "/" + id, requestOptions);
  }
  /**
   * Asks the API for the flight's scales in the data base
   * @param id flight number
   * @returns flgiht in the data Base
   */
  getScales(id: number) {
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

    return this.http.get<string>(this.scalesPath + id, requestOptions);
  }
  /**
   * Asks the API for the user in the data base
   * @returns user in the data Base
   */
  getUsers() {
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
  /**
   * Asks the API for the flight's promotion in the data base
   * @param id number of the flight
   * @returns flgiht in the data Base
   */
  getFlightPromo(id: number) {
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

    return this.http.get<string>(this.flightPromoPath + id, requestOptions);
  }
  /**
   * Asks the API for the flight's passengers in the data base
   * @param id flight number
   * @returns flgiht in the data Base
   */
  getFlightPassengers(id: number) {
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

    return this.http.get<string>(this.passengersPath + id, requestOptions);
  }
  /**
   * Asks the API for the flight's baggage in the data base
   * @param id flight number
   * @returns flgiht in the data Base
   */
  getFlightBaggage(id: number) {
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

    return this.http.get<string>(this.flightBaggagePath + id, requestOptions);
  }

  //PUTS
  /**
   * send information to the api to edit a route
   * @param form route information
   * @returns api response
   */
  putRoute(form: Routes) {
    return this.http.put<Routes>(this.routesPath, form);
  }

  // Deletes
  /**
   * Delete a promo according its id
   * @param id flight number
   * @returns api response
   */
  deleteFlightPromo(id: number) {
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

    return this.http.delete<string>(this.deletePromoPath + id, requestOptions);
  }
  /**
   * Delete a passenger according its id
   * @param id flight number
   * @returns api response
   */
  deleteFlightPassenger(id: number) {
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

    return this.http.delete<string>(this.booksPath + id, requestOptions);
  }
  /**
   * Delete a promo according its id
   * @param id flight number
   * @returns api response
   */
  deleteHasBaggage(userId: number, flightId: number) {
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

    return this.http.delete<string>(this.haspath + "/" + userId + "/" + flightId, requestOptions);
  }
 /**
   * Delete a has according its id
   * @param id flight number
   * @returns api response
   */
  deleteHas(id: number) {
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

    return this.http.delete<string>(this.haspath + "/Baggage/" + id, requestOptions);
  }
  /**
   * Delete a baggage according its id
   * @param id baggage number
   * @returns api response
   */
  deleteBaggage(id: number) {
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

    return this.http.delete<string>(this.baggagePath + "/" + id, requestOptions);
  }
}

