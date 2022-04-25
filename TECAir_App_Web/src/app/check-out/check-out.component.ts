import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { StopOver } from '../models/stopOver';
import { DataService } from '../services/data.service';
import { ApiService } from '../services/api.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  isVisible = false;
  date: string = "";
  flight: string = "";
  airplane: string = "";
  origin: string = "";
  destination: string = "";
  stepOvers: StopOver[] = [];
  numberOfStops: number = 0;
  hasStopOvers: boolean = false;
  duration: string = "";
  tax: number = 0;
  total_due: number = 0;
  fare: number = 0;
  book:Book;

  constructor(private data: DataService, private app: AppComponent, private router: Router, private api:ApiService ) {
    if (this.data.admin) {
      this.app.registerView = 'regView2';
    } else {
      this.app.registerView = 'regView1';
    }
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.date = this.data.date;
    this.flight = this.data.flightNumber;
    this.airplane = this.data.selectedAirplane;
    this.origin = this.data.origin;
    this.destination = this.data.destination;
    this.numberOfStops = this.data.numberOfStops;
    this.duration = this.data.duration;
    this.fare = this.data.final_price;
    this.tax = this.data.tax;
    this.total_due = this.data.total_due;
    this.book={
      user_id:0,
      flight_id:0
    };
  }

  ngOnInit(): void {
    this.getStopOvers();
  }

  /**
   * Choose the desired payment method.
   * For now, there is only one payment method.
   */
  choosePaymentMethod() {

    let paymentMethod = (<HTMLInputElement>document.getElementById('select')).value;
    console.log(paymentMethod);
    if (paymentMethod == "1") {
      this.isVisible = true;
    } else if (paymentMethod == "2" || paymentMethod == "3") {
      this.isVisible = false;
    }

  }

  /**
   * Get all the stopovers from the flight selected.
   */
  getStopOvers() {
    if (this.data.stopOvers.length > 0) {
      this.stepOvers = this.data.stopOvers;
      this.hasStopOvers = true;
    } else {
      this.hasStopOvers = false;
    }
  }
  /**
   * This function reserve a flight to an user
   */
  generateBill() {
    this.book={
      user_id:this.data.getUser().id,
      flight_id:this.data.iDflightSelected
    }
    this.api.Book(this.book).subscribe((data: any) => {

    })
    this.router.navigate(['bill']);
  }
}
