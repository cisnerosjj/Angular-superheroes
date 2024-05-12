import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchSuperheroesComponent } from './search-superheroes/search-superheroes.component';
import { LayoutPageComponent } from './layout-page/layout-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      // {path: 'new-hero', component: NewPageComponent},
      { path: 'search', component: SearchSuperheroesComponent },

      // {path: 'edti/:id', component: NewPageComponent},
      // {path: ':id', component: HeroPageComponent},
      { path: '**', redirectTo: 'search' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperheroesRoutingModule {}
