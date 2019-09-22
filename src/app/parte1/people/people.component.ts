import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { People } from '../model/people.model';
import { PeopleService } from 'src/app/parte2/services/people.service';

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
  constructor(private dataService: DataService, private peopleService: PeopleService) { 
    
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
  addBDLocal(person){
    const newPerson: People=Object.assign({},person);
    this.peopleService.postPeople(person).subscribe();
    alert("Se agregó con exito a la base de datos local")
  }
}
