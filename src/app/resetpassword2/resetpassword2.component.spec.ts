import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Resetpassword2Component } from './resetpassword2.component';

describe('Resetpassword2Component', () => {
  let component: Resetpassword2Component;
  let fixture: ComponentFixture<Resetpassword2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Resetpassword2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Resetpassword2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
