import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserI } from '../models/user.interface';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  isVisible = false;
  registerForm = new FormGroup({
    id: new FormControl(''),
    email: new FormControl(''),
    // first_name: new FormControl(''),
    // second_name: new FormControl(''),
    // first_surname: new FormControl(''),
    // second_surname: new FormControl(''),
    phone: new FormControl(''),
    university: new FormControl(''),
    student_id: new FormControl(''),
    role_name: new FormControl(''),
    password: new FormControl(''),
    fullName: new FormControl('')
  })

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  chooseRole() {

    let role = (<HTMLInputElement>document.getElementById('select')).value;
    // console.log(role);
    if (role == "Student") {
      this.isVisible = true;
    } else if (role == "Client" || role == "Worker") {
      this.isVisible = false;
    }

  }

  postForm(form: UserI) {
    let name = this.separateFullName(form);
    let newForm = this.manageForm(form, name);

    this.api.signUp(newForm).subscribe(data => {
      console.log(data);
    });
  }

  manageForm(form: UserI, name: string[]) {

    switch (name.length) {
      case 4:
        form.first_name = name[0];
        form.second_name = name[1];
        form.first_surname = name[2];
        form.second_surname = name[3];
        break;
      case 3:
        form.first_name = name[0];
        form.second_name = null;
        form.first_surname = name[1];
        form.second_surname = name[2];
        break;
      case 2:
        form.first_name = name[0];
        form.second_name = null;
        form.first_surname = name[1];
        form.second_surname = null;
        break;
    }

    if (form.role_name != "Student") {
      form.university = null;
      form.student_id = null;
    }

    return form;
  }

  separateFullName(form: UserI) {
    let arrName = form.fullName.split(" ");
    return arrName;
  }

  login() {
    this.router.navigateByUrl('login');
  }


}
