import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { ChooseFlightsComponent } from './choose-flights/choose-flights.component';
import { ChooseTravelersComponent } from './choose-travelers/choose-travelers.component';
import { SeatMapComponent } from './seat-map/seat-map.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { CreateRouteComponent } from './routes/create-route/create-route.component';
import { RouteEditComponent } from './routes/route-edit/route-edit.component';
import { FlightOpenComponent } from './reports/flight-open/flight-open.component';
import { FlightClosedComponent } from './reports/flight-closed/flight-closed.component';
import { HomeComponent } from './home/home.component';
import { DealsComponent } from './deals/deals.component';

@NgModule({
  declarations: [
    BaggageComponent,
    BaggageCreationComponent,
    BookTripComponent,
    FlightManagementComponent,
    FlightsComponent,
    FlightsInfoComponent,
    RoutesComponent,
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    ChooseFlightsComponent,
    ChooseTravelersComponent,
    SeatMapComponent,
    CheckOutComponent,
    CreateRouteComponent,
    RouteEditComponent,
    FlightOpenComponent,
    FlightClosedComponent,
    DealsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatMomentDateModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
