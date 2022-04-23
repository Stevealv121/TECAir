import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppliesTo } from 'src/app/models/applies-to';
import { Promotion } from 'src/app/models/promotion';
import { SimpPromotion } from 'src/app/models/simp-promotion';
import { ApiService } from 'src/app/services/api.service';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-flights-info',
  templateUrl: './flights-info.component.html',
  styleUrls: ['./flights-info.component.css']
})
export class FlightsInfoComponent implements OnInit {

  scales: string[] | null;
  flightPromo: Promotion[];
  flightInfo: string[];
  newPromo: SimpPromotion;
  apply: AppliesTo |null;
  promoId: number;

  constructor(private router: Router, private data: DataServiceService, private api : ApiService) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.scales =[];
    this.flightInfo = this.data.getFlightInfo();
    this.flightPromo =[];
    this.newPromo = {};
    this.apply = null;
    this.promoId =0;
   }

  ngOnInit(): void {
    this.getScales();
    this.getPromo();
  }
  goBack(){
    this.router.navigate(['flights'])
  }

  getScales(){
    this.api.getScales(this.data.getFlightId()).subscribe((data: any) => {
      this.scales =data;
    })
  }

  getPromo(){
    this.api.getFlightPromo(this.data.getFlightId()).subscribe((data: any) => {
      this.flightPromo =data;
    })
  }

  openFlight(){
    this.router.navigate(['OpenFlight'])
  }
  closeFlight(){
    this.router.navigate(['ClosedFlight'])
  }

  createPromo(title:string, description: string, date: string, discount:string){
    var splitted = date.split("-", 3)
    this.newPromo = {
      promotion_code : 0,
      description: description,
      title: title,
      day: Number(splitted[0]),
      month: Number(splitted[1]),
      year: Number(splitted[2]),
      discount: Number(discount)
    };
    console.log(this.newPromo);
    this.api.postPromo(this.newPromo).subscribe((data: any) => {
      this.promoId = data;
      this.apply= {
        promotion_code: Number(this.promoId),
        flight_id: Number(this.data.getFlightId()),
        final_price: 0
      }
      this.api.postAppliesTo(this.apply).subscribe((data: any) => {
        console.log(data)
      })
    })



    this.router.navigate(['flights'])

  }

  deletePromo(){ // Delete a promo for a Flight
    this.api.deleteFlightPromo(this.data.getFlightId()).subscribe((data: any) => {
      console.log(data);
    })
    this.router.navigate(['flights'])
  }
  postPromo(){

  }

}
