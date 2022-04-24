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
  /**
   * This funcition is the contructor of the component
   * @param router Router object type. Injects the Router to the component
   * @param data DataService object type. Injects the data service to the component
   * @param api Api object type. Injects the API service to the component
   */
  constructor(private router: Router, private data: DataServiceService, private api : ApiService) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.scales =[];
    this.flightInfo = this.data.getFlightInfo();
    this.flightPromo =[];
    this.newPromo = {};
    this.apply = null;
    this.promoId =0;
   }
   /**
   * This function intialize the elements of the component
   */
  ngOnInit(): void {
    this.getScales();
    this.getPromo();
  }
  /**
   * This function takes back the user to the flight component
   */
  goBack(){
    this.router.navigate(['flights'])
  }
  /**
   * This function asks the API for the flight's scales in the data base
   */
  getScales(){
    this.api.getScales(this.data.getFlightId()).subscribe((data: any) => {
      this.scales =data;
    })
  }
  /**
   * This function asks the API for the flight's promotions in the data base
   */
  getPromo(){
    this.api.getFlightPromo(this.data.getFlightId()).subscribe((data: any) => {
      this.flightPromo =data;
    })
  }
  /**
   * This function takes back the user to the OpenFlight component
   */
  openFlight(){
    this.router.navigate(['OpenFlight'])
  }
  /**
   * This function takes back the user to the Closedflight component
   */
  closeFlight(){
    this.router.navigate(['ClosedFlight'])
  }
  /**
   * This function asks the API to create a new promotion for the flight in the data base
   * @param title string with the promotion's title
   * @param description string with the promotion's information
   * @param date string with the promotion's expiration
   * @param discount string with the discount precentage
   */
  async createPromo(title:string, description: string, date: string, discount:string){
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
    await new Promise(f => setTimeout(f, 500))
    this.ngOnInit()

  }
  /**
   * This function asks the api to delete a promo according its flight id
   */
  async deletePromo(){
    this.api.deleteFlightPromo(this.data.getFlightId()).subscribe((data: any) => {
      console.log(data);
    })
    await new Promise(f => setTimeout(f, 500))
    this.ngOnInit()
  }

}
