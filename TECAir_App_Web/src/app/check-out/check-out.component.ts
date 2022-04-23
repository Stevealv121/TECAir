import { Component, OnInit } from '@angular/core';
import { StopOver } from '../models/stopOver';
import { DataService } from '../services/data.service';

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

  constructor(private data: DataService) {
    this.date = this.data.date;
    this.flight = this.data.flightNumber;
    this.airplane = this.data.selectedAirplane;
    this.origin = this.data.origin;
    this.destination = this.data.destination;
    this.numberOfStops = this.data.numberOfStops;
  }

  ngOnInit(): void {
    this.getStopOvers();
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

  getStopOvers() {
    if (this.data.stopOvers.length > 0) {
      this.stepOvers = this.data.stopOvers;
      this.hasStopOvers = true;
    } else {
      this.hasStopOvers = false;
    }
  }
}
