import { TestBed } from '@angular/core/testing';

import { InfoForecastService } from './info-forecast-service';

describe('InfoForecastService', () => {
  let service: InfoForecastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoForecastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
