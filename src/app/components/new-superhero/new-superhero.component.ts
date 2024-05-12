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

  get currentHero(): Superhero {
    const hero = this.superheroForm.value as Superhero;

    return hero;
  }

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return;

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.superheroService.getHeroById(id)))
      .subscribe((hero) => {
        if (!hero) return this.router.navigateByUrl('/');

        this.superheroForm.reset(hero);
        return;
      });
  }

  onSubmit(): void {
    if (this.superheroForm.invalid) return;

    if (this.currentHero.id) {
      this.superheroService
        .updateSuperhero(this.currentHero)
        .subscribe((superhero) => {
          this.router.navigate(['/heroes', superhero.id]);
        });
      return;
    }

    this.superheroService
      .addSuperhero(this.currentHero)
      .subscribe((superhero) => {
        this.router.navigate(['/heroes', superhero.id]);
      });
  }
}
