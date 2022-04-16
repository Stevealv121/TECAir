import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-closed',
  templateUrl: './flight-closed.component.html',
  styleUrls: ['./flight-closed.component.css']
})
export class FlightClosedComponent implements OnInit {

  constructor(private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
   }

  ngOnInit(): void {
  }
  goBack(){
    this.router.navigate(['flightsInfo'])
  }

}
