import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SelectivePreloadingStrategyService } from 'app/services/selective-preloading-strategy.service';

import { HomeComponent } from '../home/home.component';

const appRoutes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'settings', loadChildren: 'app/settings/settings.module#SettingsModule', data: {preload: true}},
  {path:'about', loadChildren: 'app/about/about.module#AboutModule'},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: HomeComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {preloadingStrategy: SelectivePreloadingStrategyService})
  ],
  declarations: [],
  providers: [SelectivePreloadingStrategyService],
  exports:[RouterModule]
})
export class AppRouterModule { }
