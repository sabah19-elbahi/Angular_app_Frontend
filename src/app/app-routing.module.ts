import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {AllCustomersComponent} from './all-customers/all-customers.component';
import {AllUsersComponent} from './all-users/all-users.component';
import {ChartsComponent} from './charts/charts.component';
import {EmChartsComponent} from './em-charts/em-charts.component';
import {SomChartsComponent} from './som-charts/som-charts.component';


const routes: Routes = [
{
  path: "" , component : WelcomeComponent
},

{
  path: "register" , component : RegisterComponent
},

{
  path: "login" , component : LoginComponent
},

{
  path: "charts" , component : ChartsComponent
},

{
  path: "emcharts" , component : EmChartsComponent
},

{
  path: "somcharts" , component : SomChartsComponent
},

{
  path: "customers" , component : AllCustomersComponent
},

{
  path: "users" , component : AllUsersComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
