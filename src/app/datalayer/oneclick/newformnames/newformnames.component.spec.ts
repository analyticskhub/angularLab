/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewformnamesComponent } from './newformnames.component';

describe('NewformnamesComponent', () => {
  let component: NewformnamesComponent;
  let fixture: ComponentFixture<NewformnamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewformnamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewformnamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
