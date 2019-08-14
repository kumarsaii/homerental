import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Payments1Component } from './payments1.component';

describe('Payments1Component', () => {
  let component: Payments1Component;
  let fixture: ComponentFixture<Payments1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Payments1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Payments1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
