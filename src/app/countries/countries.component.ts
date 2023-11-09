// countries.component.ts

import { Component } from '@angular/core';
import { Country } from './country.model'; // Import the Country interface

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent {
  countries: Country[] = [
    {
      name: 'Country 1',
      capital: 'Capital 1',
      population: 1000000,
      area: 10000,
      currency: 'Currency 1',
      language: 'Language 1',
      flag: 'https://example.com/flag1.jpg' 
    },
    {
      name: 'Country 2',
      capital: 'Capital 2',
      population: 2000000,
      area: 15000,
      currency: 'Currency 2',
      language: 'Language 2',
      flag: 'https://example.com/flag2.jpg' 
    },
    
  ];

  
}
