import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

// the `default as` syntax.
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment } from 'moment';
import { ApiService } from '../services/api.service';
import { FlightI } from '../models/flight.interface';
import { DataService } from '../services/data.service';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'MMM D',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',

  },
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [{
    provide: DateAdapter,
    useClass: MomentDateAdapter,
    deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
  },

  { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },]
})
export class HomeComponent implements OnInit {

  promos: number[] = [1, 2];
  date = new FormControl(moment());
  bookingForm = new FormGroup({
    origin: new FormControl('', Validators.required),
    destination: new FormControl('', Validators.required),
    travelers: new FormControl('', Validators.required)
  });
  // availableFlights: FlightI[] = [];

  constructor(private router: Router, private api: ApiService, private data: DataService) { }

  ngOnInit(): void {
    this.changeIndicator();
  }

  changeIndicator() {
    let slide1 = document.getElementById("s1");
    let slide2 = document.getElementById("s2");
    let slide3 = document.getElementById("s3");

    slide1?.addEventListener("click", this.setIndicator1);
    slide2?.addEventListener("click", this.setIndicator2);
    slide3?.addEventListener("click", this.setIndicator3);
  }
  setIndicator1(this: HTMLElement) {
    let indicators = document.getElementById("indicators")?.children;

    indicators?.item(1)?.classList.remove("active");
    indicators?.item(2)?.classList.remove("active");
    this.classList.add("active");

  }
  setIndicator2(this: HTMLElement) {
    let indicators = document.getElementById("indicators")?.children;

    indicators?.item(0)?.classList.remove("active");
    indicators?.item(2)?.classList.remove("active");
    this.classList.add("active");

  }
  setIndicator3(this: HTMLElement) {
    let indicators = document.getElementById("indicators")?.children;

    indicators?.item(0)?.classList.remove("active");
    indicators?.item(1)?.classList.remove("active");
    this.classList.add("active");

  }

  async findFlights(form: FlightI) {
    let from = form.origin;
    let to = form.destination;
    this.api.searchFlights(from, to).subscribe(data => {
      this.data.availableFlights = data;
      // console.log(data);
      // console.log(this.availableFlights);
      // console.log(this.data.availableFlights);
    });
    await new Promise(f => setTimeout(f, 100));
    this.router.navigateByUrl("/choose-flights");
  }

}
