import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { SearchSuperheroComponent } from './components/search-superhero/search-superhero.component';
import { SearchSuperheroesComponent } from './components/search-superheroes/search-superheroes.component';
import { SuperheroComponent } from './components/superhero/superhero.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchSuperheroComponent,
    SearchSuperheroesComponent,
    SuperheroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
