import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeekInfo } from '../models/WeekInfo';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InfoForecastService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getWeekInfo(): Observable<WeekInfo> {
    return this.http.get<WeekInfo>(this.apiUrl + "/InfoData/CurrentWeek");
  }
}
