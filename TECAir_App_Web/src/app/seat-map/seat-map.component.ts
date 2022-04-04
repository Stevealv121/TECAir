import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seat-map',
  templateUrl: './seat-map.component.html',
  styleUrls: ['./seat-map.component.css']
})
export class SeatMapComponent implements OnInit {

  flights: string[] = ["one", "two"];
  aircraft: number[][] = [[1, 1, 0, 2, 1, 0, 1], [1, 1, 0, 2, 1, 0, 1],
  [1, 1, 0, 2, 1, 0, 1], [1, 1, 0, 2, 1, 0, 1],
  [1, 1, 0, 2, 1, 0, 1], [1, 1, 0, 2, 1, 0, 1],
  [1, 1, 0, 2, 1, 0, 1], [1, 1, 0, 2, 1, 0, 1],
  [1, 1, 0, 2, 1, 0, 1], [1, 1, 0, 2, 1, 0, 1],
  [1, 1, 0, 2, 1, 0, 1], [1, 1, 0, 2, 1, 0, 1],
  [1, 1, 0, 2, 1, 0, 1], [1, 1, 0, 2, 1, 0, 1],
  [1, 1, 0, 2, 1, 0, 1], [1, 1, 0, 2, 1, 0, 1],
  [1, 1, 0, 2, 1, 0, 1], [1, 1, 0, 2, 1, 0, 1],
  [1, 1, 0, 2, 1, 0, 1], [1, 1, 0, 2, 1, 0, 1],
  [1, 1, 0, 2, 1, 0, 1], [1, 1, 0, 2, 1, 0, 1],
  [1, 1, 0, 2, 1, 0, 1], [1, 1, 0, 2, 1, 0, 1],
  [1, 1, 0, 2, 1, 0, 1], [1, 1, 0, 2, 1, 0, 1],
  [1, 1, 0, 2, 1, 0, 1], [1, 1, 0, 2, 1, 0, 1],
  [1, 1, 0, 2, 1, 0, 1], [1, 1, 0, 2, 1, 0, 1],
  [1, 1, 0, 2, 1, 0, 1], [1, 1, 0, 2, 1, 0, 1],
  [1, 1, 0, 2, 1, 0, 1], [1, 1, 0, 2, 1, 0, 1],
  [1, 1, 0, 2, 1, 0, 1], [1, 1, 0, 2, 1, 0, 1],]; //36 rows.
  constructor() { }

  ngOnInit(): void {
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
