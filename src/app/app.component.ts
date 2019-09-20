import { Component, OnInit } from '@angular/core';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  persons$: any;
  constructor(private dataService: DataService){}

  ngOnInit(){
    return this.dataService.getPeople()
    .subscribe(data=> this.persons$=data);
  }
}
