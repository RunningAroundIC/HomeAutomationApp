/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LifxComponent } from './lifx.component';

describe('LifxComponent', () => {
  let component: LifxComponent;
  let fixture: ComponentFixture<LifxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
