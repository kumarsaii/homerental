import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Searchnewhouse2Component } from './searchnewhouse2.component';

describe('Searchnewhouse2Component', () => {
  let component: Searchnewhouse2Component;
  let fixture: ComponentFixture<Searchnewhouse2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Searchnewhouse2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Searchnewhouse2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
