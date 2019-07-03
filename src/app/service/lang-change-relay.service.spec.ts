import { TestBed } from '@angular/core/testing';

import { LangChangeRelayService } from './lang-change-relay.service';

describe('LangChangeRelayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LangChangeRelayService = TestBed.get(LangChangeRelayService);
    expect(service).toBeTruthy();
  });
});
