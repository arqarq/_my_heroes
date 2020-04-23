import { TestBed } from '@angular/core/testing';

import { CloudFirebaseService } from './cloud-firebase.service';

describe('CloudFirebaseRepositoryService', () => {
  let service: CloudFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CloudFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
