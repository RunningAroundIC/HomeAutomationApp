import { Component, HostListener, ElementRef, Directive, Output, EventEmitter } from '@angular/core';
import { Animation } from './animation';

@Component
({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[Animation.navTrigger, Animation.pustLeftTrigger]
})

@Directive
({
  selector: '[clickOutside]'
})

export class AppComponent {
  //title = 'app works!';

  private expanded = false;
  private expandedState = 'collapsed';

  constructor(private _elementRef : ElementRef) {}

  @Output() public clickOutside = new EventEmitter();
  
  @HostListener('document:click', ['$event.target']) public onClick(targetElement)
    {
      const clickedInside = this._elementRef.nativeElement.contains(targetElement);
      if (!clickedInside && this.expanded === true)
      {
        this.toggleNav();
      }
    }


  private toggleNav()
  {
    this.expandedState = this.expanded ? 'collapsed' : 'expanded';
    this.expanded = !this.expanded;
  }

  


}
