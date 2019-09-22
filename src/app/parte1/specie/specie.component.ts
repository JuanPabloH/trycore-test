import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Specie } from '../model/specie.model';

@Component({
  selector: 'app-specie',
  templateUrl: './specie.component.html'
})
export class SpecieComponent implements OnInit {

  apiSpecies: any;
  species: Specie[];
  page:number=1;
  speciesCharged: boolean=false;
  nextVaules:boolean=true;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getSpecies(this.page)
       .subscribe(data=> this.apiSpecies=data);
     this.species=this.apiSpecies.results;
  }

  /**
   * carga las especies desde la api
   */
  chargedSpecies(){
    this.page=1;
    this.nextVaules=true;
    this.speciesCharged=true;
    this.ngOnInit();
  }
/**
 * Carga las especies desde la api cambiando a la siguiente pagina
 */
  nextPage(){
    this.page=this.page+1;
        this.ngOnInit(); 
    if(!this.apiSpecies.next)
      this.nextVaules=false;
      
  }
}
