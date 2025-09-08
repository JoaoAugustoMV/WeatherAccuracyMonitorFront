import { Component } from '@angular/core';
import { TableForecastInfo } from "../../components/table-forecast-info/table-forecast-info";
import { MatIcon, MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-main',
  imports: [TableForecastInfo, MatIcon, MatIconModule],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {

}
