import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SettingsHomeComponent } from './settings-home.component';
import { SettingsComponent } from './settings.component';
import { LifxComponent } from './lifx/lifx.component';
import { PhilipshueComponent } from './philipshue/philipshue.component';
import { IkeatraadfriComponent } from './ikeatraadfri/ikeatraadfri.component';
import { CustomComponent } from './custom/custom.component';

const settingsRoutes: Routes = [
  {
    path: 'settings',
    component: SettingsHomeComponent,
    children: 
    [
      {
        path: '',
        component: SettingsComponent,
        children: 
        [
          {path: '', component: LifxComponent},
          {path: '', component: PhilipshueComponent},
          {path: '', component: IkeatraadfriComponent},
          {path: '', component: CustomComponent}
        ]
      }
    ]
  }
  // {path: 'settings', component: SettingsComponent},
  // {path: 'settings/lifx', component: LifxComponent},
  // {path: 'settings/philipshue', component: PhilipshueComponent},
  // {path: 'settings/ikeatraadfri', component: IkeatraadfriComponent},
  // {path: 'settings/custom', component: CustomComponent}
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(settingsRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
