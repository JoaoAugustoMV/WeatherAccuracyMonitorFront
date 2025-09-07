import { Component, Input } from '@angular/core';
import { DayForecastDataItem } from '../../models/WeekInfo';
import { ForecastSourceNames } from '../../models/Sources';

@Component({
  selector: 'app-day-forecast-item',
  imports: [],
  templateUrl: './day-forecast-item.html',
  styleUrl: './day-forecast-item.css'
})
export class DayForecastItem {
  @Input() item!: DayForecastDataItem; 

  sourceNames = ForecastSourceNames;
}
