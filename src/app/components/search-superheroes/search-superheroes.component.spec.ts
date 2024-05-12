import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSuperheroesComponent } from './search-superheroes.component';

describe('SearchSuperheroesComponent', () => {
  let component: SearchSuperheroesComponent;
  let fixture: ComponentFixture<SearchSuperheroesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchSuperheroesComponent]
    });
    fixture = TestBed.createComponent(SearchSuperheroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
