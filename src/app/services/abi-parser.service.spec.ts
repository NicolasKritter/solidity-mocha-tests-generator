import { TestBed } from '@angular/core/testing';

import { AbiParserService } from './abi-parser.service';

describe('AbiParserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AbiParserService = TestBed.get(AbiParserService);
    expect(service).toBeTruthy();
  });
});
