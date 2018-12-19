import {TestBed} from '@angular/core/testing';

import {Problemservice} from './problemservice';

describe('Problemservice', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Problemservice = TestBed.get(Problemservice);
    expect(service).toBeTruthy();
  });
});
