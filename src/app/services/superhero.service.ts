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
export class SuperheroService {
  private baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) {}

  // READ - GET
  getSuperheroes(): Observable<Superhero[]> {
    return this.http.get<Superhero[]>(`${this.baseUrl}/heroes`);
  }

  getHeroById(id: string): Observable<Superhero | undefined> {
    return this.http
      .get<Superhero>(`${this.baseUrl}/heroes/${id}`)
      .pipe(catchError((error) => of(undefined)));
  }
  getSuggestions(query: string): Observable<Superhero[]> {
    return this.http.get<Superhero[]>(
      `${this.baseUrl}/heroes?q=${query}&_limit=6`
    );
  }
}
