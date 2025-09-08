import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { InfoForecastService } from '../../services/info-forecast-service';
import { LineDayForecastData } from '../../models/WeekInfo';
import { CommonModule } from '@angular/common';
import { DayForecastItem } from "../day-forecast-item/day-forecast-item";
import { ForecastSourceNames, Sources } from '../../models/Sources';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-table-forecast-info',  
  imports: [MatTableModule, CommonModule, DayForecastItem],
  templateUrl: './table-forecast-info.html',
  styleUrl: './table-forecast-info.css'
})
export class TableForecastInfo implements OnInit {
  columnsName: string[] = [];
  dataSource: LineDayForecastData[] = []  
  
  constructor(private infoForecastService: InfoForecastService) {}
  
  ngOnInit(): void {
    this.infoForecastService.getWeekInfo().subscribe(
      (data)=>{
        this.columnsName = this.generateForecastDaysList()
        // this.columnsName = this.columnsName.concat(data.columnsName)
        this.dataSource = data.linesData
        
      }
    )
  }

  trackByCol(index: number, col: string) {
    return col;
  }

  trackByIndex(index: number, item: any) {
    return index;
  }

  get displayedColumns(): string[] {
    return ['forecastWasMade', ...this.columnsName];
  }

  mapNameSource(sourceId: number): string{    
    return ForecastSourceNames[sourceId]
  }

  generateForecastDaysList(): string[] {
    const today = new Date();
    const formatter = new Intl.DateTimeFormat("pt-BR", { weekday: "long" });

    const list: string[] = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");

      let weekday = formatter.format(date);
      // capitalizar a primeira letra
      weekday = weekday.charAt(0).toUpperCase() + weekday.slice(1);

      let label = `${day}/${month} ${weekday}`;

      if (i === 0) {
        label += "(Hoje)";
      } else if (i === 1) {
        label += "(Amanhã)";
      }

      list.push(label);
    }

    return list;
  }



}
