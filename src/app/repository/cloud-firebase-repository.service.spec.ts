import { TestBed } from '@angular/core/testing';

import { CloudFirebaseRepositoryService } from './cloud-firebase-repository.service';

describe('CloudFirebaseRepositoryService', () => {
  let service: CloudFirebaseRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CloudFirebaseRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
