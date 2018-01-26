import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AboutComponent } from './about.component';

import { AboutRoutingModule } from './about-routing.module';

@NgModule({
    declarations: [
        AboutComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AboutRoutingModule
    ],
    providers: []
})
export class AboutModule { }