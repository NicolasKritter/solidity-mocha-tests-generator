import { TestBed } from '@angular/core/testing';

import { ApiParserService } from './api-parser.service';

describe('ApiParserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiParserService = TestBed.get(ApiParserService);
    expect(service).toBeTruthy();
  });
});
