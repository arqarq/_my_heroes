import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { HEROES } from '../repository/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {
  }

  createDb() {
    return {HEROES};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(oneHero => oneHero.id)) + 1 : 11;
  }
}
