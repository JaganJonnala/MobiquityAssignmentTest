import { LandingPageService } from './landing-page.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./../../../app/app.component.scss']
})
export class LandingPageComponent implements OnInit {
  cities: Array<any>=[{'name':'Barcelona'},{'name':'Helsinki'},
  {'name':'Florence'},{'name':'Prague'},{'name':'Paris'}];


  constructor(
    private router: Router,
    private landingPageService:LandingPageService
  ){

  }

  ngOnInit(){

  }

  onCityCardClick(city){
      this.landingPageService.currentSelectedCity = city;
      this.router.navigate(['city-weather-details']);
  }
}
