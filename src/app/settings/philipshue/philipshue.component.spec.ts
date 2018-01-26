/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PhilipshueComponent } from './philipshue.component';

describe('PhilipshueComponent', () => {
  let component: PhilipshueComponent;
  let fixture: ComponentFixture<PhilipshueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhilipshueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhilipshueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
