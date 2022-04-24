import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Airplane } from 'src/app/models/airplane';
import { FlightPost } from 'src/app/models/flight-post';
import { Routes } from 'src/app/models/routes';
import { Scales } from 'src/app/models/scales';
import { ApiService } from 'src/app/services/api.service';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-flight-management',
  templateUrl: './flight-management.component.html',
  styleUrls: ['./flight-management.component.css']
})
export class FlightManagementComponent implements OnInit {

  airplanes: Airplane[];
  routes: Routes[];
  newFlight:FlightPost |null;
  scale1: Scales|null;
  scale2: Scales|null;
  /**
   * This funcition is the contructor of the component
   * @param router Router object type. Injects the Router to the component
   * @param data DataService object type. Injects the data service to the component
   * @param api Api object type. Injects the API service to the component
   */
  constructor(private router: Router, private data: DataServiceService, private api:ApiService) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.airplanes =[];
    this.routes=[];
    this.newFlight=null;
    this.scale1=null;
    this.scale2=null;
  }
  /**
   * This function intialize the elements of the component
   */
  ngOnInit(): void {
    this.getPlates();
    this.getRoutes();
  }
  /**
   * This function asks the API for the airplanes plates in the data base
   */
  getPlates(){
    this.api.getAirplanes().subscribe((data: any) => {
      this.airplanes =data;
    })

  }
  /**
   * This function asks the API for the routes in the data base
   */
  getRoutes(){
    this.api.getRoutes().subscribe((data: any) => {
      this.routes =data;
      console.log(this.routes);
    })
  }
  /**
   * This function asks the API to create a new flight in the data base
   * @param plate string with the airplane's plate
   * @param route string with the route code of the choosed route
   * @param boardingGate string with the boarding gate's number
   * @param price string with the flight's price
   * @param status string with the Flight's status. Enable or Unable
   * @param scale1 String with the first of the two scales.
   * @param scale2 String with the last scale
   * @param duration string with the flight's duration
   */
  async createFlight(plate:string, route:string, boardingGate:string, price:string,status:string, scale1: string, scale2:string, duration:string){
    var bol: boolean = true;
    var splitted = route.split(" ",2);
    if (status == "Enable"){
      bol = true;
    }else{
      bol = false
    }
    this.newFlight ={
      id: 0,
      boarding_gate: Number(boardingGate),
      price: Number(price),
      status: bol,
      route_code: Number(splitted[0]),
      airplane_plate:plate,
      duration:duration
    }
    this.api.postFlight(this.newFlight).subscribe((data: any) => {
      if (scale1 !=""){
        this.scale1= {
          flight_Id: data,
          stopover: scale1
        }
        this.api.postScale(this.scale1).subscribe((data1: any) => {
          console.log(data1);
        })
      }if(scale2 != ""){
        this.scale2= {
          flight_Id: data,
          stopover: scale2
        }
        this.api.postScale(this.scale2).subscribe((data2: any) => {
          console.log(data2);
        })
      }
    })
    await new Promise(f => setTimeout(f, 500))
    this.goBack()
  }
  /**
   * This function takes back the user to the flight component
   */
  goBack(){
    this.router.navigate(['flights'])
  }

}
