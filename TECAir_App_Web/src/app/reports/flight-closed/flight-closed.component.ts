import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FlightBaggage } from 'src/app/models/flight-baggage';
import { FlightPassengers } from 'src/app/models/flight-passengers';
import { ApiService } from 'src/app/services/api.service';
import jsPDF from 'jspdf';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-flight-closed',
  templateUrl: './flight-closed.component.html',
  styleUrls: ['./flight-closed.component.css']
})
export class FlightClosedComponent implements OnInit {
  @ViewChild('content', {static: false}) el!: ElementRef;

  passengers: FlightPassengers[];
  baggage: FlightBaggage[];
  capacity:number;

  constructor(private router: Router, private data:DataServiceService, private api:ApiService) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.passengers =[];
    this.baggage =[];
    this.capacity=0;
   }

  ngOnInit(): void {
    this.getPassengers();
    this.getBaggage();
    this.getCapacity();
  }

  getPassengers(){
    this.api.getFlightPassengers(this.data.getFlightId()).subscribe((data: any) => {
      this.passengers =data;
    })

  }
  getCapacity(){
    this.api.getFlightCapacity(this.data.getFlightId()).subscribe((data: any) => {
      this.capacity =data;
    })
  }
  getBaggage(){
    this.api.getFlightBaggage(this.data.getFlightId()).subscribe((data: any) => {
      this.baggage =data;
    })
  }
  downloadPDF(){
    let pdf = new jsPDF('p','pt','a4');
    pdf.html(this.el.nativeElement,{
      callback: (pdf) => {
        pdf.save("Informe del Vuelo.pdf");
      }
    })
    this.goBack();
  }
  goBack(){
    this.router.navigate(['flightsInfo'])
  }

}
