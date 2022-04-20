import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';
import { SeatI } from '../models/seat.interface';
import { ApiService } from '../services/api.service';

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

  constructor(private api: ApiService) { }

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
      seat[i].addEventListener('click', changeColor)
    }
  }

}

function changeColor(this: any) {
  this.style.backgroundColor = "#213dad";
}

