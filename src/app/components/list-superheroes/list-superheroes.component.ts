import { Component } from '@angular/core';
import { SuperheroService } from 'src/app/services/superhero.service';
import { Superhero } from 'src/superhero.model';

@Component({
  selector: 'app-list-superheroes',
  templateUrl: './list-superheroes.component.html',
  styleUrls: ['./list-superheroes.component.css'],
})
export class ListSuperheroesComponent {
  public superheroes: Superhero[] = [];

  constructor(private superheroesService: SuperheroService) {}

  ngOnInit(): void {
    this.superheroesService
      .getSuperheroes()
      .subscribe((superheroes) => (this.superheroes = superheroes));
  }
}
