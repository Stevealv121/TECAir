import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from '../models/flight';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  information: Flight[];

  constructor(private router:Router, private api: ApiService) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.information =[]

   }

  ngOnInit(): void {
    this.prueba()

  }

  prueba(){
    this.api.getFlights().subscribe((data: any) => {
      this.information =data;
      console.log(this.information);
    })

  }

  getInfo(id:number){
    console.log(id);
    this.router.navigate(['flightsInfo'])
  }

}
