import { TestBed } from '@angular/core/testing';

import { DocWeb3WriterService } from './doc-web3-writer.service';

describe('DocWeb3WriterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocWeb3WriterService = TestBed.get(DocWeb3WriterService);
    expect(service).toBeTruthy();
  });
});
