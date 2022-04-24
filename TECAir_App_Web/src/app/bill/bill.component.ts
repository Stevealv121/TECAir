import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { UserI} from '../models/user.interface';
import { StopOver } from '../models/stopOver';
import jsPDF from 'jspdf';
import { Router } from '@angular/router';


@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  @ViewChild('content', {static: false}) el!: ElementRef;
  flightNumber:string;
  plate: string;
  seat: string[];
  date:string;
  user:UserI;
  scales: StopOver[];
  origin: string;
  destination: string;

  constructor(private data:DataService, private router:Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.flightNumber = this.data.flightNumber;
    this.plate = this.data.selectedAirplane;
    this.seat = this.data.selectedSeats;
    this.date = this.data.date;
    this.user = this.data.getUser();
    console.log(this.user)
    this.scales = this.data.stopOvers;
    this.origin = this.data.origin;
    this.destination = this.data.destination;

  }

  ngOnInit(): void {
  }
  /**
   * This Function downloads the bill
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
   * This function takes back the user to the home component
   */
  goBack(){
    this.router.navigate(['home']);
  }

}
