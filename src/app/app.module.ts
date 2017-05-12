import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRouterModule } from './app-router/app-router.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SettingsComponent } from './settings/settings.component';

import { SingletonService } from './singleton.service'; //Test keeping data when routing

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRouterModule,
    BrowserAnimationsModule
  ],
  providers: [SingletonService], //Test keeping data when routing
  bootstrap: [AppComponent]
})
export class AppModule { }
