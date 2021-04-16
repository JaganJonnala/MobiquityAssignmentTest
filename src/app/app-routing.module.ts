import { CityWeatherDetailsComponent } from './components/city-weather-details/city-weather-details.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // pathMatch:'full',
    component: LandingPageComponent
  },
  {
    path: 'city-weather-details',
    component: CityWeatherDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
