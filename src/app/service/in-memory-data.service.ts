import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { HEROES } from '../repository/mock-heroes';
import { CRISES } from '../repository/mock-crises';
import { Crisis } from '../model/crisis';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {
  }

  createDb() {
    return {HEROES, CRISES};
  }

  genId(array: Hero[] | Crisis[]): number {
    return array.length > 0 ? Math.max(...array.map(elem => elem.id)) + 1 : 11;
  }
}
