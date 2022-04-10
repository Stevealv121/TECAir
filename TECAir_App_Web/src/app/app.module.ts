import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaggageComponent } from './baggage/baggage.component';
import { BaggageCreationComponent } from './baggage/baggage-creation/baggage-creation.component';

@NgModule({
  declarations: [
    AppComponent,
    BaggageComponent,
    BaggageCreationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
