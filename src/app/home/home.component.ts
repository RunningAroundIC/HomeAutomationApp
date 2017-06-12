import { Component, OnInit } from '@angular/core';
import { Home } from 'app/services/home/home';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private home : Home; 

  constructor() {}

  ngOnInit() 
  {
    this.checkStorage();
  }

  private save(form:any)
  {
    sessionStorage.setItem("localSession", JSON.stringify(form));
  }

  private checkStorage()
  {
    let result = JSON.parse(sessionStorage.getItem("localSession"));
    if(result === null)
    {
      this.home = new Home();
    }
    else
    {
      this.home = result;
    }
  }


}
