import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-open',
  templateUrl: './flight-open.component.html',
  styleUrls: ['./flight-open.component.css']
})
export class FlightOpenComponent implements OnInit {

  constructor(private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
   }

  ngOnInit(): void {
  }
  goBack(){
    this.router.navigate(['flightsInfo'])
  }
}
