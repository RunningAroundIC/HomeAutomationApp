import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../settings.service';
import { Settings } from '../settings';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  providers: [SettingsService]
})
export class SettingsComponent implements OnInit 
{

  private settings: Settings;
  private returnedSettings: Settings[];

  constructor(private service : SettingsService) {}

  ngOnInit() 
  {
    // GET ALL SETTINGS FROM DB
    // IF ANY SETTINGS
      // USE FIRST SETTING FOR SETTING
    // ELSE
      // CREATE NEW SETTING
      // USE NEW SETTING FOR SETTING
    this.checkSettings();
  }

  private save()
  {
    this.service.saveSettings()
  }

  private checkSettings()
  {
    this.service.getSettings().subscribe(x => 
    {
      this.returnedSettings = x;
      console.log(x);
      if (x.length > 0)
      {
        this.settings = x[0];
      }
      else
      {
        this.settings = new Settings();
      }
    });

    
    
  }

}
