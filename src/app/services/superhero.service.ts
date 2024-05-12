import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Superhero } from 'src/superhero.model';

const environments = {
  baseUrl: 'http://localhost:3000',
};
@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) {}

  // READ - GET
  getHeros(): Observable<Superhero[]> {
    return this.http.get<Superhero[]>(`${this.baseUrl}/superheroes`);
  }
}
