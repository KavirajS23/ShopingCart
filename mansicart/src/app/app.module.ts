import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './material/material.module';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { SigninComponent } from './signin/signin.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { AccountDashboardComponent } from './account-dashboard/account-dashboard.component';
import { AccountInformationComponent } from './account-information/account-information.component';
import { AccountAddressComponent } from './account-address/account-address.component'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidenavListComponent,
    SigninComponent,
    AccountSettingsComponent,
    AccountDashboardComponent,
    AccountInformationComponent,
    AccountAddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
