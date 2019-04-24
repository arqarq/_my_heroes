import { TestBed } from '@angular/core/testing';

import { HeroListResolverService } from './hero-list-resolver.service';

describe('HeroListResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroListResolverService = TestBed.get(HeroListResolverService);
    expect(service).toBeTruthy();
  });
});
