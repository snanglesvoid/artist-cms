import { TestBed } from '@angular/core/testing';

import { GraphqlApiService } from './graphql-api.service';

describe('GraphqlApiService', () => {
  let service: GraphqlApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphqlApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
