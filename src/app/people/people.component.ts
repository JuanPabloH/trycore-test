import { Component, OnInit ,ChangeDetectionStrategy} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-people',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  persons$: any;
  page:number=1;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    return this.dataService.getPeople(this.page)
      .subscribe(data=> this.persons$=data);
  }
  nextPage(){
    this.page=this.page+1;
    this.ngOnInit();
  }



}
