import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { SuperheroService } from 'src/app/services/superhero.service';
import { Superhero } from 'src/superhero.model';

@Component({
  selector: 'app-search-superheroes',
  templateUrl: './search-superheroes.component.html',
  styleUrls: ['./search-superheroes.component.css'],
})
export class SearchSuperheroesComponent {
  public searchInput = new FormControl('');
  public superheroes: Superhero[] = [];
  public selectedSuperhero?: Superhero;

  constructor(private superheroService: SuperheroService) {}

  searchSuperhero() {
    const inputValue: string = this.searchInput.value || '';

    this.superheroService
      .getSuggestions(inputValue)
      .subscribe((superheroes) => (this.superheroes = superheroes));
  }
  onSelectedOption(event: MatAutocompleteSelectedEvent): void {
    if (!event.option.value) {
      this.selectedSuperhero = undefined;
      return;
    }

    const superhero: Superhero = event.option.value;
    this.searchInput.setValue(superhero.superhero);

    this.selectedSuperhero = superhero;
  }
}
