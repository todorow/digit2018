import { TestBed } from '@angular/core/testing';

import { MarkerLocationServiceService } from './marker-location-service.service';

describe('MarkerLocationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarkerLocationServiceService = TestBed.get(MarkerLocationServiceService);
    expect(service).toBeTruthy();
  });
});
