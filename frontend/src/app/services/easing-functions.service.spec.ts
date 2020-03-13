import { TestBed } from '@angular/core/testing';

import { EasingFunctionsService } from './easing-functions.service';

describe('EasingFunctionsService', () => {
  let service: EasingFunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EasingFunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
