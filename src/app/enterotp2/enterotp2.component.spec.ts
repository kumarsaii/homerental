import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Enterotp2Component } from './enterotp2.component';

describe('Enterotp2Component', () => {
  let component: Enterotp2Component;
  let fixture: ComponentFixture<Enterotp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Enterotp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Enterotp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
