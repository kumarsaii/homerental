import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addnewhouse1Component } from './addnewhouse1.component';

describe('Addnewhouse1Component', () => {
  let component: Addnewhouse1Component;
  let fixture: ComponentFixture<Addnewhouse1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addnewhouse1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addnewhouse1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
