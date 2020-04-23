import { TestBed } from '@angular/core/testing';

import { CloudFirebaseRepository } from './cloud-firebase-repository.service';

describe('CloudFirebaseService', () => {
  let service: CloudFirebaseRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CloudFirebaseRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
