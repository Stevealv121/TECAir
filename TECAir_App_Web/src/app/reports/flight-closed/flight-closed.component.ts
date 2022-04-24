import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FlightBaggage } from 'src/app/models/flight-baggage';
import { FlightPassengers } from 'src/app/models/flight-passengers';
import { ApiService } from 'src/app/services/api.service';
import jsPDF from 'jspdf';
import { DataServiceService } from 'src/app/services/data-service.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-flight-closed',
  templateUrl: './flight-closed.component.html',
  styleUrls: ['./flight-closed.component.css']
})
export class FlightClosedComponent implements OnInit {
  @ViewChild('content', { static: false }) el!: ElementRef;

  passengers: FlightPassengers[];
  baggage: FlightBaggage[];
  capacity:number;
  /**
   * This funcition is the contructor of the component
   * @param router Router object type. Injects the Router to the component
   * @param data DataService object type. Injects the data service to the component
   * @param api Api object type. Injects the API service to the component
   */
  constructor(private router: Router, private data: DataServiceService, private api: ApiService, private app: AppComponent) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.passengers =[];
    this.baggage =[];
    this.capacity=0;
   }
  /**
   * This function intialize the elements of the component
   */
  ngOnInit(): void {
    this.getPassengers();
    this.getBaggage();
    this.getCapacity();
  }
  /**
   * This function asks the API for the flight's passengers in the data base
   */
  getPassengers(){
    this.api.getFlightPassengers(this.data.getFlightId()).subscribe((data: any) => {
      this.passengers = data;
    })

  }
  /**
   * This function asks the API for the flight's capacity in the data base
   */
  getCapacity(){
    this.api.getFlightCapacity(this.data.getFlightId()).subscribe((data: any) => {
      this.capacity = data;
    })
  }
  /**
   * This function asks the API for the flight's baggage in the data base
   */
  getBaggage(){
    this.api.getFlightBaggage(this.data.getFlightId()).subscribe((data: any) => {
      this.baggage = data;
    })
  }
  /**
   * This function takes the html and makes a pdf with the information
   */
  downloadPDF(){
    let pdf = new jsPDF('p','pt','a4');
    pdf.html(this.el.nativeElement,{
      callback: (pdf) => {
        pdf.save("Informe del Vuelo.pdf");
      }
    })
  }
  /**
   * This function takes back the user to the flightsInfo component
   */
  goBack(){
    this.router.navigate(['flightsInfo'])
  }

}
