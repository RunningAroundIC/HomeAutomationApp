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
  public saveSettings()
  {

  }

  //Get
  public getSettings(): Observable<Settings[]>
  {
    let result = this.http.get(this.settingsUrl).map(responce => responce.json());
    console.log(result);
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
