import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchSuperheroesComponent } from './search-superheroes/search-superheroes.component';
import { SuperheroComponent } from './superhero/superhero.component';
import { MaterialModule } from './material/material.module';
import { LayoutPageComponent } from './layout-page/layout-page.component';
import { SuperheroesRoutingModule } from './superheroes-routing.module';
import { CardComponent } from './card/card.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SuperheroComponent,
    SearchSuperheroesComponent,
    LayoutPageComponent,
    SearchSuperheroesComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SuperheroesRoutingModule,
    ReactiveFormsModule,
  ],
})
export class SuperheroesModule {}
