import { LandingPageService } from './../landing-page/landing-page.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-city-weather-details',
  templateUrl: './city-weather-details.component.html',
  styleUrls: ['./../../../app/app.component.scss']
})
export class CityWeatherDetailsComponent implements OnInit {
  cityName :string= "";
  report:any;
  isLoading:boolean=true;
  constructor(
    private router:Router,
    private httpClient: HttpClient,
    private landingPageService : LandingPageService
  ) {
  }

  ngOnInit() {
    this.cityName = this.landingPageService.currentSelectedCity && this.landingPageService.currentSelectedCity.name || "";
    if(!this.cityName){
      this.goToHome();
    }
    else{
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=3d8b309701a13f65b660fa2c64cdc517`;
      this.httpClient.request('GET', apiUrl, {responseType:'json'}).subscribe((response) =>{
        this.isLoading = false;
        this.report = response;
      });
    }
  }

  goToHome(){
    this.router.navigate([""]);
  }
}
