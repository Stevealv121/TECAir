import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Baggage } from 'src/app/models/baggage';

@Component({
  selector: 'app-baggage-creation',
  templateUrl: './baggage-creation.component.html',
  styleUrls: ['./baggage-creation.component.css']
})
export class BaggageCreationComponent implements OnInit {

  baggageForm = new FormGroup({
    id: new FormControl(''),
    userId: new FormControl(''),
    color: new FormControl(''),
    weight: new FormControl('')
  })

  constructor(private router:Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
  }
  /**
   * This function takes back to the Baggage component
   */
  goBack(){
    this.router.navigate(['baggage']);
  }
  /**
   * Post the suitcase in the Data Base
   */
  async postSuitCase(form: Baggage){
    this.goBack()
  }

}
