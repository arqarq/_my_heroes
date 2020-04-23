import { TestBed } from '@angular/core/testing';

import { CloudFirebase } from './cloud-firebase.service';

describe('CloudFirebaseRepositoryService', () => {
  let service: CloudFirebase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CloudFirebase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
