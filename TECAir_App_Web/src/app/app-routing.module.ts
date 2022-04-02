import { Host, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseFlightsComponent } from './choose-flights/choose-flights.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/sign-up" },
  { path: "sign-up", component: SignUpComponent },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "choose-flights", component: ChooseFlightsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
