import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Airplane } from 'src/app/models/airplane';
import { Routes } from 'src/app/models/routes';
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

  constructor(private router: Router, private data: DataServiceService, private api:ApiService) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.airplanes =[];
    this.routes=[];
  }

  ngOnInit(): void {
    this.getPlates();
    this.getRoutes();
  }

  getPlates(){
    this.api.getAirplanes().subscribe((data: any) => {
      this.airplanes =data;
    })

  }
  getRoutes(){
    this.api.getRoutes().subscribe((data: any) => {
      this.routes =data;
      console.log(this.routes);
    })
  }

  goBack(selct: string){
    console.log(selct)
    this.router.navigate(['flights'])
  }

}
