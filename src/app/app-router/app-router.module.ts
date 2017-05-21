import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
//import { AboutComponent } from '../about/about.component'; // Lazy loading af about
//import { SettingsComponent } from '../settings/settings.component'; //Flyttet til settings-routing

const appRoutes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'about', loadChildren: 'app/about/about.module#AboutModule'}, // Lazy loading af about
  //{path:'settings', component: SettingsComponent}, //Flyttet til settings-routing
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
