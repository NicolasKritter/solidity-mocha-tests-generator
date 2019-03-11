import { TestBed } from '@angular/core/testing';

import { UnitTestWriterService } from './unit-test-writer.service';

describe('UnitTestWriterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnitTestWriterService = TestBed.get(UnitTestWriterService);
    expect(service).toBeTruthy();
  });
});
