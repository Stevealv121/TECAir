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

  constructor(private router: Router, private api: ApiService, private app: AppComponent) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.route = null;
    this.app.registerView = 'regView2';
  }

  ngOnInit(): void {
  }

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
  goBack() {
    this.router.navigate(['routes'])
  }


}
