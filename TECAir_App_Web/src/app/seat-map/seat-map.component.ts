import { HttpClient, HttpHandler } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';
import { AppComponent } from '../app.component';
import { SeatI } from '../models/seat.interface';
import { ApiService } from '../services/api.service';
import { DataService } from '../services/data.service';

let selectedSeats: string[] = [];
let countSelectedSeats: number = 0;
let numberOfTravelers: number = 0;

@Component({
  selector: 'app-seat-map',
  templateUrl: './seat-map.component.html',
  styleUrls: ['./seat-map.component.css']
})
export class SeatMapComponent implements OnInit {

  aircraft: number[][] = [];
  date: string = "";
  flight: string = "";
  airplane: string = "";
  origin: string = "";
  destination: string = "";
  duration: string = "";
  seatRow: string[] = ["1", "2", "3", "F", "1", "2", "3"];
  seatCol: string[] = ["A", "B", "C", "N", "D", "E", "F"];
  seats: SeatI[] = [];
  seatsNames: string[] = [];
  subTotal: number = 0;


  constructor(public api: ApiService, private data: DataService, private app: AppComponent) {
    if (this.data.admin) {
      this.app.registerView = 'regView2';
    } else {
      this.app.registerView = 'regView1';
    }
    this.date = this.data.date;
    this.flight = this.data.flightNumber;
    this.airplane = this.data.selectedAirplane;
    this.origin = this.data.origin;
    this.destination = this.data.destination;
    this.duration = this.data.duration;
    numberOfTravelers = this.data.getNumberTravelers();
    this.subTotal = this.data.total_due;
  }

  ngOnInit(): void {
    this.fillAircraft();
  }

  /**
   * Fills the airplane with all the seats.
   */
  async fillAircraft() {
    this.api.getSeats(this.data.airplane_plate).subscribe(data => {
      this.seats = data;
    })
    await new Promise(f => (setTimeout(f, 400)));

    //this.setSeatsNames();

    for (let i = 0; i < this.seats.length; i++) {
      let n = i % 6;
      if (n == 0) {
        let array: number[] = [];
        for (let is = 0; is < 7; is++) {
          if (is == 3) {
            array.push(2);
          } else if (this.seats[i + is] === undefined) {
            array.push(1);
            this.seatsNames.push(this.seatCol[is] + "-" + this.seatRow[i]);
          } else if (this.seats[i + is].state == false) {
            array.push(1);
            this.seatsNames.push(this.seatCol[is] + "-" + this.seatRow[i]);
          } else if (this.seats[i + is].state == true) {
            array.push(0);
            this.seatsNames.push(this.seatCol[is] + "-" + this.seatRow[i]);
          }
        }
        this.aircraft.push(array);
      }

    }
  }

  /**
   * Select the desired seat.
   */
  pickSeat() {

    let seat = document.getElementsByClassName('square') as HTMLCollectionOf<HTMLElement>;
    var i;

    for (i = 0; i < seat.length; ++i) {
      seat[i].addEventListener('click', selectedSeat);
    }

    this.setDataSeats();
    console.log(selectedSeats);
    this.updateSeat();
    console.log(this.seatsNames);

  }

  /**
   * Set a name for each seat. For example: seat "A-1".
   */
  setSeatsNames() {
    let seat = document.getElementsByClassName('square') as HTMLCollectionOf<HTMLElement>;
    var i;

    for (i = 0; i < seat.length; ++i) {
      this.seatsNames.push(seat[i].getElementsByTagName('p')[0].innerHTML);
    }
  }

  /**
   * Set the selected seat.
   */
  setDataSeats() {
    this.data.selectedSeats = selectedSeats;
  }

  /**
   * Update the seat status. And assigns an user to the selected seat.
   */
  async updateSeat() {

    for (let i = 0; i < this.seats.length; i++) {
      if (this.seatsNames[i] == selectedSeats[0]) {
        let seat: SeatI;
        seat = this.seats[i];
        seat.state = false;
        seat.user_id = this.data.user.id;
        //console.log(seat);
        this.api.UpdateSeat(seat).subscribe(data => seat = data);
        await new Promise(f => (setTimeout(f, 300)));
        console.log("seat updated");
      }
    }

  }

}

/**
 * Select a seat.
 * @param this Seat
 */
function selectedSeat(this: any) {
  if (numberOfTravelers <= countSelectedSeats) {
    alert("You already have selected the seats for all the travelers.");
  } else {
    this.style.backgroundColor = "#213dad";
    this.style.color = "white";
    let seatName = this.getElementsByTagName('p')[0].innerHTML;
    selectedSeats.push(seatName);
    countSelectedSeats++;

  }

}

