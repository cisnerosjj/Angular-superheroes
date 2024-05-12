import { Component, Input } from '@angular/core';
import { Superhero } from 'src/superhero.model';

@Component({
  selector: 'superhero-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input()
  public superhero!: Superhero;

  ngOnInit(): void {
    if (!this.superhero) throw Error('Superhero property is required');
  }
}
