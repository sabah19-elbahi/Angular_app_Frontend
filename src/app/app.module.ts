import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AllCustomersComponent } from './all-customers/all-customers.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { ChartsComponent } from './charts/charts.component';
import { EmChartsComponent } from './em-charts/em-charts.component';
import { SomChartsComponent } from './som-charts/som-charts.component';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AllCustomersComponent,
    AllUsersComponent,
    RegisterComponent,
    LoginComponent,
    WelcomeComponent,
    ChartsComponent,
    EmChartsComponent,
    SomChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
