import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutuscomComponent } from './aboutuscom.component';

describe('AboutuscomComponent', () => {
  let component: AboutuscomComponent;
  let fixture: ComponentFixture<AboutuscomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutuscomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutuscomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
