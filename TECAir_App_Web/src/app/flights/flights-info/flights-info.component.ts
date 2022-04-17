import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-flights-info',
  templateUrl: './flights-info.component.html',
  styleUrls: ['./flights-info.component.css']
})
export class FlightsInfoComponent implements OnInit {

  scales: string[] | null;
  flightInfo: string[];

  constructor(private router: Router, private data: DataServiceService, private api : ApiService) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.scales =[];
    this.flightInfo = this.data.getFlightInfo();
   }

  ngOnInit(): void {
    this.getScales();
  }
  goBack(){
    this.router.navigate(['flights'])
  }

  getScales(){
    this.api.getScales(this.data.getFlightId()).subscribe((data: any) => {
      this.scales =data;
    })
  }

  openFlight(){
    this.router.navigate(['OpenFlight'])
  }
  closeFlight(){
    this.router.navigate(['ClosedFlight'])
  }

  createPromo(title:string, description: string, date: string, discount:string){
    // conect with the DB and refresh the page

  }

  deletePromo(){ // Delete a promo for a Flight

  }

}
