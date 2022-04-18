import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightBaggage } from 'src/app/models/flight-baggage';
import { FlightPassengers } from 'src/app/models/flight-passengers';
import { ApiService } from 'src/app/services/api.service';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-flight-open',
  templateUrl: './flight-open.component.html',
  styleUrls: ['./flight-open.component.css']
})
export class FlightOpenComponent implements OnInit {

  passengers: FlightPassengers[];
  baggage: FlightBaggage[];

  constructor(private router: Router, private data:DataServiceService, private api:ApiService) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.passengers =[];
    this.baggage =[];
   }

  ngOnInit(): void {
    this.getPassengers();
    this.getBaggage();
  }

  getPassengers(){
    this.api.getFlightPassengers(this.data.getFlightId()).subscribe((data: any) => {
      this.passengers =data;
    })

  }
  getBaggage(){
    this.api.getFlightBaggage(this.data.getFlightId()).subscribe((data: any) => {
      this.baggage =data;
    })
  }
  deletePassenger(userId : number){
    this.api.deleteFlightPassenger(userId).subscribe((data: any) => {
      console.log(data)
    })
    this.goBack();
  }
  deleteBaggage(baggage_id: number){

  }
  goBack(){
    this.router.navigate(['flightsInfo'])
  }
}
