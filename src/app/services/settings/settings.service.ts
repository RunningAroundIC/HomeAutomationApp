import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs';
import { Settings } from './settings';

import 'rxjs/add/operator/map';

@Injectable()
export class SettingsService 
{
  //API url
  private settingsUrl: string = "http://localhost:3000/settings";


  constructor(private http: Http) { }

  //Creat
  public saveSettings(settings : Settings): Observable<Settings>
  {
    var data = JSON.stringify(settings);
    return this.http.post(this.settingsUrl, data, this.getHeaderOptions()).map(response => response.json());
  }

  //Get
  public getSettings(): Observable<Settings[]>
  {
    let result = this.http.get(this.settingsUrl).map(response => response.json());
    return result;
  }

  //Update
  public updateSettings(settings : Settings): Observable<Settings>
  {
    var data = JSON.stringify(settings);
    return this.http.put(this.settingsUrl + "/" + settings._id, data, this.getHeaderOptions()).map(response => response.json());
  }

  //Delete
  public deleteSettings(id: string)
  {
    return this.http.delete(this.settingsUrl + "/delete/" + id, this.getHeaderOptions()).map(responce => responce.json());
  }


  private getHeaderOptions(): RequestOptions 
  {
    let headers = new Headers({'Content-Type': 'application/json'});
    return new RequestOptions({headers: headers});
  }

}
