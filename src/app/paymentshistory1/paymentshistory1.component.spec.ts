import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Paymentshistory1Component } from './paymentshistory1.component';

describe('Paymentshistory1Component', () => {
  let component: Paymentshistory1Component;
  let fixture: ComponentFixture<Paymentshistory1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Paymentshistory1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Paymentshistory1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
