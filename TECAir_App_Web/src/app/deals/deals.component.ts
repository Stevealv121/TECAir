import { Component, OnInit } from '@angular/core';
import { PromotionI } from '../models/promotion.interface';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {

  promos: number[] = [1, 2, 3];
  group: number[] = [1, 2];
  dealsMatrix: PromotionI[][] = [];
  topDeals: PromotionI[] = [];
  allDeals: PromotionI[] = [];

  constructor(private api: ApiService) {
    // this.dealsMatrix = [];
  }

  ngOnInit(): void {
    this.getAllDeals();
  }

  async getAllDeals() {
    this.api.getPromotions().subscribe(data => {
      this.allDeals = data;
    });
    await new Promise(f => setTimeout(f, 200));

    this.populateDealsMatrix();
  }

  populateDealsMatrix() {
    let n_deals = this.allDeals.length;
    this.getTopDeals(n_deals);
    for (let i = 3; i < n_deals; i++) {

      if (i % 3 == 0) {
        let n = i % 3;
        let group = [];
        for (let is = 0; is <= n; is++) {
          group.push(this.allDeals[i]);
        }
        this.dealsMatrix.push(group);
      }
    }

  }

  getTopDeals(n_deals: number) {
    if (n_deals < 3) {
      alert("Couldn't connect with the database");
      console.log("Error: There is no at least three promotions.")
    } else {
      for (let i = 0; i < 3; i++) {
        this.topDeals.push(this.allDeals[i]);
      }

    }
  }


}
