import { Component, OnChanges, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Routes } from '../models/routes';
import { ApiService } from '../services/api.service';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit{

  routes:Routes[];

  constructor(private router:Router, private api:ApiService, private dataservice:DataServiceService) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.routes=[];

  }

  ngOnInit(): void {
    this.getRoutes();
  }


  getRoutes(){
    this.api.getRoutes().subscribe((data: any) => {
      this.routes =data;
    })

  }
  editView(id:number){
    this.dataservice.setRouteId(id);
    this.router.navigate(['RouteEdit'])
  }


}
