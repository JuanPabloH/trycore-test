import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Planet } from '../model/planet.model';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html'
})
export class PlanetComponent implements OnInit {
  apiPlanets: any;
  planets: Planet[];
  page:number=1;
  planetsCharged: boolean=false;
  nextVaules:boolean=true;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPlanet(this.page)
       .subscribe(data=> this.apiPlanets=data);
     this.planets=this.apiPlanets.results;
  }

  /**
   * carga los planetas desde la api
   */
  chargedPlanets(){
    this.page=1;
    this.nextVaules=true;
    this.planetsCharged=true;
    this.ngOnInit();
  }
/**
 * Carga los planetas desde la api cambiando a la siguiente pagina
 */
  nextPage(){
    this.page=this.page+1;
        this.ngOnInit(); 
    if(!this.apiPlanets.next)
      this.nextVaules=false;
      
  }

}
