import { Component } from '@angular/core';
import { TableForecastInfo } from "../../components/table-forecast-info/table-forecast-info";

@Component({
  selector: 'app-main',
  imports: [TableForecastInfo],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {

}
