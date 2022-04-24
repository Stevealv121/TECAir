import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { BaggageModel } from '../models/baggage-model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-baggage',
  templateUrl: './baggage.component.html',
  styleUrls: ['./baggage.component.css']
})
export class BaggageComponent implements OnInit {


  baggage:BaggageModel[];
  /**
   * This funcition is the contructor of the component
   * @param api Api object type. Injects the API service to the component
   * @param router Router object type. Injects the Router to the component
   */
  constructor(private api: ApiService, private router: Router, private app: AppComponent) {


    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.baggage = [];
    this.app.registerView = 'regView2';

   }
   /**
   * This function intialize the elements of the component
   */
  ngOnInit(): void {
    this.getBaggage();
  }
  /**
   * This function asks the API for the baggage in the data base
   */
  getBaggage(){
    this.api.getBaggage().subscribe((data: any) => {
      this.baggage = data;
    })
  }
  /**
   * This function asks the API to delete a baggage according to its id
   * @param id Baggage's Number
   */
  async deleteBaggage(id:number){
    this.api.deleteHas(id).subscribe((data: any) => {
      console.log(data)
    })
    this.api.deleteBaggage(id).subscribe((data:any)=>{
      console.log(data)
    })
    await new Promise(f => setTimeout(f, 500))
    this.ngOnInit();
  }

}
