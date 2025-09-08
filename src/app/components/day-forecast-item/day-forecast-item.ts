import { Component, Input } from '@angular/core';
import { DayForecastDataItem } from '../../models/WeekInfo';
import { ForecastSourceNames } from '../../models/Sources';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-day-forecast-item',
  imports: [MatTooltip],
  templateUrl: './day-forecast-item.html',
  styleUrl: './day-forecast-item.css'
})
export class DayForecastItem {
  @Input() item!: DayForecastDataItem; 

  sourceNames = ForecastSourceNames;
}
