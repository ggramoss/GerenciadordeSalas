import { TestBed } from '@angular/core/testing';

import { SalaApiService } from './sala-api.service';

describe('SalaApiService', () => {
  let service: SalaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
