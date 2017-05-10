import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs';
import { Iuser } from './iuser';

import 'rxjs/add/operator/map';

@Injectable()
export class UserService 
{

  //private userSettings: Observable<Iuser>;


  //API
  private url: string = "http://localhost:3000/settings";


  constructor(private http: Http) { }

  public saveSettings()
  {
    
  }


}
