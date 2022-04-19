import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TravelerI } from '../models/traveler.interface';
import { UserI } from '../models/user.interface';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-choose-travelers',
  templateUrl: './choose-travelers.component.html',
  styleUrls: ['./choose-travelers.component.css']
})
export class ChooseTravelersComponent implements OnInit {

  travelers: number[] = [];
  user!: UserI;
  usersForm!: FormGroup;
  errorMessage!: string | null;
  usersBooked: TravelerI[] = [];
  travelerForm = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    middle_name: new FormControl(''),
    date_birth: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    suffix: new FormControl('')
  })

  constructor(private data: DataService, private formBuilder: FormBuilder, private router: Router) {
    this.user = this.data.getUser();
    if (this.user !== undefined) {
      this.travelerForm.patchValue({ first_name: this.user.first_name });
      // this.travelerForm.patchValue({ middle_name: this.user.second_name });
      this.travelerForm.patchValue({ last_name: this.user.first_surname });
    }

  }

  ngOnInit(): void {
    this.getTravelers();
  }

  getTravelers() {
    let travelers = this.data.getNumberTravelers();
    for (let i = 1; i < travelers; i++) {
      this.travelers.push(i);
    }
  }

  continueSeats(form: TravelerI) {

    this.usersBooked.push(form);
    console.log(this.usersBooked);

    this.router.navigateByUrl("/seat-map");
  }

}
