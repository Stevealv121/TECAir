import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaggageCreationComponent } from './baggage/baggage-creation/baggage-creation.component';
import { BaggageComponent } from './baggage/baggage.component';
import { BookTripComponent } from './book-trip/book-trip.component';
import { FlightManagementComponent } from './flights/flight-management/flight-management.component';
import { FlightsInfoComponent } from './flights/flights-info/flights-info.component';
import { FlightsComponent } from './flights/flights.component';
import { RoutesComponent } from './routes/routes.component';

const routes: Routes = [
  { path: "baggage", component: BaggageComponent},
  { path: "baggageCreation", component: BaggageCreationComponent},
  {path:"booking", component: BookTripComponent},
  {path:"flights", component:FlightsComponent},
  {path:"flightsManagement", component:FlightManagementComponent},
  {path: "flightsInfo", component:FlightsInfoComponent},
  {path: "routes", component:RoutesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
