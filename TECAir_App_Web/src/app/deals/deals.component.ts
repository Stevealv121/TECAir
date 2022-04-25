import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
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

  constructor(private api: ApiService, private router: Router, private data: DataService, private app: AppComponent) {
    // this.dealsMatrix = [];
    this.app.registerView = 'regView1';
  }

  ngOnInit(): void {
    this.getAllDeals();
  }

  /**
   * Get all the deals.
   */
  async getAllDeals() {
    this.api.getPromotions().subscribe(data => {
      this.allDeals = data;
    });
    await new Promise(f => setTimeout(f, 200));

    this.populateDealsMatrix();
  }

  /**
   * It fills the matrix with all the retrieved deals.
   */
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

  /**
   * Book the selected deal.
   * @param code promotion code.
   */
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

  /**
   * Set all the stopovers from the flight selected.
   * @param id flight id.
   */
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

  /**
   * Get all the flight information. It includes: Flight,Route,Stopovers and Airplane.
   */
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
      this.data.airplane_plate = this.airplane.plate;
    });
    await new Promise(f => (setTimeout(f, 500)));
    this.data.flightNumber = this.setFlightNumber(this.route.origin, this.route.destination);
    console.log(this.data.flightNumber);
  }


  /**
   * Set flight number.
   * @param city name
   * @param country name
   * @returns 
   */
  setFlightNumber(city: string, country: string) {
    let min = 100;
    let max = 999;
    min = Math.ceil(min);
    max = Math.floor(max);
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    let flightNumber = city[0] + country[0] + "-" + randomNumber.toString();
    return flightNumber;
  }

  /**
   * Set the flight date.
   * @returns date with format mm/dd/yyyy
   */
  setDate(): string {
    return this.route.month.toString() + "/" + this.route.day.toString() + "/" + this.route.year.toString();
  }

  /**
   * Get the three top deals.
   * @param n_deals number of all the deals in the database.
   */
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
