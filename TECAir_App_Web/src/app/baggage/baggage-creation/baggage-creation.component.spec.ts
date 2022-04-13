import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaggageCreationComponent } from './baggage-creation.component';

describe('BaggageCreationComponent', () => {
  let component: BaggageCreationComponent;
  let fixture: ComponentFixture<BaggageCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaggageCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaggageCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
