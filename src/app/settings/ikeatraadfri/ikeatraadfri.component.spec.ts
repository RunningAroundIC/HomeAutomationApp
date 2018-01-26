/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IkeatraadfriComponent } from './ikeatraadfri.component';

describe('IkeatraadfriComponent', () => {
  let component: IkeatraadfriComponent;
  let fixture: ComponentFixture<IkeatraadfriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IkeatraadfriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IkeatraadfriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
