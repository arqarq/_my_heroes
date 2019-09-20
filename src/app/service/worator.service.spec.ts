import { TestBed } from '@angular/core/testing';

import { WoratorService } from './worator.service';

describe('WoratorService', () => {
  let service: WoratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WoratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
