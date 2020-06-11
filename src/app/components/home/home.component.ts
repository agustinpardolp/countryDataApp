import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private _moviesServices: CountriesService,
    private http: HttpClient
  ) {}
  countries: any[] = [];
  ngOnInit() {
    this._moviesServices.getCountries().subscribe((data: any) => {
      this.countries = data;
      console.log(data);
    });
  }
}
