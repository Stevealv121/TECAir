import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

// the `default as` syntax.
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment } from 'moment';
import { DataService } from '../services/data.service';
import { FlightI } from '../models/flight.interface';
import { ApiService } from '../services/api.service';
import { StopOverI } from '../models/stopOver.interface';
import { StopOver } from '../models/stopOver';
import { AppComponent } from '../app.component';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'MMMM D',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',

  },
};

@Component({
  selector: 'app-choose-flights',
  templateUrl: './choose-flights.component.html',
  styleUrls: ['./choose-flights.component.css'],
  providers: [{
    provide: DateAdapter,
    useClass: MomentDateAdapter,
    deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
  },

  { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },]
})
export class ChooseFlightsComponent implements OnInit {

  date = new FormControl(moment());
  availableFlights: FlightI[] = [];
  from: string = "";
  to: string = "";
  bookingForm = new FormGroup({
    origin: new FormControl('', Validators.required),
    destination: new FormControl('', Validators.required)
  });
  stepOvers: StopOver[][] = [];
  numberOfStops: number[] = [];
  hasStopOvers: boolean = false;
  flightNumber: string = '';

  constructor(private router: Router, private data: DataService, private api: ApiService, private app: AppComponent) {
    console.log(this.data.admin)
    if (this.data.admin) {
      this.app.registerView = 'regView2';
    } else {
      this.app.registerView = 'regView1';
    }
    console.log(this.data.home);
    if (this.data.home) {
      this.initiateValues();
    }

    if (this.availableFlights.length == 0) {
      this.bookingForm.patchValue({ origin: "From" });
      this.bookingForm.patchValue({ destination: "To" });
    }
    //this.initiateValues();

  }

  ngOnInit(): void {
  }

  async getFinalPrice() {
    for (let i = 0; i < this.availableFlights.length; i++) {
      this.api.getAppliesToByFlightID(this.availableFlights[i].id.toString()).subscribe((data: any) => {
        if (data[i] == undefined) {
          this.availableFlights[i].final_price = this.availableFlights[i].price;
        } else {
          this.availableFlights[i].final_price = data[i].final_price;
          console.log(data);
        }

      });
      await new Promise(f => (setTimeout(f, 500)));
      console.log(this.availableFlights);
    }
  }

  setAbbreviationNames() {
    for (let i = 0; i < this.availableFlights.length; i++) {
      let splitO = this.availableFlights[i].origin.split(",");
      let splitD = this.availableFlights[i].destination.split(",");
      let abOr = splitO[0];
      let abDt = splitD[0];
      this.availableFlights[i].abbreOrigin = abOr;
      this.availableFlights[i].abbreDest = abDt;
    }
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

  async getStopOvers(flight_ids: string[]) {
    for (let i = 0; i < flight_ids.length; i++) {
      console.log("id: " + flight_ids[0]);
      this.api.getStopOvers(flight_ids[i]).subscribe(data => {
        let stopOvers: StopOver[] = [];
        let numberOfStops = 0;
        //let stops: number[] = [];
        for (let is = 0; is < data.length; is++) {
          var splitted = data[is].split(",");
          let city = splitted[0];
          let country = splitted[1];
          let duration = splitted[2];
          let flightNumber = this.setFlightNumber(city, country);
          let flightID: number = +flight_ids[i];
          // console.log("Iteration n: "+ i+);
          var stopOver = new StopOver(city, country, duration, flightNumber, flightID);
          stopOvers.push(stopOver);
          numberOfStops++;
        }
        this.numberOfStops.push(numberOfStops);
        this.stepOvers.push(stopOvers);
      })

      await new Promise(f => setTimeout(f, 500));
      this.hasStopOvers = true;
    }

    // console.log("iatrue?" + this.hasStopOvers);
    // console.log(flight_ids[0]);
    // console.log(this.stepOvers);
  }

  initiateValues() {

    this.availableFlights = this.data.availableFlights;
    this.setAbbreviationNames();
    this.getFinalPrice();
    // console.log(this.availableFlights);

    this.bookingForm.patchValue({ origin: this.availableFlights[0].origin });
    this.bookingForm.patchValue({ destination: this.availableFlights[0].destination });
    this.from = this.availableFlights[0].origin;
    this.to = this.availableFlights[0].destination;
    let flight_ids: string[] = [];
    for (let i = 0; i < this.availableFlights.length; i++) {
      flight_ids.push(this.availableFlights[i].id.toString());
    }

    this.flightNumber = this.setFlightNumber(this.from, this.to);

    this.getStopOvers(flight_ids);


  }

  async findFlights(form: FlightI) {

    //TODO: if dont get the data, refresh the method.

    let from = form.origin;
    let to = form.destination;
    this.api.searchFlights(from, to).subscribe(data => {
      this.data.availableFlights = data;
      this.availableFlights = this.data.availableFlights;
      console.log(this.availableFlights);
    });
    await new Promise(f => setTimeout(f, 500));
    if (this.availableFlights[0] != undefined) {
      this.from = this.availableFlights[0].origin;
      this.to = this.availableFlights[0].destination;
    }
    let flight_ids: string[] = [];
    for (let i = 0; i < this.availableFlights.length; i++) {
      flight_ids.push(this.availableFlights[i].id.toString());
    }

    //TODO: flightNumber for all direct flights
    if (this.flightNumber == '') {
      this.flightNumber = this.setFlightNumber(this.from, this.to);
    }

    this.getStopOvers(flight_ids);

    this.setAbbreviationNames();
    this.getFinalPrice();

  }

  chooseFlight(id: number, final_price: number) {
    this.data.iDflightSelected = id;
    this.data.stopOvers = this.setStopsOfSelectedFlight(id);
    this.data.flightNumber = this.flightNumber;
    this.data.final_price = final_price;
    this.router.navigateByUrl("/choose-travelers");
  }

  setStopsOfSelectedFlight(id: number): StopOver[] {
    let stopOvers: StopOver[] = [];
    this.stepOvers.forEach(flight => {
      flight.forEach(stopOver => {
        if (stopOver.flightID == id) {
          stopOvers.push(stopOver);
        }
      })
    });
    return stopOvers;
  }

}
