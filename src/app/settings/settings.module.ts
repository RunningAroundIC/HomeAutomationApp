import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SettingsComponent } from './settings.component';
import { LifxComponent } from './lifx/lifx.component';
import { PhilipshueComponent } from './philipshue/philipshue.component';
import { IkeatraadfriComponent } from './ikeatraadfri/ikeatraadfri.component';
import { CustomComponent } from './custom/custom.component';

import { SettingsRoutingModule } from './settings-routing.module';

@NgModule({
  
  declarations: [
    SettingsComponent,
    LifxComponent,
    PhilipshueComponent,
    IkeatraadfriComponent,
    CustomComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SettingsRoutingModule
  ],
  providers: []
})
export class SettingsModule { }
