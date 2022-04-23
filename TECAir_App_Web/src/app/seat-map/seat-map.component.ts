import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';
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

  flights: string[] = ["one", "two"];
  // aircraft: number[][] = [[0, 0, 0, 2, 0, 0, 0], [0, 0, 0, 2, 0, 0, 0],
  // [0, 0, 0, 2, 0, 0, 0], [0, 0, 0, 2, 0, 0, 0],
  // [0, 0, 0, 2, 0, 0, 0], [0, 0, 0, 2, 0, 0, 0],
  // [0, 0, 0, 2, 0, 0, 0], [0, 0, 0, 2, 0, 0, 0],
  // [0, 0, 0, 2, 0, 0, 0], [0, 0, 0, 2, 0, 0, 0],
  // [0, 0, 0, 2, 0, 0, 0], [0, 0, 0, 2, 0, 0, 0],
  // [0, 0, 0, 2, 0, 0, 0], [0, 0, 0, 2, 0, 0, 0],
  // [0, 0, 0, 2, 0, 0, 0], [0, 0, 0, 2, 0, 0, 0],
  // [0, 0, 0, 2, 0, 0, 0], [0, 0, 0, 2, 0, 0, 0],
  // [0, 0, 0, 2, 0, 0, 0], [0, 0, 0, 2, 0, 0, 0],
  // [0, 0, 0, 2, 0, 0, 0], [0, 0, 0, 2, 0, 0, 0],
  // [0, 0, 0, 2, 0, 0, 0], [0, 0, 0, 2, 0, 0, 0],
  // [0, 0, 0, 2, 0, 0, 0], [0, 0, 0, 2, 0, 0, 0],
  // [0, 0, 0, 2, 0, 0, 0], [0, 0, 0, 2, 0, 0, 0],
  // [0, 0, 0, 2, 0, 0, 0], [0, 0, 0, 2, 0, 0, 0],
  // [0, 0, 0, 2, 0, 0, 0], [0, 0, 0, 2, 0, 0, 0],
  // [0, 0, 0, 2, 0, 0, 0], [0, 0, 0, 2, 0, 0, 0],
  // [0, 0, 0, 2, 0, 0, 0], [0, 0, 1, 2, 1, 1, 1]]; //36 rows.

  aircraft: number[][] = [];
  date: string = "";
  flight: string = "";
  airplane: string = "";
  origin: string = "";
  destination: string = "";
  seatRow: string[] = ["1", "2", "3", "F", "1", "2", "3"];
  seatCol: string[] = ["A", "B", "C", "N", "D", "E", "F"];


  constructor(private api: ApiService, private data: DataService) {
    this.date = this.data.date;
    this.flight = this.data.flightNumber;
    this.airplane = this.data.selectedAirplane;
    this.origin = this.data.origin;
    this.destination = this.data.destination;
    numberOfTravelers = this.data.getNumberTravelers();
  }

  ngOnInit(): void {
    this.fillAircraft();
  }

  async fillAircraft() {
    //TODO: fill seats for a specific airplane.
    let seats: SeatI | any[] = [];
    this.api.getSeats().subscribe(data => {
      seats = data;
    })
    await new Promise(f => (setTimeout(f, 400)));

    for (let i = 0; i < seats.length; i++) {
      let n = i % 6;
      if (n == 0) {
        let array: number[] = [];
        for (let is = 0; is < 7; is++) {
          if (is == 3) {
            array.push(2);
          } else if (seats[i + is] === undefined) {
            array.push(1);
          } else if (seats[i + is].state == false) {
            array.push(1);
          } else if (seats[i + is].state == true) {
            array.push(0);
          }
        }
        this.aircraft.push(array);
      }

    }
  }

  pickSeat() {

    let seat = document.getElementsByClassName('square') as HTMLCollectionOf<HTMLElement>;
    var i;

    for (i = 0; i < seat.length; ++i) {
      seat[i].addEventListener('click', selectedSeat);
    }

    this.setDataSeats();
    console.log(selectedSeats);

  }

  setDataSeats() {
    this.data.selectedSeats = selectedSeats;
  }

}

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

