import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginI } from '../models/login.interface';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    access: new FormControl('Admin', Validators.required)
  })

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  // checkLocalStorage(){
  //   if(true){
  //     this.router.navigate([''])
  //   }
  // }

  onLogin(form: LoginI) {
    // this.api.loginByEmail(form).subscribe(data => {
    //   console.log(data)
    // })

  }
}
