import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pofile2Component } from './pofile2.component';

describe('Pofile2Component', () => {
  let component: Pofile2Component;
  let fixture: ComponentFixture<Pofile2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pofile2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pofile2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
