import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Routes } from 'src/app/models/routes';
import { ApiService } from 'src/app/services/api.service';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-route-edit',
  templateUrl: './route-edit.component.html',
  styleUrls: ['./route-edit.component.css']
})
export class RouteEditComponent implements OnInit {

  routeId: number;
  route: Routes;
  date1: string;
  hour1: string;
  /**
   * This funcition is the contructor of the component
   * @param router Router object type. Injects the Router to the component
   * @param data DataService object type. Injects the data service to the component
   * @param api Api object type. Injects the API service to the component
   * @param app App componet Object
   */
  constructor(private router: Router, private api: ApiService, private dataService: DataServiceService, private app: AppComponent) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.routeId = this.dataService.getRouteId();
    this.route = {
      route_code:0,
      origin:"",
      destination:"",
      year:0,
      month:0,
      day:0,
      hours:0,
      minutes:"",
    };
    this.date1 = "";
    this.hour1 = "";
    this.app.registerView = 'regView2';
  }
  /**
  * This function intialize the elements of the component
  */
  ngOnInit(): void {
    this.getRoute()

  }
  /**
   * This function takes the date string and put in a good format
   */
  getDate() {
    this.date1 = this.route.day + "-" + this.route.month + "-" + this.route.year;
    this.hour1 = this.route.hours + ":" + this.route.minutes;
  }
  /**
   * This fuction asks the API for the routes in the data base
   */
  getRoute() {
    this.api.getRouteId(this.dataService.getRouteId()).subscribe((data: any) => {
      this.route = data;
    })
  }
   /**
   * This function updates a  route in the data base
   * @param origin origin city
   * @param destination  destiantion city
   * @param date date of the route
   * @param hour hour of the route
   */
  async editRoute(origin:string, destination: string, date:string, hour:string){
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
      minutes: splitted2[1],
    }
    this.api.putRoute(this.route).subscribe((data: any) => {
      console.log(data)
    })
    await new Promise(f => setTimeout(f, 500))
    this.goBack();

  }
  /**
   * This function takes the user to the previus componet
   */
  goBack() {
    this.router.navigate(['routes'])
  }


}
