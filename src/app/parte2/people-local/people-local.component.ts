import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/parte1/model/people.model';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-people-local',
  templateUrl: './people-local.component.html'
})
export class PeopleLocalComponent implements OnInit {
  persons: People[];
  constructor(private peopleService:PeopleService) { }

  ngOnInit() {
    return this.peopleService.getPeople()
       .subscribe(data=> this.persons=data);
  }

}
