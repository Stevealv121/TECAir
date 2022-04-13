import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {

  info: any

  constructor() {
    this.info = [["a","b","x","5","6","7","8"],["r","b","x","5","6","7","8"]]
  }

  ngOnInit(): void {
  }

  getInfo(dato:string){
    alert(dato)

  }

}
