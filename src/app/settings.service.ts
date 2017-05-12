import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs';
import { Settings } from './Settings';

import 'rxjs/add/operator/map';

@Injectable()
export class SettingsService 
{
  //API
  private settingsUrl: string = "http://localhost:3000/settings";


  constructor(private http: Http) { }

  //Creat
  public saveSettings(settings : Settings): Observable<Settings>
  {
    var data = JSON.stringify(settings);
    return this.http.post(this.settingsUrl, data).map(response => response.json());
  }

  //Get
  public getSettings(): Observable<Settings[]>
  {
    let result = this.http.get(this.settingsUrl).map(response => response.json());
    return result;
  }

  //Update
  public updateSettings()
  {

  }

  //Delete
  public deleteSettings()
  {

  }

}
