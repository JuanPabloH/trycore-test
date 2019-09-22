import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { People } from '../model/people.model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html'
})
export class PeopleComponent implements OnInit {
  apiPerson$: any;
  persons: People[];
  page:number=1;
  personsCharged: boolean=false;
  nextVaules:boolean=true;
  constructor(private dataService: DataService) { 
    
  }

  ngOnInit() {
    this.dataService.getPeople(this.page)
       .subscribe(data=> this.apiPerson$=data);
     this.persons=this.apiPerson$.results;
  }
  chargedPeople(){
    this.page=1;
    this.nextVaules=true;
    this.personsCharged=true;
    this.ngOnInit();
  }

  nextPage(){
    this.page=this.page+1;
        this.ngOnInit(); 
    if(!this.apiPerson$.next)
      this.nextVaules=false;
      
  }
}
