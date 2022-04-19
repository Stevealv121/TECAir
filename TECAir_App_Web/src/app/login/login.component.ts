import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginI } from '../models/login.interface';
import { UserI } from '../models/user.interface';
import { ApiService } from '../services/api.service';
import { DataService } from '../services/data.service';

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

  user!: UserI;

  constructor(private api: ApiService, private router: Router, private data: DataService) { }

  ngOnInit(): void {
  }

  async onLogin(form: LoginI) {
    let password = form.password;
    let email = form.email;
    let credentials = false;
    this.api.loginByEmail(email, password).subscribe(data => {
      if (data == null) {
        alert("Wrong credentials, please access with a valid email and password.");
      } else {
        credentials = true;
        this.user = data;
        this.data.setUser(data);
      }
      console.log(data)
    });

    await new Promise(f => setTimeout(f, 200));

    console.log(credentials);

    if (credentials) {
      this.router.navigateByUrl("home");
    }

  }
}
