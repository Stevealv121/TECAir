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
  /**
   * This function is the constructor of the component
   * @param router Router type object.
   * @param api  injects the api service to the component
   */
  constructor(private router:Router, private api:ApiService) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.baggage=null;
    this.users = [];
    this.owner = null;
    this.flights=[];
  }
  /**
   * This function intialize the elements of the component
   */
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
  /**
   * This function asks the API for registered users
   */
  getUsers(){
    this.api.getUsers().subscribe((data: any) => {
      this.users=data;
    })
  }
  /**
   * This function asks the API for registered flights
   */
  getflights(){
    this.api.getFlights().subscribe((data: any) => {
      this.flights =data;
    })
  }
  /**
   * This function post the new baggage on the data base and takes back to the flight component
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
        flight_id:Number(id[0]),
        flight: null,
        baggage:null,
        user:null
      }
      this.api.postHas(this.owner).subscribe((data: any)=>{
        console.log(data);
      })
    })
    await new Promise(f => setTimeout(f, 500))
    this.goBack()
  }

}
