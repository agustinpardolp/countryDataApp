import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CountriesComponent } from './components/Countries/countries.component';
import { SearchComponent } from './components/search/search.component';

export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'country/:name', component: CountriesComponent},
  // { path: 'countries/:lenguage', component: HomeComponent },
  // { path: 'country/:id', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
];
