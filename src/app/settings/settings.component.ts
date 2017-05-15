import { Component, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild('f') infoForm: any;

  constructor(private service : SettingsService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() 
  {
    this.checkSettings();
  }

    private checkSettings()
  {
    this.service.getSettings().subscribe(response => {
      this.returnedSettings = response;
      if(this.returnedSettings.length > 0)
      {
        this.settings = this.returnedSettings[0];
        //console.log(this.returnedSettings[0])
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
    //console.log(form);

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

  private deleteSettings()
  {
    this.service.deleteSettings(this.settings._id).subscribe();
    this.infoForm.reset();
  }

}
