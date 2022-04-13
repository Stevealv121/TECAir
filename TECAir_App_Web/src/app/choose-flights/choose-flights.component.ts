import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

// the `default as` syntax.
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment } from 'moment';

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

  flights: string[] = ["info1", "price1", "info2", "price2"];
  date = new FormControl(moment());

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  chooseFlight() {
    this.router.navigateByUrl("/choose-travelers");
  }

}
