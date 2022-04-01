import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaggageComponent } from './baggage/baggage.component';

const routes: Routes = [
  { path: "baggage", component: BaggageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
