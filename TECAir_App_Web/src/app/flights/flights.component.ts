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
  /**
   * This funcition is the contructor of the component
   * @param router Router object type. Injects the Router to the component
   * @param data DataService object type. Injects the data service to the component
   * @param api Api object type. Injects the API service to the component
   */
  constructor(private router:Router, private api: ApiService, private data: DataServiceService) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.information =[];

   }
  /**
   * This function intialize the elements of the component
   */
  ngOnInit(): void {
    this.cargarTabla()

  }
  /**
   * This function asks the API for the flights in the data base
   */
  cargarTabla(){
    this.api.getFlights().subscribe((data: any) => {
      this.information =data;
    })

  }
  /**
   * This funtion takes the information of flight and sends the user to the flight information compomnent
   * @param id number of the flight
   * @param origin string with the flight's origin
   * @param departure string eith the flight' destination
   * @param year number with the flight's year
   * @param month  number with the flight's month
   * @param day number with the flight's day
   * @param hour number with the flight's hour
   * @param minutes string with the flight's minutes
   */
  getInfo(id:number, origin:string, departure: string, year: number, month: number, day:number, hour:number, minutes:string){
    this.data.setFlightId(id);
    this.data.setFlightInfo([origin,departure,String(day)+"/"+String(month)+ "/"+ String(year), String(hour)+":"+String(minutes)]);
    this.router.navigate(['flightsInfo']);
  }

}
