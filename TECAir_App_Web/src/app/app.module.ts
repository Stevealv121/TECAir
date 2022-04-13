import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaggageComponent } from './baggage/baggage.component';
import { BaggageCreationComponent } from './baggage/baggage-creation/baggage-creation.component';
import { BookTripComponent } from './book-trip/book-trip.component';
import { FlightManagementComponent } from './flights/flight-management/flight-management.component';
import { FlightsComponent } from './flights/flights.component';
import { FlightsInfoComponent } from './flights/flights-info/flights-info.component';
import { RoutesComponent } from './routes/routes.component';

@NgModule({
  declarations: [
    AppComponent,
    BaggageComponent,
    BaggageCreationComponent,
    BookTripComponent,
    FlightManagementComponent,
    FlightsComponent,
    FlightsInfoComponent,
    RoutesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
