import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Airplane } from '../models/airplane';
import { Flight } from '../models/flight';
import { PromotionI } from '../models/promotion.interface';
import { Routes } from '../models/routes';
import { StopOver } from '../models/stopOver';
import { ApiService } from '../services/api.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {

  promos: number[] = [1, 2, 3];
  group: number[] = [1, 2];
  dealsMatrix: PromotionI[][] = [];
  topDeals: PromotionI[] = [];
  allDeals: PromotionI[] = [];
  flight!: Flight;
  route!: Routes;
  //stepOvers: StopOver[] = [];
  airplane!: Airplane;
  numberOfStops: number = 0;
  hasStopOvers: boolean = false;
  flightNumber: string = '';
  stopOvers: StopOver[] = [];

  constructor(private api: ApiService, private router: Router, private data: DataService) {
    // this.dealsMatrix = [];
  }

  ngOnInit(): void {
    this.getAllDeals();
  }

  async getAllDeals() {
    this.api.getPromotions().subscribe(data => {
      this.allDeals = data;
    });
    await new Promise(f => setTimeout(f, 200));

    this.populateDealsMatrix();
  }

  populateDealsMatrix() {
    let n_deals = this.allDeals.length;
    this.getTopDeals(n_deals);
    for (let i = 3; i < n_deals; i++) {

      if (i % 3 == 0) {
        let n = i % 3;
        let group = [];
        for (let is = 0; is <= n; is++) {
          group.push(this.allDeals[i]);
        }
        this.dealsMatrix.push(group);
      }
    }

  }

  async bookNow(code: number) {

    this.api.getAppliesTo(code).subscribe(data => {
      this.data.iDflightSelected = +data[0];
    });
    await new Promise(f => (setTimeout(f, 300)));
    console.log(this.data.iDflightSelected);
    this.getFlightInfo();
    await new Promise(f => (setTimeout(f, 1000)));
    this.router.navigateByUrl('/choose-travelers');
  }

  async setStopsOfSelectedFlight(id: number) {
    this.api.getStopOvers(id.toString()).subscribe((data: any) => {
      for (let is = 0; is < data.length; is++) {
        var splitted = data[is].split(",");
        let city = splitted[0];
        let country = splitted[1];
        let duration = splitted[2];
        let flightNumber = this.setFlightNumber(city, country);
        // console.log("Iteration n: "+ i+);
        var stopOver = new StopOver(city, country, duration, flightNumber, id);
        this.stopOvers.push(stopOver);
        this.numberOfStops++;
      }
    });

    await new Promise(f => (setTimeout(f, 300)));
    console.log(this.stopOvers);
  }

  async getFlightInfo() {
    //console.log(this.data.iDflightSelected);
    this.api.selectFlight(this.data.iDflightSelected.toString()).subscribe(data => {
      this.flight = data;
      console.log(data);
    });
    await new Promise(f => (setTimeout(f, 500)));
    this.api.retrieveRoutes(this.flight.route_code.toString()).subscribe(data => {
      this.route = data;
    });
    await new Promise(f => (setTimeout(f, 500)));
    this.data.origin = this.route.origin;
    this.data.destination = this.route.destination;
    this.data.date = this.setDate();

    this.setStopsOfSelectedFlight(this.data.iDflightSelected);
    await new Promise(f => (setTimeout(f, 500)));
    this.data.stopOvers = this.stopOvers;
    console.log(this.stopOvers);
    this.data.numberOfStops = this.numberOfStops;

    this.api.getAirplane(this.flight.airplane_plate).subscribe(data => {
      this.airplane = data;
      this.data.selectedAirplane = this.airplane.model;
    });
    await new Promise(f => (setTimeout(f, 500)));
    this.data.flightNumber = this.setFlightNumber(this.route.origin, this.route.destination);
    console.log(this.data.flightNumber);
  }



  setFlightNumber(city: string, country: string) {
    let min = 100;
    let max = 999;
    min = Math.ceil(min);
    max = Math.floor(max);
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    let flightNumber = city[0] + country[0] + "-" + randomNumber.toString();
    return flightNumber;
  }

  setDate(): string {
    return this.route.month.toString() + "/" + this.route.day.toString() + "/" + this.route.year.toString();
  }

  getTopDeals(n_deals: number) {
    if (n_deals < 3) {
      alert("Couldn't connect with the database");
      console.log("Error: There is no at least three promotions.")
    } else {
      for (let i = 0; i < 3; i++) {
        this.topDeals.push(this.allDeals[i]);
      }

    }
  }


}
