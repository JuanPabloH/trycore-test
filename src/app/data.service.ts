import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { People } from './model/people.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrlPeople='https://swapi.co/api/people/?format=json';
  apiUrlPlanet='https://swapi.co/api/planets/?format=json';
  apiUrlSpecies='https://swapi.co/api/species/?format=json';

  constructor(private _http: HttpClient) { }

  getPeople(){
    return this._http.get<any[]>(this.apiUrlPeople);
  }

  getPlanet(){
    return this._http.get<any[]>(this.apiUrlPlanet);
  }

  getSpecies(){
    return this._http.get<People[]>(this.apiUrlSpecies);
  }
}
