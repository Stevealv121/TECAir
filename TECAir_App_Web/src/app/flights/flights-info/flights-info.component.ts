import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-flights-info',
  templateUrl: './flights-info.component.html',
  styleUrls: ['./flights-info.component.css']
})
export class FlightsInfoComponent implements OnInit {

  constructor(private router: Router, private data: DataServiceService) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
   }

  ngOnInit(): void {
    console.log(this.data.getFlightId());
  }
  goBack(){
    this.router.navigate(['flights'])
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
