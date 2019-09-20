import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  persons$: any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    return this.dataService.getPeople()
      .subscribe(data=> this.persons$=data);
  }
  


}
