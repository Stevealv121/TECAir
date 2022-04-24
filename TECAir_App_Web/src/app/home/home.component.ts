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
import { PromotionI } from '../models/promotion.interface';
import { AppComponent } from '../app.component';
import { DealsComponent } from '../deals/deals.component';

const moment = _rollupMoment || _moment;
declare var bootstrap: any;

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

  promos: PromotionI[] = [];
  filled: boolean = false;
  date = new FormControl(moment());
  bookingForm = new FormGroup({
    origin: new FormControl('', Validators.required),
    destination: new FormControl('', Validators.required),
    travelers: new FormControl('', Validators.required)
  });
  block: string = "block"
  none: string = "none"
  display1: string = this.block;
  display2: string = this.none;
  display3: string = this.none;
  color: string = "red";
  // availableFlights: FlightI[] = [];

  constructor(private router: Router, private api: ApiService, private data: DataService, private app: AppComponent, private deal: DealsComponent) {
    this.retrievePromotions();
    this.app.registerView = 'regView1';
    this.data.home = true;
  }

  ngOnInit(): void {


  }

  setDisplay1() {
    this.display1 = this.block;
    this.display2 = this.none;
    this.display3 = this.none;
  }
  setDisplay2() {
    this.display2 = this.block;
    this.display1 = this.none;
    this.display3 = this.none;
  }

  setDisplay3() {
    this.display3 = this.block;
    this.display1 = this.none;
    this.display2 = this.none;
  }

  async findFlights(form: FlightI) {
    let from = form.origin;
    let to = form.destination;
    let travelers = form.travelers;
    this.data.setNumberTravelers(travelers);
    this.api.searchFlights(from, to).subscribe(data => {
      this.data.availableFlights = data;

    });
    await new Promise(f => setTimeout(f, 100));

    this.router.navigateByUrl("/choose-flights");
  }

  async retrievePromotions() {
    this.api.getPromotions().subscribe(data => {
      for (let i = 0; i < 3; i++) {
        this.promos.push(data[i]);
      }

    })
    await new Promise(f => setTimeout(f, 500));
    this.filled = true;
  }

  bookNow(promotion_code: any) {
    if (promotion_code !== undefined) {
      this.deal.bookNow(promotion_code);
    }
  }

}
