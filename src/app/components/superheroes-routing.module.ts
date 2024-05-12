import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchSuperheroesComponent } from './search-superheroes/search-superheroes.component';
import { LayoutPageComponent } from './layout-page/layout-page.component';
import { NewSuperheroComponent } from './new-superhero/new-superhero.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'new-hero', component: NewSuperheroComponent },
      { path: 'search', component: SearchSuperheroesComponent },
      { path: 'edit/:id', component: NewSuperheroComponent },

      { path: '**', redirectTo: 'search' },
      // { path: ':id', component: HeroPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperheroesRoutingModule {}
