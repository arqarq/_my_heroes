import {Injectable} from '@angular/core';
import {Hero} from '../model/hero';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {
  }

  createDb() {
    const HEROES = [
      {id: 11, name: 'Mr. Nice'},
      {id: 12, name: 'Narco'},
      {id: 13, name: 'Bombasto'},
      {id: 14, name: 'Celeritas'},
      {id: 15, name: 'Magneta'},
      {id: 16, name: 'RubberMan'},
      {id: 17, name: 'Dynama'},
      {id: 18, name: 'Dr IQ'},
      {id: 19, name: 'Magma'},
      {id: 20, name: 'Tornado'}
    ];
    return {HEROES};
  }

  genId(HEROES: Hero[]): number {
    return HEROES.length > 0 ? Math.max(...HEROES.map(heroO => heroO.id)) + 1 : 11;
  }
}
