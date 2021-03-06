import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Airplane } from '../models/airplane';
import { Flight } from '../models/flight';
import { Routes } from '../models/routes';
import { Scales } from '../models/scales';
import { StopOver } from '../models/stopOver';
import { StopOverI } from '../models/stopOver.interface';
import { TravelerI } from '../models/traveler.interface';
import { UserI } from '../models/user.interface';
import { ApiService } from '../services/api.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-choose-travelers',
  templateUrl: './choose-travelers.component.html',
  styleUrls: ['./choose-travelers.component.css']
})
export class ChooseTravelersComponent implements OnInit {

  travelers: number[] = [];
  user!: UserI;
  flight!: Flight;
  usersForm!: FormGroup;
  errorMessage!: string | null;
  usersBooked: TravelerI[] = [];
  travelerForm = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    middle_name: new FormControl(''),
    date_birth: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    suffix: new FormControl('')
  })
  route!: Routes;
  stepOvers: StopOver[] = [];
  airplane!: Airplane;
  numberOfStops: number = 0;
  hasStopOvers: boolean = false;
  flightNumber: string = '';
  admin: boolean = false;//default:false
  users: UserI[] = [];
  tax: number = 0;
  total_due: number = 0;

  constructor(private data: DataService, private app: AppComponent, private router: Router, private api: ApiService) {
    this.user = this.data.getUser();
    this.admin = this.data.admin;
    if (this.admin) {
      this.app.registerView = 'regView2';
    } else {
      this.app.registerView = 'regView1';
    }
    if (this.user !== undefined) {
      this.travelerForm.patchValue({ first_name: this.user.first_name });
      // this.travelerForm.patchValue({ middle_name: this.user.second_name });
      this.travelerForm.patchValue({ last_name: this.user.first_surname });
    }
    if (this.data.iDflightSelected == undefined) {
      alert("There is no flight selected.Redirecting...");
      router.navigateByUrl("/choose-flights");
    }
    this.getFlightInfo();
  }

  /**
   * Get all the flight information. It includes: Flight,Route,Stopovers and Airplane.
   */
  async getFlightInfo() {
    //console.log(this.data.iDflightSelected);
    this.api.selectFlight(this.data.iDflightSelected.toString()).subscribe(data => {
      this.flight = data;
      console.log(data);
    });
    await new Promise(f => (setTimeout(f, 500)));
    this.api.retrieveRoutes(this.flight.route_code.toString()).subscribe(data => {
      this.route = data;
    });
    await new Promise(f => (setTimeout(f, 500)));
    this.data.origin = this.route.origin;
    this.data.destination = this.route.destination;
    this.data.date = this.setDate();

    this.getStopOvers();
    console.log(this.stepOvers);

    this.api.getAirplane(this.flight.airplane_plate).subscribe(data => {
      this.airplane = data;
      this.data.selectedAirplane = this.airplane.model;
      this.data.airplane_plate = this.airplane.plate;
    });
    await new Promise(f => (setTimeout(f, 500)));
    this.flightNumber = this.data.flightNumber;
    this.data.duration = this.flight.duration;
    this.flight.final_price = this.data.final_price;
    console.log(this.flight.final_price);
    this.setTaxes();
  }
  /**
   * Set the flight date.
   * @returns date with format mm/dd/yyyy
   */
  setDate(): string {
    return this.route.month.toString() + "/" + this.route.day.toString() + "/" + this.route.year.toString();
  }

  /**
   * Set a tax of 13% of the final price and set the total due.
   */
  setTaxes() {
    this.tax = Math.round((this.flight.final_price) / 13);
    this.total_due = this.flight.final_price + this.tax;
    this.data.tax = this.tax;
    this.data.total_due = this.total_due;
  }

  /**
   * Get all the stopovers of the flight selected.
   */
  getStopOvers() {
    if (this.data.stopOvers.length > 0) {
      this.stepOvers = this.data.stopOvers;
      this.hasStopOvers = true;
      for (let i = 0; i < this.stepOvers.length; i++) {
        this.numberOfStops++;
      }
    } else {
      this.hasStopOvers = false;
    }
    this.data.numberOfStops = this.numberOfStops;
  }

  ngOnInit(): void {
    this.getTravelers();
    this.getUsers();
  }

  /**
   * Get the number of travelers.
   */
  getTravelers() {
    let travelers = this.data.getNumberTravelers();
    for (let i = 1; i < travelers; i++) {
      this.travelers.push(i);
    }
  }

  /**
   * Get the users.
   */
  getUsers() {
    this.api.getUsers().subscribe((data: any) => {
      this.users = data;
    })
  }

  /**
   * Choose an user from all the users.
   */
  selectUser() {
    let option: any = (<HTMLInputElement>document.getElementById('select')).value;
    console.log(option);
    this.user = this.users[option];
    this.travelerForm.patchValue({ first_name: this.user.first_name });
    // this.travelerForm.patchValue({ middle_name: this.user.second_name });
    this.travelerForm.patchValue({ last_name: this.user.first_surname });
    this.data.user = this.user;
  }

  /**
   * Continues to the next step, selecting a seat.
   * @param form Traveler
   */
  continueSeats(form: TravelerI) {

    this.usersBooked.push(form);
    // console.log(this.usersBooked);

    this.router.navigateByUrl("/seat-map");
  }

}
