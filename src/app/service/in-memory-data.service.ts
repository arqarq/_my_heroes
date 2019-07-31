import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { HEROES } from '../repository/mock-heroes';
import { CRISES } from '../repository/mock-crises';
import { Marvel } from '../model/marvel';
import { SUPERMEN } from '../repository/mock-supermanes';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService<T extends Marvel> implements InMemoryDbService {
  createDb() {
    return {
      HEROES,
      CRISES,
      SUPERMEN
    };
  }

  genId<A extends T>(array: A[]): number {
    return array.length > 0 ? Math.max(...array.map(elem => elem.id)) + 1 : 11;
  }
}
