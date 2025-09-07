import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeekInfo } from '../models/WeekInfo';

@Injectable({
  providedIn: 'root'
})
export class InfoForecastService {
  private readonly apiUrl = 'https://localhost:7255/BFF';

  constructor(private http: HttpClient) {}

  getWeekInfo(): Observable<WeekInfo> {
    return this.http.get<WeekInfo>(this.apiUrl);
  }
}
