import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
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

  private isData: boolean;

  constructor(private service : SettingsService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() 
  {
    this.checkSettings();

    // this.checkSettings();
    // this.routeState = this.activatedRoute.snapshot.routeConfig;
    //console.log(this.routeState);
    // console.log(this.returnedSettings);
  }

    private checkSettings()
  {
    this.service.getSettings().subscribe(response => {
      this.returnedSettings = response;
      if(this.returnedSettings.length > 0)
      {
        this.settings = this.returnedSettings[0];
        console.log(this.returnedSettings[0])
        this.isData = true;
      }
      else
      {
        this.settings = new Settings();
        this.isData = false;
      }
    });
    
  }

  private save(form:any)
  {
    console.log(form);

    if(this.isData === false)
    {
      this.service.saveSettings(this.settings).subscribe();
      this.isData = true;
    }
    else
    {
      this.service.updateSettings(this.settings).subscribe();
    }
    
  }

  // GET ALL SETTINGS FROM DB
    // IF ANY SETTINGS
      // USE FIRST SETTING FOR SETTING
    // ELSE
      // CREATE NEW SETTING
      // USE NEW SETTING FOR SETTING

}
