import { Component, OnInit } from '@angular/core';
import { Home } from 'app/services/home/home';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private home : Home;

  constructor() { }

  ngOnInit() {}

  private save()
  {
    
  }

}
