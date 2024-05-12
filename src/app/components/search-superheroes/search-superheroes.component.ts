import { Component } from '@angular/core';
import { HeroService } from 'src/app/services/superhero.service';
import { Superhero } from 'src/superhero.model';

@Component({
  selector: 'app-search-superheroes',
  templateUrl: './search-superheroes.component.html',
  styleUrls: ['./search-superheroes.component.css'],
})
export class SearchSuperheroesComponent {
  public superheroes: Superhero[] = [];

  constructor(private superheroService: HeroService) {}

  ngOnInit(): void {
    //   this.superheroService
    //     .getHeros()
    //     .subscribe((superheroes) => (this.superheroes = superheroes));
    console.log('llego');
  }
}
