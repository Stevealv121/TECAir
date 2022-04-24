import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
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
  capacity:number;
  /**
   * This funcition is the contructor of the component
   * @param router Router object type. Injects the Router to the component
   * @param data DataService object type. Injects the data service to the component
   * @param api Api object type. Injects the API service to the component
   */
  constructor(private router: Router, private data: DataServiceService, private api: ApiService, private app: AppComponent) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.passengers =[];
    this.baggage =[];
    this.capacity=0;
   }
   /**
   * This function intialize the elements of the component
   */
    this.app.registerView = 'regView2';
  ngOnInit(): void {
    this.getPassengers();
    this.getBaggage();
    this.getCapacity();
  }
  /**
   * This function asks the API for the flight's passengers in the data base
   */
  getPassengers(){
    this.api.getFlightPassengers(this.data.getFlightId()).subscribe((data: any) => {
      this.passengers = data;
    })

  }
  /**
   * This function asks the API for the flight's capacity in the data base
   */
  getCapacity(){
    this.api.getFlightCapacity(this.data.getFlightId()).subscribe((data: any) => {
      this.capacity = data;
    })
  }
  /**
   * This function asks the API for the flight's baggage in the data base
   */
  getBaggage(){
    this.api.getFlightBaggage(this.data.getFlightId()).subscribe((data: any) => {
      this.baggage = data;
    })
  }
  /**
   * This funcion deletes an user of a flight by the id
   * @param userId id of the user
   */
  async deletePassenger(userId : number){
    this.api.deleteFlightPassenger(userId).subscribe((data: any) => {
      console.log(data)
    })
    this.api.deleteHasBaggage(userId, this.data.flightId).subscribe((data: any) => {
      console.log(data)
    })
    await new Promise(f => setTimeout(f, 500))
    this.ngOnInit()
  }
  /**
   * This function deletes a baggage of a flight
   * @param baggage_id number of the baggage
   */
  async deleteBaggage(baggage_id: number){
    this.api.deleteHas(baggage_id).subscribe((data: any) => {
      console.log(data)
    })
    this.api.deleteBaggage(baggage_id).subscribe((data: any) => {
      console.log(data)
    })
    await new Promise(f => setTimeout(f, 500))
    this.ngOnInit();
  }
  /**
   * This function takes the html and makes a pdf with the information
   */
  goBack(){
    this.router.navigate(['flightsInfo'])
  }
}
