import { Component, OnChanges, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Routes } from '../models/routes';
import { ApiService } from '../services/api.service';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {

  routes: Routes[];
  /**
   * This funcition is the contructor of the component
   * @param router Router object type. Injects the Router to the component
   * @param data DataService object type. Injects the data service to the component
   * @param api Api object type. Injects the API service to the component
   * @param app App componet Object
   */
  constructor(private router: Router, private api: ApiService, private dataservice: DataServiceService, private app: AppComponent) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.routes = [];
    this.app.registerView = 'regView2';

  }
  /**
  * This function intialize the elements of the component
  */
  ngOnInit(): void {
    this.getRoutes();
  }

  /**
   * This function asks the API for the routes in the data base
   */
  getRoutes() {
    this.api.getRoutes().subscribe((data: any) => {
      this.routes = data;
    })

  }
  /**
   * This function takes the user to the edit route component
   */
  editView(id: number) {
    this.dataservice.setRouteId(id);
    this.router.navigate(['RouteEdit'])
  }


}
