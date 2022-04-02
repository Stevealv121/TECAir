import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-travelers',
  templateUrl: './choose-travelers.component.html',
  styleUrls: ['./choose-travelers.component.css']
})
export class ChooseTravelersComponent implements OnInit {

  travelers: string[] = ["Samuel"];

  constructor() { }

  ngOnInit(): void {
  }

}
