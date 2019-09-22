import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Planet } from 'src/app/parte1/model/planet.model';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  apiUrlPlanet='/api/planets';
  
  private headers = { 'Content-Type': 'application/json' };

  constructor(private _http: HttpClient) { }

  getPlanet(){
    return this._http.get<Planet[]>(this.apiUrlPlanet);
  }

  postPlanet(planet: Planet): Observable<Planet> {
    let body=JSON.stringify(planet);
    console.log(body);
    return this._http.post<Planet>(this.apiUrlPlanet,body,{ headers: this.headers });  
  }
}
