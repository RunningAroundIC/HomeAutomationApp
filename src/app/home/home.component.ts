import { Component, OnInit, ViewChild } from '@angular/core';
import { Session } from 'app/services/home/session';
import { Local } from 'app/services/home/local';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private session : Session;
  private local : Local; 

  @ViewChild('f') sessionForm: any;
  @ViewChild('l') localForm: any;

  constructor() {}

  ngOnInit() 
  {
    this.checkSessionStorage();
    this.checkLocalStorage();
  }

  //Save Session data, data will be deleted if the browser is closed.
  private sessionSave(form:any)
  {
    sessionStorage.setItem("Session", JSON.stringify(form));
  }

  //Save Local data, data will NOT be deleted if the browser is closed.
  private localSave(form:any)
  {
    localStorage.setItem("Local", JSON.stringify(form));
  }

  //Clears the form.
  private clearStorage()
  {
    sessionStorage.clear();
    localStorage.clear();
    this.sessionForm.reset();
    this.localForm.reset();
  }

  //Checking if there is any Session Storage
  private checkSessionStorage()
  {
    let result = JSON.parse(sessionStorage.getItem("Session"));
    if(result === null)
    {
      this.session = new Session();
    }
    else
    {
      this.session = result;
    }
  }
  
  //Checking is there is any Local Storage
  private checkLocalStorage()
  {
    let result = JSON.parse(localStorage.getItem("Local"));
    if(result === null)
    {
      this.local = new Local();
    }
    else
    {
      this.local = result;
    }
  }


}
