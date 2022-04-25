import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './services/api.service';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
            <div class="open-card-BG" *ngIf="registerView == 'regView1'"><nav class="navbar navbar-expand-lg navbar-dark" style="background-color: rgb(5, 6, 63);">
            <div class="container-fluid">
              <a class="navbar-brand" routerLink="/home">TECAir</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" routerLink="/choose-flights">Book a Flight</a>
                  </li>
                  <li class="nav-item">
                  <a class="nav-link" routerLink="/deals">Deals</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          </div>
          <div class="open-card-BG" *ngIf="registerView == 'regView2'"><nav id="navbar"class="navbar navbar-expand-lg navbar-dark ">
          <div class="container-fluid">
            <a id = "nav-item" class="navbar-brand" routerLink="/choose-flights">TECAir</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a id = "nav-item" class="nav-link" routerLink="/choose-flights" >Book a trip</a>
                </li>
                <li class="nav-item">
                  <a id = "nav-item" class="nav-link" routerLink="/flights">Flight Management</a>
                </li>
                <li class="nav-item">
                  <a id = "nav-item" class="nav-link" routerLink="/baggage">Baggage</a>
                </li>
                <li class="nav-item">
                  <a id = "nav-item" class="nav-link" routerLink="/routes">Routes</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </div>
        <div class="open-card-BG" *ngIf="registerView == 'regView3'"><nav class="navbar navbar-expand-lg navbar-dark" style="background-color: rgb(5, 6, 63);">
            <div class="container-fluid">
              <a class="navbar-brand" routerLink="/home">TECAir</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <a class="nav-link disabled" routerLink="">Please login</a>
                </div>
              </div>
            </div>
          </nav>
          </div>
          <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TECAir_App_Web';
  registerView = 'regView1';

  constructor(private router: Router) {

  }

  toBook() {
    this.router.navigateByUrl("choose-flights");
  }
}
