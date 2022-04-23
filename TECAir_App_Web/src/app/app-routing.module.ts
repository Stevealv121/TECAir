import { Host, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaggageCreationComponent } from './baggage/baggage-creation/baggage-creation.component';
import { BaggageComponent } from './baggage/baggage.component';
import { BookTripComponent } from './book-trip/book-trip.component';
import { FlightManagementComponent } from './flights/flight-management/flight-management.component';
import { FlightsInfoComponent } from './flights/flights-info/flights-info.component';
import { FlightsComponent } from './flights/flights.component';
import { RoutesComponent } from './routes/routes.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ChooseFlightsComponent } from './choose-flights/choose-flights.component';
import { ChooseTravelersComponent } from './choose-travelers/choose-travelers.component';

import { LoginComponent } from './login/login.component';
import { SeatMapComponent } from './seat-map/seat-map.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CreateRouteComponent } from './routes/create-route/create-route.component';
import { RouteEditComponent } from './routes/route-edit/route-edit.component';
import { FlightOpenComponent } from './reports/flight-open/flight-open.component';
import { FlightClosedComponent } from './reports/flight-closed/flight-closed.component';
import { HomeComponent } from './home/home.component';
import { DealsComponent } from './deals/deals.component';

const routes: Routes = [
  { path: "baggage", component: BaggageComponent },
  { path: "baggageCreation", component: BaggageCreationComponent },
  { path: "booking", component: BookTripComponent },
  { path: "flights", component: FlightsComponent },
  { path: "flightsManagement", component: FlightManagementComponent },
  { path: "flightsInfo", component: FlightsInfoComponent },
  { path: "routes", component: RoutesComponent },
  { path: "", pathMatch: "full", redirectTo: "/sign-up" },
  { path: "sign-up", component: SignUpComponent },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "choose-flights", component: ChooseFlightsComponent },
  { path: "choose-travelers", component: ChooseTravelersComponent },
  { path: "seat-map", component: SeatMapComponent },
  { path: "check-out", component: CheckOutComponent },
  { path: "routeCreation", component: CreateRouteComponent },
  { path: "RouteEdit", component: RouteEditComponent },
  { path: "OpenFlight", component: FlightOpenComponent },
  { path: "ClosedFlight", component: FlightClosedComponent },
  { path: "deals", component: DealsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
