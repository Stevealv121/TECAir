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
    //console.log("seatsA:" + this.countSeatsAvailables());
    console.log("pos i:" + i);
    console.log("pos j:" + j);
    console.log("pos: " + pos);
    let seat = document.getElementsByClassName('square') as HTMLCollectionOf<HTMLElement>;
    seat[pos].style.backgroundColor = "#213dad";

  }

  setPos(i: any, j: any) {
    //i:2,j:2 -> last
    //i:2,j:5 -> next
    let seatsOccupied = this.countSeatsUnavailables();
    let col = 6 - seatsOccupied[i];
    let pos = 0;
    let rows = 35;
    let row = 0
    let nj = (col - 1);
    let seatsAvailables = this.countSeatsAvailables();
    for (let x = 0; x < i; x++) {
      pos += col;
    }
    // for (let y = 0; y < j; y++) {
    //   row += (col - 1);
    // }
    pos = pos + row;

    return pos;
  }
  countSeatsAvailables() {

    let count = 0;
    let i = 0;
    let jp = 0;
    let available: number[][] = [];
    this.aircraft.forEach((element) => {
      let arr: number[] = [];
      element.forEach((j) => {
        if (j == 0) {
          count++;
        }

        arr.push(count);
        jp++;
      })
      //available[i].push(arr[jp]);
      count = 0;
      i++;
    })

    return available;
  }

}
