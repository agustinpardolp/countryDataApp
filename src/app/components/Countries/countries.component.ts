import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router'; //lo uso para traer el dato del param /:id, /:name, etc

@Component({
  selector: 'app-countries',
  templateUrl: './Countries.component.html',
  styleUrls: ['./Countries.component.css'],
})
export class CountriesComponent implements OnInit {
  constructor(
    private _countriesService: CountriesService,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  selectedCountries: any[] = [];
  selectedCountry: any[] = [];

  fetchCountryByName(value: string) {
    this._countriesService.getCountriesByName(value).subscribe((data: any) => {
      this.selectedCountry = data;
      console.log(data)
    });
  }

  ngOnInit() {
    let countryName = this.route.snapshot.paramMap.get('name'); //me traigo el param del country/:name
    this.fetchCountryByName(countryName);
  }
}
