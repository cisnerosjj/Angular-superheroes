import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchSuperheroesComponent } from './search-superheroes/search-superheroes.component';
import { SuperheroComponent } from './superhero/superhero.component';
import { MaterialModule } from './material/material.module';
import { LayoutPageComponent } from './layout-page/layout-page.component';
import { SuperheroesRoutingModule } from './superheroes-routing.module';

@NgModule({
  declarations: [
    SuperheroComponent,
    SearchSuperheroesComponent,
    LayoutPageComponent,
  ],
  imports: [CommonModule, MaterialModule, SuperheroesRoutingModule],
})
export class SuperheroesModule {}
