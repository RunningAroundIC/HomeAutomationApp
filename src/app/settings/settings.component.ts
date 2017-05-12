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
  private routeState;
  private settings: Settings;
  private newSettings: Settings[];
  private returnedSettings: Settings[];

  appName: string;

  constructor(private service : SettingsService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() 
  {
    this.routeState = this.activatedRoute.snapshot.routeConfig;
    console.log(this.routeState);
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
    this.service.saveSettings(this.settings).subscribe(x => 
    {
       this.newSettings.push(x);
       this.settings = new Settings();
    });
  }

  private checkSettings()
  {
    this.service.getSettings().subscribe(x => 
    {
      this.returnedSettings = x;
      //console.log(x);
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
