import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SettingsHomeComponent } from './settings-home.component';
import { SettingsComponent } from './settings.component';
import { LifxComponent } from './lifx/lifx.component';
import { PhilipshueComponent } from './philipshue/philipshue.component';
import { IkeatraadfriComponent } from './ikeatraadfri/ikeatraadfri.component';
import { CustomComponent } from './custom/custom.component';

const settingsRoutes: Routes = [
  {
    path: '',
    component: SettingsHomeComponent,
    children: 
    [
      {
        path: '',
        component: SettingsComponent,
        children: 
        [
          {
            path: 'lifx', 
            component: LifxComponent
          },
          {
            path: 'philipshue', 
            component: PhilipshueComponent
          },
          {
            path: 'ikeatraadfri', 
            component: IkeatraadfriComponent
          },
          {
            path: 'custom', 
            component: CustomComponent
          }
        ]
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(settingsRoutes)
  ],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
