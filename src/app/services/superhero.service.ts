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

  getSuperheroById(id: string): Observable<Superhero | undefined> {
    return this.http
      .get<Superhero>(`${this.baseUrl}/heroes/${id}`)
      .pipe(catchError((error) => of(undefined)));
  }
  getSuggestions(query: string): Observable<Superhero[]> {
    return this.http.get<Superhero[]>(
      `${this.baseUrl}/heroes?q=${query}&_limit=6`
    );
  }

  // CREATE - POST
  addSuperhero(superhero: Superhero): Observable<Superhero> {
    return this.http.post<Superhero>(`${this.baseUrl}/heroes`, superhero);
  }

  // UPDATE - FETCH
  updateSuperhero(superhero: Superhero): Observable<Superhero> {
    if (!superhero.id) throw Error('Superhero id is required');
    return this.http.patch<Superhero>(
      `${this.baseUrl}/heroes/${superhero.id}`,
      superhero
    );
  }

  // DELETE - DELETE
  deleteHeroById(id: string): Observable<boolean> {
    return this.http.delete(`${this.baseUrl}/heroes/${id}`).pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }
}
