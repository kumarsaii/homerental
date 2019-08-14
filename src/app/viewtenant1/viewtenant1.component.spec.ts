import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewtenant1Component } from './viewtenant1.component';

describe('Viewtenant1Component', () => {
  let component: Viewtenant1Component;
  let fixture: ComponentFixture<Viewtenant1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewtenant1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewtenant1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
