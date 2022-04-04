import { Host, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckOutComponent } from './check-out/check-out.component';
import { ChooseFlightsComponent } from './choose-flights/choose-flights.component';
import { ChooseTravelersComponent } from './choose-travelers/choose-travelers.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SeatMapComponent } from './seat-map/seat-map.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/sign-up" },
  { path: "sign-up", component: SignUpComponent },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "choose-flights", component: ChooseFlightsComponent },
  { path: "choose-travelers", component: ChooseTravelersComponent },
  { path: "seat-map", component: SeatMapComponent },
  { path: "check-out", component: CheckOutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
