import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableForecastInfo } from './table-forecast-info';

describe('TableForecastInfo', () => {
  let component: TableForecastInfo;
  let fixture: ComponentFixture<TableForecastInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableForecastInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableForecastInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
