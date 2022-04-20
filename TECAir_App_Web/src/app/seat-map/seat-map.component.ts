import { Component, OnInit } from '@angular/core';
import { SeatI } from '../models/seat.interface';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-seat-map',
  templateUrl: './seat-map.component.html',
  styleUrls: ['./seat-map.component.css']
})
export class SeatMapComponent implements OnInit {

  flights: string[] = ["one", "two"];
  // aircraft: number[][] = [[1, 1, 0, 2, 1, 0, 1], [1, 1, 0, 2, 1, 0, 1],
  // [1, 1, 0, 2, 1, 0, 1], [1, 1, 0, 2, 1, 0, 1],
  // [1, 1, 0, 2, 1, 0, 1], [1, 1, 0, 2, 1, 0, 1],
  // [1, 1, 0, 2, 1, 0, 1], [1, 1, 0, 2, 1, 0, 1],
  // [1, 1, 0, 2, 1, 0, 1], [1, 1, 0, 2, 1, 0, 1],
  // [1, 1, 0, 2, 1, 0, 1], [1, 1, 0, 2, 1, 0, 1],
  // [1, 1, 0, 2, 1, 0, 1], [1, 1, 0, 2, 1, 0, 1],
  // [1, 1, 0, 2, 1, 0, 1], [1, 1, 0, 2, 1, 0, 1],
  // [1, 1, 0, 2, 1, 0, 1], [1, 1, 0, 2, 1, 0, 1],
  // [1, 1, 0, 2, 1, 0, 1], [1, 1, 0, 2, 1, 0, 1],
  // [1, 1, 0, 2, 1, 0, 1], [1, 1, 0, 2, 1, 0, 1],
  // [1, 1, 0, 2, 1, 0, 1], [1, 1, 0, 2, 1, 0, 1],
  // [1, 1, 0, 2, 1, 0, 1], [1, 1, 0, 2, 1, 0, 1],
  // [1, 1, 0, 2, 1, 0, 1], [1, 1, 0, 2, 1, 0, 1],
  // [1, 1, 0, 2, 1, 0, 1], [1, 1, 0, 2, 1, 0, 1],
  // [1, 1, 0, 2, 1, 0, 1], [1, 1, 0, 2, 1, 0, 1],
  // [1, 1, 0, 2, 1, 0, 1], [1, 1, 0, 2, 1, 0, 1],
  // [1, 1, 0, 2, 1, 0, 1], [1, 1, 0, 2, 1, 0, 1],]; //36 rows.

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

        console.log(array);
        this.aircraft.push(array);
      }

    }
  }

  countSeatsUnavailables() {

    let count = 0;
    let unavailable: number[] = [];
    this.aircraft.forEach((element) => {
      element.forEach((j) => {
        if (j == 1) {
          count++;
        }
      })
      unavailable.push(count);
      count = 0;
    })

    return unavailable;
  }

  pickSeat(i: any, j: any) {
    //console.log("selected.")
    let pos = this.setPos(i, j);
    // console.log("seatsA:" + this.countSeatsAvailables());
    // console.log("pos i:" + i);
    // console.log("pos j:" + j);
    // console.log("pos: " + pos);
    let seat = document.getElementsByClassName('square') as HTMLCollectionOf<HTMLElement>;
    seat[pos].style.backgroundColor = "#213dad";

  }

  setPos(i: any, j: any) {
    let seatsOccupied = this.countSeatsUnavailables();
    let col = 6 - seatsOccupied[i];
    let pos = 0;
    //let rows = 35;
    let newJ = this.transformIndex(i, j);


    for (let x = 0; x < i; x++) {
      pos += col;
    }
    pos = pos + newJ;

    return pos;
  }
  transformIndex(i: any, j: any) {
    let newJ = 0;
    let breakError = {};
    let seatsAvailables = this.countSeatsAvailables();

    try {
      seatsAvailables[i].forEach((element) => {
        if (element == j) {
          throw breakError;
        } else {
          newJ++;
        }
      })

    } catch (error) {

      if (error !== breakError) throw error;

    }


    return newJ;

  }
  countSeatsAvailables() {

    let jp = 0;
    let available: number[][] = [];
    let arr: number[] = [];
    this.aircraft.forEach((element) => {

      element.forEach((j) => {
        if (j == 0) {
          arr.push(jp);
          jp++;
        } else { jp++; }
      })
      available.push(arr);
      jp = 0;
      //i++;
    })

    return available;
  }

}
