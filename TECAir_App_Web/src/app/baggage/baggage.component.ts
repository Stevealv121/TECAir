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
  deleteBaggage(id:number){
    //this.api.getBaggage().subscribe((data: any) => {

    //})
  }

}
