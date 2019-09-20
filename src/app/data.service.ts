import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { People } from './model/people.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl='https://swapi.co/api/people/';

  constructor(private _http: HttpClient) { }

  getPeople(){
    return this._http.get<People[]>(this.apiUrl);
  }
}
