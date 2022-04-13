import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseFlightsComponent } from './choose-flights.component';

describe('ChooseFlightsComponent', () => {
  let component: ChooseFlightsComponent;
  let fixture: ComponentFixture<ChooseFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseFlightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
