import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Routes } from 'src/app/models/routes';
import { ApiService } from 'src/app/services/api.service';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-route-edit',
  templateUrl: './route-edit.component.html',
  styleUrls: ['./route-edit.component.css']
})
export class RouteEditComponent implements OnInit {

  routeId:number;
  route:Routes;
  date1:string;
  hour1:string;

  constructor(private router:Router, private api:ApiService, private dataService:DataServiceService) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.routeId= this.dataService.getRouteId();
    this.route = {
      route_code:0,
      origin:"",
      destination:"",
      year:0,
      month:0,
      day:0,
      hours:0,
      minutes:0,
    };
    this.date1="";
    this.hour1="";
  }

  ngOnInit(): void {
    this.getRoute()

  }

  getDate(){
    this.date1 = this.route.day +"-"+this.route.month +"-" +this.route.year;
    this.hour1= this.route.hours +":" + this.route.minutes;
  }

  getRoute(){
    this.api.getRouteId(this.dataService.getRouteId()).subscribe((data: any) => {
      this.route = data;
    })
  }

  editRoute(origin:string, destination: string, date:string, hour:string){
    var splitted = date.split("-",3);
    var splitted2 = hour.split(":",2);
    this.route={
      route_code: this.dataService.getRouteId(),
      origin: origin,
      destination: destination,
      year: Number(splitted[0]),
      month: Number(splitted[1]),
      day: Number(splitted[2]),
      hours: Number(splitted2[0]),
      minutes: Number(splitted2[1]),
    }
    this.api.putRoute(this.route).subscribe((data: any) => {
      console.log(data)
    })
    this.goBack();

  }
  goBack(){
    this.router.navigate(['routes'])
  }


}
