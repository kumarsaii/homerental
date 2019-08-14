import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewhouses1Component } from './viewhouses1.component';

describe('Viewhouses1Component', () => {
  let component: Viewhouses1Component;
  let fixture: ComponentFixture<Viewhouses1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewhouses1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewhouses1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
