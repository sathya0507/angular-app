// src/app/weather.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = 'a439f34b5be53463c8f74492904b069e';
  private apiUrl = 'http://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    const query = `?q=${city}&appid=${this.apiKey}`;
    return this.http.get(this.apiUrl + query);
  }
}
