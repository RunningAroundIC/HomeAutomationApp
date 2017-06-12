import { Component, OnInit } from '@angular/core';
import { Home } from 'app/services/home/home';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private home : Home;
  private storageData : Home[];
  

  constructor() {}

  ngOnInit() 
  {
    this.checkStorage();
  }

  private save(form:any)
  {
    console.log(form);
    sessionStorage.setItem("localSession", JSON.stringify(form));
  }

  private checkStorage()
  {
    this.storageData = JSON.parse(sessionStorage.getItem("localSession"));
    if (this.storageData.length > 0)
    {
      this.home = this.storageData[0];
    }
    else
    {
      this.home = new Home;
    }
  }


}
