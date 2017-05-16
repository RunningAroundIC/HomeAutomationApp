import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SettingsModule } from './settings/settings.module';
import { AppRouterModule } from './app-router/app-router.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
//import { SettingsComponent } from './settings/settings.component'; //Test for routing i settings


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    SettingsModule,
    AppRouterModule
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
