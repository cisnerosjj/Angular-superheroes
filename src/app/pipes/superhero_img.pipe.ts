import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'superheroImage',
})
export class superheroImagePipe implements PipeTransform {
  transform(superhero: any) {
    if (!superhero.id && !superhero.alt_img) {
      return 'assets/no-image.png';
    }

    if (superhero.alt_img) return superhero.alt_img;

    return `assets/superheroes/${superhero.id}.jpg`;
  }
}
