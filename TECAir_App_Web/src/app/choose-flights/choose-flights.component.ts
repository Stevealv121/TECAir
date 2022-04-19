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

  constructor(private router: Router, private data: DataService, private api: ApiService) {
    this.initiateValues();
  }

  ngOnInit(): void {
  }

  initiateValues() {
    this.availableFlights = this.data.availableFlights;
    // console.log(this.availableFlights);
    if (this.availableFlights.length == 0) {
      this.bookingForm.patchValue({ origin: "From" });
      this.bookingForm.patchValue({ destination: "To" });
    } else {
      this.bookingForm.patchValue({ origin: this.availableFlights[0].origin });
      this.bookingForm.patchValue({ destination: this.availableFlights[0].destination });
      this.from = this.availableFlights[0].origin;
      this.to = this.availableFlights[0].destination;
    }


  }

  async findFlights(form: FlightI) {
    let from = form.origin;
    let to = form.destination;
    this.api.searchFlights(from, to).subscribe(data => {
      this.data.availableFlights = data;
      this.availableFlights = this.data.availableFlights;
      console.log(this.availableFlights);
    });
    await new Promise(f => setTimeout(f, 50));
    this.from = this.availableFlights[0].origin;
    this.to = this.availableFlights[0].destination;
  }

  chooseFlight() {
    this.router.navigateByUrl("/choose-travelers");
  }

}
