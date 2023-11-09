

import { Component } from '@angular/core';
import { WeatherData } from './weather.model'; 

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  weatherData: WeatherData = {
    temperature: 25, 
    humidity: 50,    
    description: 'Partly cloudy', 
    icon: 'https://example.com/weather-icon.png' 
  };
   
  
  // Other component code
}
