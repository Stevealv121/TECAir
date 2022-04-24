import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
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
  newFlight: FlightPost | null;
  scale1: Scales | null;
  scale2: Scales | null;

  constructor(private router: Router, private data: DataServiceService, private api: ApiService, private app: AppComponent) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.airplanes = [];
    this.routes = [];
    this.newFlight = null;
    this.scale1 = null;
    this.scale2 = null;
    this.app.registerView = 'regView2';
  }

  ngOnInit(): void {
    this.getPlates();
    this.getRoutes();
  }

  getPlates() {
    this.api.getAirplanes().subscribe((data: any) => {
      this.airplanes = data;
    })

  }
  getRoutes() {
    this.api.getRoutes().subscribe((data: any) => {
      this.routes = data;
      console.log(this.routes);
    })
  }

  createFlight(plate: string, route: string, boardingGate: string, price: string, status: string, scale1: string, scale2: string) {
    var bol: boolean = true;
    var splitted = route.split(" ", 2);
    if (status == "Enable") {
      bol = true;
    } else {
      bol = false
    }
    this.newFlight = {
      id: 0,
      boarding_gate: Number(boardingGate),
      price: Number(price),
      status: bol,
      route_code: Number(splitted[0]),
      airplane_plate: plate
    }
    this.api.postFlight(this.newFlight).subscribe((data: any) => {
      if (scale1 != "") {
        this.scale1 = {
          flight_Id: data,
          stopover: scale1
        }
        this.api.postScale(this.scale1).subscribe((data1: any) => {
          console.log(data1);
        })
      } if (scale2 != "") {
        this.scale2 = {
          flight_Id: data,
          stopover: scale2
        }
        this.api.postScale(this.scale2).subscribe((data2: any) => {
          console.log(data2);
        })
      }
    })
    this.goBack()
  }

  goBack() {
    this.router.navigate(['flights'])
  }

}
