import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { LoginI } from '../models/login.interface';
import { ResponseI } from '../models/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserI } from '../models/user.interface';

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
}
