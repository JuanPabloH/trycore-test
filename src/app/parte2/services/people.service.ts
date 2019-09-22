import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { People } from 'src/app/parte1/model/people.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  apiUrlPeople='/api/persons';
  
  private headers = { 'Content-Type': 'application/json' };

  constructor(private _http: HttpClient) { }

  getPeople(){
    return this._http.get<People[]>(this.apiUrlPeople);
  }

  postPeople(person: People): Observable<People> {
    let body=JSON.stringify(person);
    console.log(body);
    return this._http.post<People>(this.apiUrlPeople,body,{ headers: this.headers });  
  }
}
