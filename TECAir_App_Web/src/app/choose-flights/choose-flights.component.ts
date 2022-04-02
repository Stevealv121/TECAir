import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-flights',
  templateUrl: './choose-flights.component.html',
  styleUrls: ['./choose-flights.component.css']
})
export class ChooseFlightsComponent implements OnInit {

  flights: string[] = ["info1", "price1", "info2", "price2"];

  constructor() { }

  ngOnInit(): void {
  }

}
