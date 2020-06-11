import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { CountriesComponent } from '../Countries/countries.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
// @NgModule({
//   imports: [FormsModule],  //para manejo de formularios, se utiliza NgModel que lo traigo e este modulo.
// })
export class SearchComponent implements OnInit {
  constructor(private _countriesService: CountriesService) {}
  countryName: any = '';
  selectedCountries: any = '';

  ngOnInit(): void {}

  fetchCountriyByName(value: string) {
    console.log('value', value);
    this._countriesService.getCountriesByName(value).subscribe((data: any) => {
      this.selectedCountries = data;
      console.log(data);
    });
  }
}
