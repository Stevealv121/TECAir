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
    //Make visible the students forms.
    // $('#select').on('change', function () {
    //   $(function () { $("#hide").fadeIn(500); });
    // });
  }

  showStudentForm() {

    let student = (<HTMLInputElement>document.getElementById('select')).value;
    console.log(student);
    if (student == "1") {
      this.isVisible = true;
    } else if (student == "2") {
      this.isVisible = false;
    }



  }

}
