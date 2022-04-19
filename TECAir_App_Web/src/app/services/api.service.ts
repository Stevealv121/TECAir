import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { LoginI } from '../models/login.interface';
import { ResponseI } from '../models/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserI } from '../models/user.interface';
import { FlightI } from '../models/flight.interface';
import { PromotionI } from '../models/promotion.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = "http://localhost:5104/api/";
  userPath: string = this.url + "User";

  constructor(private http: HttpClient) { }

  loginByEmail(email: string, password: string): Observable<ResponseI> {

    let loginPath = this.userPath + "/" + email + "/" + password;
    return this.http.get<ResponseI>(loginPath)

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
}
