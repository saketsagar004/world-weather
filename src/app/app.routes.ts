

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './countries/countries.component'; 
import { WeatherComponent } from './weather/weather.component'; 

const routes: Routes = [
  { path: 'countries', component: CountriesComponent },
  { path: 'weather', component: WeatherComponent },
  { path: '', redirectTo: '/countries', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/countries' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
