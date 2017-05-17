import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common'; //not needed
import { RouterModule, Routes } from '@angular/router';

import { SettingsHomeComponent } from './settings-home.component';
import { SettingsComponent } from './settings.component';
import { LifxComponent } from './lifx/lifx.component';
import { PhilipshueComponent } from './philipshue/philipshue.component';
import { IkeatraadfriComponent } from './ikeatraadfri/ikeatraadfri.component';
import { CustomComponent } from './custom/custom.component';

const settingsRoutes: Routes = [
  {path:'', redirectTo: '/settings', pathMatch: 'full'},
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
  // {path: 'settings', component: SettingsComponent},
  // {path: 'settings/lifx', component: LifxComponent},
  // {path: 'settings/philipshue', component: PhilipshueComponent},
  // {path: 'settings/ikeatraadfri', component: IkeatraadfriComponent},
  // {path: 'settings/custom', component: CustomComponent}
]


@NgModule({
  imports: [
    RouterModule.forChild(settingsRoutes)
  ],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
