import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';

const appRoutes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'settings', loadChildren: 'app/settings/settings.module#SettingsModule'},
  {path:'about', loadChildren: 'app/about/about.module#AboutModule'},
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
