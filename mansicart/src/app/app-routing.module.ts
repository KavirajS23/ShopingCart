import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { AccountDashboardComponent } from './account-dashboard/account-dashboard.component';
import { AccountInformationComponent } from './account-information/account-information.component';
import { AccountAddressComponent } from './account-address/account-address.component';

const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  {path: 'accountsettings', component: AccountSettingsComponent ,
    children: [
      {path:'', redirectTo:'dashboard', pathMatch: 'full'},
      {path:'dashboard', component: AccountDashboardComponent},
      {path: 'information', component: AccountInformationComponent},
      {path: 'addresses', component: AccountAddressComponent}
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
