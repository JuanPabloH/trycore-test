import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrlPeople='https://swapi.co/api/people/?page=';
  apiUrlPlanet='https://swapi.co/api/planets/';
  apiUrlSpecies='https://swapi.co/api/species/';

  urlPeople:string="";

  constructor(private _http: HttpClient) { }

  getPeople(numberPage){
    this.urlPeople=this.apiUrlPeople+numberPage;
    return this._http.get<any[]>(this.urlPeople);
  }

  getPlanet(){
    return this._http.get<any[]>(this.apiUrlPlanet);
  }

  getSpecies(){
    return this._http.get<any[]>(this.apiUrlSpecies);
  }
}
