import { TestBed } from '@angular/core/testing';

import { TransactionDecoderService } from './transaction-decoder.service';

describe('TransactionDecoderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransactionDecoderService = TestBed.get(TransactionDecoderService);
    expect(service).toBeTruthy();
  });
});
