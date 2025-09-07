import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayForecastItem } from './day-forecast-item';

describe('DayForecastItem', () => {
  let component: DayForecastItem;
  let fixture: ComponentFixture<DayForecastItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayForecastItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayForecastItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
