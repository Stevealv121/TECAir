import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  isVisible = true;
  constructor() { }

  ngOnInit(): void {
  }

  choosePaymentMethod() {

    let paymentMethod = (<HTMLInputElement>document.getElementById('select')).value;
    console.log(paymentMethod);
    if (paymentMethod == "1") {
      this.isVisible = true;
    } else if (paymentMethod == "2" || paymentMethod == "3") {
      this.isVisible = false;
    }

  }
}
