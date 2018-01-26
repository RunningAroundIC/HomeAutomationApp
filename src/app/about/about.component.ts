import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  private routeState;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() 
  {
    //this.routeState = this.activatedRoute.data;
    //console.log(this.routeState);
  }

}
