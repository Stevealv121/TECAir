import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from '../models/flight';
import { ApiService } from '../services/api.service';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  information: Flight[];

  constructor(private router:Router, private api: ApiService, private data: DataServiceService) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.information =[];

   }

  ngOnInit(): void {
    this.cargarTabla()

  }

  cargarTabla(){
    this.api.getFlights().subscribe((data: any) => {
      this.information =data;
    })

  }

  getInfo(id:number, origin:string, departure: string, year: number, month: number, day:number, hour:number, minutes:number){
    this.data.setFlightId(id);
    this.data.setFlightInfo([origin,departure,String(day)+"/"+String(month)+ "/"+ String(year), String(hour)+":"+String(minutes)+"0"]);
    this.router.navigate(['flightsInfo']);
  }

}
