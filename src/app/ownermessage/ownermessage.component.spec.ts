import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnermessageComponent } from './ownermessage.component';

describe('OwnermessageComponent', () => {
  let component: OwnermessageComponent;
  let fixture: ComponentFixture<OwnermessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnermessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnermessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
