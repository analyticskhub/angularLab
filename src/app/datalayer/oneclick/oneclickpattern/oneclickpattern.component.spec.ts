/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OneclickpatternComponent } from './oneclickpattern.component';

describe('OneclickpatternComponent', () => {
  let component: OneclickpatternComponent;
  let fixture: ComponentFixture<OneclickpatternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneclickpatternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneclickpatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
