import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightOpenComponent } from './flight-open.component';

describe('FlightOpenComponent', () => {
  let component: FlightOpenComponent;
  let fixture: ComponentFixture<FlightOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightOpenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
