import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable() //decorador que indica que se pueden inyectar en cualquier parte de la app
export class CountriesService {
  constructor(private http: HttpClient) {
    console.log('servicio creado');
  }

  getCountries() {
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }
  getCountriesByName(countryName:string){
    return this.http.get(`https://restcountries.eu/rest/v2/name/${countryName}`);
  }
}
