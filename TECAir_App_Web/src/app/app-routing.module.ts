import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaggageCreationComponent } from './baggage/baggage-creation/baggage-creation.component';
import { BaggageComponent } from './baggage/baggage.component';

const routes: Routes = [
  { path: "baggage", component: BaggageComponent},
  { path: "baggageCreation", component: BaggageCreationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
