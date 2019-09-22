import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { DataService } from './parte1/services/data.service';

import { PeopleComponent } from './parte1/people/people.component';
import { PlanetComponent } from './parte1/planet/planet.component';
import { SpecieComponent } from './parte1/specie/specie.component';
import {Routes, RouterModule} from '@angular/router';
import { PeopleLocalComponent } from './parte2/people-local/people-local.component';
import { PeopleService } from './parte2/services/people.service';
import { SpecieLocalComponent } from './parte2/specie-local/specie-local.component';
import { PlanetLocalComponent } from './parte2/planet-local/planet-local.component';
import { PlanetService } from './parte2/services/planet.service';
import { SpecieService } from './parte2/services/specie.service';
const appRoutes: Routes=[
  {path: 'people',component:PeopleComponent},
  {path: 'planet', component:PlanetComponent},
  {path: 'specie', component:SpecieComponent},
  {path: 'peopleLocal',component:PeopleLocalComponent},
  {path: 'planetLocal',component:PlanetLocalComponent},
  {path: 'specieLocal',component:SpecieLocalComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    PlanetComponent,
    SpecieComponent,
    PeopleLocalComponent,
    SpecieLocalComponent,
    PlanetLocalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DataService,
    PeopleService,
    PlanetService,
    SpecieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
