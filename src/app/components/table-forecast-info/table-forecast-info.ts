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
  columnsName: string[] = ["0"];
  dataSource: LineDayForecastData[] = []  
  
  constructor(private infoForecastService: InfoForecastService) {}
  
  ngOnInit(): void {
    this.infoForecastService.getWeekInfo().subscribe(
      (data)=>{
        this.columnsName = this.columnsName.concat(data.columnsName)
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
}
