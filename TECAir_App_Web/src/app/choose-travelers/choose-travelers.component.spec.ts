import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseTravelersComponent } from './choose-travelers.component';

describe('ChooseTravelersComponent', () => {
  let component: ChooseTravelersComponent;
  let fixture: ComponentFixture<ChooseTravelersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseTravelersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseTravelersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
