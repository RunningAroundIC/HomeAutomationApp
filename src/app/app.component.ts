import { Component, HostListener, ElementRef, Directive, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Animation } from './animation';

@Component
({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[Animation.navTrigger, Animation.pustLeftTrigger, Animation.fadeInCloseBotton]
})

@Directive
({
  selector: '[clickOutside]'
})

export class AppComponent {
  ///See ngOnInit() 
  private headline: string;

  ///State of side navigation bar
  private expanded = false;
  private expandedState = 'collapsed';

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private _elementRef : ElementRef) {}

  ///
  @Output() private clickOutside = new EventEmitter();
  
  ///Listner for clicks on the page when side navigation bar is active, for closing it if you just click outside of the menu.
  @HostListener('document:click', ['$event.target']) public onClick(targetElement)
    {
      const clickedInside = this._elementRef.nativeElement.contains(targetElement);
      if (!clickedInside && this.expanded === true)
      {
        this.toggleNav();
      }
    }

  ngOnInit()
  {
    ///Reads the current page that is routed to.
    this.router.events.subscribe((data:any) => {this.headline = data.url; });
  }

  ///Method to toggle side navitagion bar
  private toggleNav()
  {
    this.expandedState = this.expanded ? 'collapsed' : 'expanded';
    this.expanded = !this.expanded;
  }


}
