import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaggageModel } from '../models/baggage-model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-baggage',
  templateUrl: './baggage.component.html',
  styleUrls: ['./baggage.component.css']
})
export class BaggageComponent implements OnInit {


  baggage:BaggageModel[];
  constructor(private api:ApiService, private router: Router) {


    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.baggage=[];

   }

  ngOnInit(): void {
    this.getBaggage();
  }

  getBaggage(){
    this.api.getBaggage().subscribe((data: any) => {
      this.baggage = data;
    })
  }
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
