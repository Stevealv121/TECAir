import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-flights',
  templateUrl: './choose-flights.component.html',
  styleUrls: ['./choose-flights.component.css']
})
export class ChooseFlightsComponent implements OnInit {

  flights: string[] = ["info1", "price1", "info2", "price2"];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  chooseFlight() {
    this.router.navigateByUrl("/choose-travelers");
  }

}
