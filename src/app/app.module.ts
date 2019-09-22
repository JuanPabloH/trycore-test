import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { DataService } from './parte1/services/data.service';

import { PeopleComponent } from './parte1/people/people.component';
import { PlanetComponent } from './parte1/planet/planet.component';
import { SpecieComponent } from './parte1/specie/specie.component';
import {Routes, RouterModule} from '@angular/router';
const appRoutes: Routes=[
  {path: 'people',component:PeopleComponent},
  {path: 'planet', component:PlanetComponent},
  {path: 'specie', component:SpecieComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    PlanetComponent,
    SpecieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
