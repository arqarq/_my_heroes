import { TestBed } from '@angular/core/testing';
import { MarvelService } from './marvel.service';
import { Marvel } from '../model/marvel';

describe('MarvelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarvelService<Marvel> = TestBed.get(MarvelService);
    expect(service).toBeTruthy();
  });
});
