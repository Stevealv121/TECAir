import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { BaggageModel } from 'src/app/models/baggage-model';
import { Has } from 'src/app/models/has';
import { UserI } from 'src/app/models/user.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-baggage-creation',
  templateUrl: './baggage-creation.component.html',
  styleUrls: ['./baggage-creation.component.css']
})
export class BaggageCreationComponent implements OnInit {

  baggage: BaggageModel | null;
  owner: Has | null;
  users: UserI[];
  constructor(private router: Router, private api: ApiService, private app: AppComponent) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.baggage = null;
    this.users = [];
    this.owner = null;
    this.app.registerView = 'regView2';
  }

  ngOnInit(): void {
    this.getUsers()
  }
  /**
   * This function takes back to the Baggage component
   */
  goBack() {
    this.router.navigate(['baggage']);
  }
  getUsers() {
    this.api.getUsers().subscribe((data: any) => {
      this.users = data;
    })
  }
  /**
   * Post the suitcase in the Data Base
   */
  postSuitCase(user: string, color: string, weight: string) {
    var splitted = user.split(" ", 3);
    this.baggage = {
      id: 0,
      color: color,
      weight: Number(weight)
    }
    this.api.postBaggage(this.baggage).subscribe((data: any) => {

      this.owner = {
        baggage_id: data,
        user_id: Number(splitted[0]),
        price: 0
      }
      this.api.postHas(this.owner).subscribe((data: any) => {
        console.log(data);
      })
    })

    this.goBack()
  }

}
