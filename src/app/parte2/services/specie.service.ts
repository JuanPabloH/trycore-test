import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Specie } from 'src/app/parte1/model/specie.model';


@Injectable({
  providedIn: 'root'
})
export class SpecieService {

  apiUrlSpecie='/api/species';
  
  private headers = { 'Content-Type': 'application/json' };

  constructor(private _http: HttpClient) { }

  getSpecies(){
    return this._http.get<Specie[]>(this.apiUrlSpecie);
  }

  postSpecie(specie: Specie): Observable<Specie> {
    let body=JSON.stringify(specie);
    console.log(body);
    return this._http.post<Specie>(this.apiUrlSpecie,body,{ headers: this.headers });  
  }
}
