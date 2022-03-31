import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  isVisible = false;

  constructor() { }

  ngOnInit(): void {
  }

  chooseRole() {

    let role = (<HTMLInputElement>document.getElementById('select')).value;
    console.log(role);
    if (role == "2") {
      this.isVisible = true;
    } else if (role == "1" || role == "3") {
      this.isVisible = false;
    }

  }

}
