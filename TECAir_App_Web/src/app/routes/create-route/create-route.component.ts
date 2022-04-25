import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Routes } from 'src/app/models/routes';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-create-route',
  templateUrl: './create-route.component.html',
  styleUrls: ['./create-route.component.css']
})
export class CreateRouteComponent implements OnInit {

  route: Routes | null;
  /**
   * This funcition is the contructor of the component
   * @param router Router object type. Injects the Router to the component
   * @param data DataService object type. Injects the data service to the component
   * @param api Api object type. Injects the API service to the component
   * @param app App componet Object
   */
  constructor(private router: Router, private api: ApiService, private app: AppComponent) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.route = null;
    this.app.registerView = 'regView2';
  }
  /**
  * This function intialize the elements of the component
  */
  ngOnInit(): void {
  }

  /**
   * This function  creates a new route in the data base
   * @param origin origin city
   * @param destination  destiantion city
   * @param date date of the route
   * @param hour hour of the route
   */
  async createRoute(origin:string, destination: string, date:string, hour:string){
    var splitted = date.split("-",3);
    var splitted2 = hour.split(":",2);
    this.route={
      route_code: 0,
      origin: origin,
      destination: destination,
      year: Number(splitted[0]),
      month: Number(splitted[1]),
      day: Number(splitted[2]),
      hours: Number(splitted2[0]),
      minutes: splitted2[1],
    }
    this.api.postRoute(this.route).subscribe((data: any) => {
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
