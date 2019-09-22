import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrlPeople='https://swapi.co/api/people/?page=';
  apiUrlPlanet='https://swapi.co/api/planets/?page=';
  apiUrlSpecies='https://swapi.co/api/species/?page=';

  urlPeople:string="";
  urlPlanet:string="";
  urlSpecies:string="";

  constructor(private _http: HttpClient) { }

  getPeople(numberPage){
    this.urlPeople=this.apiUrlPeople+numberPage;
    return this._http.get<any>(this.urlPeople);
  }

  getPlanet(numberPage){
    this.urlPlanet=this.apiUrlPlanet+numberPage;
    return this._http.get<any[]>(this.urlPlanet);
  }

  getSpecies(numberPage){
    this.urlSpecies=this.apiUrlSpecies+numberPage;
    return this._http.get<any[]>(this.urlSpecies);
  }
}
