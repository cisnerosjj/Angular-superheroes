import { Component } from '@angular/core';
import { Superhero } from 'src/superhero.model';

@Component({
  selector: 'app-superhero',
  templateUrl: './superhero.component.html',
  styleUrls: ['./superhero.component.css'],
})
export class SuperheroComponent {
  public hero!: Superhero;

  ngOnInit(): void {
    ('');
  }
}
