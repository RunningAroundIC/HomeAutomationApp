import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
//import { SettingsComponent } from '../settings/settings.component'; //Test for routing i settings

const appRoutes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  //{path:'settings', component: SettingsComponent}, //Test for routing i settings
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: HomeComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRouterModule { }
