import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private data: DataService, private formBuilder: FormBuilder, private router: Router, private api: ApiService) {
    this.user = this.data.getUser();
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
    this.api.getStopOvers(this.data.iDflightSelected.toString()).subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        var splitted = data[i].split(",");
        let city = splitted[0];
        let country = splitted[1];
        let duration = splitted[2];
        let flightNumber = this.setFlightNumber(city, country);
        var stopOver = new StopOver(city, country, duration, flightNumber);
        this.stepOvers.push(stopOver);
      }
    });
    await new Promise(f => (setTimeout(f, 500)));
    this.api.getAirplane(this.flight.airplane_plate).subscribe(data => {
      this.airplane = data;
    });
  }

  ngOnInit(): void {
    this.getTravelers();
  }

  setFlightNumber(city: string, country: string) {
    let min = 100;
    let max = 999;
    min = Math.ceil(min);
    max = Math.floor(max);
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    let flightNumber = city[0] + country[0] + "-" + randomNumber.toString();
    return flightNumber;
  }

  getTravelers() {
    let travelers = this.data.getNumberTravelers();
    for (let i = 1; i < travelers; i++) {
      this.travelers.push(i);
    }
  }

  continueSeats(form: TravelerI) {

    this.usersBooked.push(form);
    // console.log(this.usersBooked);

    this.router.navigateByUrl("/seat-map");
  }

}
