import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightClosedComponent } from './flight-closed.component';

describe('FlightClosedComponent', () => {
  let component: FlightClosedComponent;
  let fixture: ComponentFixture<FlightClosedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightClosedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightClosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
