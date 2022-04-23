import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BaggageModel } from 'src/app/models/baggage-model';
import { Flight } from 'src/app/models/flight';
import { Has } from 'src/app/models/has';
import { UserI } from 'src/app/models/user.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-baggage-creation',
  templateUrl: './baggage-creation.component.html',
  styleUrls: ['./baggage-creation.component.css']
})
export class BaggageCreationComponent implements OnInit {

  baggage:BaggageModel|null;
  owner:Has|null;
  users: UserI[];
  flights: Flight[];
  constructor(private router:Router, private api:ApiService) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.baggage=null;
    this.users = [];
    this.owner = null;
    this.flights=[];
  }

  ngOnInit(): void {
    this.getUsers()
    this.getflights()
  }
  /**
   * This function takes back to the Baggage component
   */
  goBack(){
    this.router.navigate(['baggage']);
  }
  getUsers(){
    this.api.getUsers().subscribe((data: any) => {
      this.users=data;
    })
  }
  getflights(){
    this.api.getFlights().subscribe((data: any) => {
      this.flights =data;
    })
  }
  /**
   * Post the suitcase in the Data Base
   */
  async postSuitCase(user:string, color:string, weight:string, flightId:string){
    var splitted = user.split(" ", 3);
    this.baggage ={
      id:0,
      color: color,
      weight: Number(weight)
    }
    this.api.postBaggage(this.baggage).subscribe((data: any) => {
      var id = flightId.split(" ", 3);
      this.owner={
        baggage_id:data,
        user_id: Number(splitted[0]),
        price:0,
        flight_id:Number(id[0])
      }
      this.api.postHas(this.owner).subscribe((data: any)=>{
        console.log(data);
      })
    })
    await new Promise(f => setTimeout(f, 500))
    this.goBack()
  }

}
