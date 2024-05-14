import { SuperheroComponent } from './superhero/superhero.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchSuperheroesComponent } from './search-superheroes/search-superheroes.component';
import { MaterialModule } from './material/material.module';
import { LayoutPageComponent } from './layout-page/layout-page.component';
import { SuperheroesRoutingModule } from './superheroes-routing.module';
import { CardComponent } from './card/card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewSuperheroComponent } from './new-superhero/new-superhero.component';
import { ListSuperheroesComponent } from './list-superheroes/list-superheroes.component';
import { superheroImagePipe } from '../pipes/superhero_img.pipe';

@NgModule({
  declarations: [
    SearchSuperheroesComponent,
    LayoutPageComponent,
    SearchSuperheroesComponent,
    CardComponent,
    NewSuperheroComponent,
    SuperheroComponent,
    ListSuperheroesComponent,
    superheroImagePipe,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SuperheroesRoutingModule,
    ReactiveFormsModule,
  ],
})
export class SuperheroesModule {}
