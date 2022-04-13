import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flights-info',
  templateUrl: './flights-info.component.html',
  styleUrls: ['./flights-info.component.css']
})
export class FlightsInfoComponent implements OnInit {

  constructor(private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
   }

  ngOnInit(): void {
  }
  goBack(){
    this.router.navigate(['flights'])
  }

  openFlight(){
    alert("The Flight has been opened")
  }
  closeFlight(){
    alert("The Flight has been closed")
  }

  createPromo(title:string, description: string, date: string, discount:string){
    // conect with the DB and refresh the page

  }

  deletePromo(){ // Delete a promo for a Flight

  }

}
