import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '32bb2257b4c1c3fed19913952ee17f65'; //  actual API key
  private weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeatherForCountry(countryName: string): Observable<any> {
    const params = {
      q: countryName,
      APPID: this.apiKey
    };
    return this.http.get(this.weatherApiUrl, { params });
  }
}
