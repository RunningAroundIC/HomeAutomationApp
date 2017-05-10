import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../settings.service';
import { Isettings } from '../isettings';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  providers: [SettingsService]
})
export class SettingsComponent implements OnInit {

  static appName: Isettings;

  constructor(private service : SettingsService) {}

  ngOnInit() {}

  private saveSettings(Name)
  {
    SettingsComponent.appName = Name;
    console.log(Name);
  }

}
