import { TestBed } from '@angular/core/testing';

import { AbiStorageService } from './abi-storage.service';

describe('AbiStorageService', () => {
  let service: AbiStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbiStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
