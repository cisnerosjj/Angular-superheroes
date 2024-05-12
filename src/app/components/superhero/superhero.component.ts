import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { SuperheroService } from 'src/app/services/superhero.service';
import { Superhero } from 'src/superhero.model';

@Component({
  selector: 'app-superhero',
  templateUrl: './superhero.component.html',
  styleUrls: ['./superhero.component.css'],
})
export class SuperheroComponent implements OnInit {
  public superhero!: Superhero;

  constructor(
    private superheroService: SuperheroService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.superheroService.getSuperheroById(id)))
      .subscribe((superhero) => {
        if (!superhero) return this.router.navigate(['/superheroes/search']);
        this.superhero = superhero;
        return;
      });
  }

  public goBack(): void {
    this.router.navigateByUrl('superheroes/search');
  }
}
