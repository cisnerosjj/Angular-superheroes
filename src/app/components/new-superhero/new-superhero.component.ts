import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Publisher, Superhero } from 'src/superhero.model';
import { ActivatedRoute, Router } from '@angular/router';
import { SuperheroService } from 'src/app/services/superhero.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-new-superhero',
  templateUrl: './new-superhero.component.html',
  styleUrls: ['./new-superhero.component.css'],
})
export class NewSuperheroComponent {
  public superheroForm = new FormGroup({
    id: new FormControl<string>(''),
    superhero: new FormControl<string>('', { nonNullable: true }),
    alter_ego: new FormControl<string>('', { nonNullable: true }),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    first_appearance: new FormControl<string>(''),
    characters: new FormControl<string>(''),
    alt_img: new FormControl(''),
  });

  public publishers = [
    { id: 'DC Comics', value: 'DC - Comics' },
    { id: 'Marvel Comics', value: 'Marvel - Comics' },
  ];

  constructor(
    private superheroService: SuperheroService,
    private activatedRoute: ActivatedRoute,
    private router: Router // private snackBar: MatSnackBar,
  ) {}

  get currentSuperhero(): Superhero {
    const superhero = this.superheroForm.value as Superhero;

    return superhero;
  }

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return;

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.superheroService.getSuperheroById(id)))
      .subscribe((superhero) => {
        if (!superhero) return this.router.navigateByUrl('/');

        this.superheroForm.reset(superhero);
        return;
      });
  }

  onSubmit(): void {
    if (this.superheroForm.invalid) return;

    if (this.currentSuperhero.id) {
      this.superheroService
        .updateSuperhero(this.currentSuperhero)
        .subscribe((superhero) => {
          this.router.navigate(['/superheroes', superhero.id]);
        });
      return;
    }

    this.superheroService
      .addSuperhero(this.currentSuperhero)
      .subscribe((superhero) => {
        this.router.navigate(['/superheroes', superhero.id]);
      });
  }

  textoInput: string = '';

  onInputChange(event: any) {
    function capitalizeFirstLetter(input: string): string {
      if (!input) return input; // Verifica si el input es null, undefined o vacío

      return input.charAt(0).toUpperCase() + input.slice(1);
    }
    // Llama a la función para capitalizar el texto del input
    this.textoInput = capitalizeFirstLetter(event.target.value);
    this.superheroForm.patchValue({
      superhero: this.textoInput,
    });
  }
}
