import { Injectable } from '@angular/core';
import { AbiParserService } from './abi-parser.service';
import { UnitTestWriterService } from './unit-test-writer.service';

@Injectable({
  providedIn: 'root'
})
export class DocWeb3WriterService {

  constructor() { }

  static writeDoc(contract: any): string [] {
    const sortedElements = AbiParserService.parseABIForElements(contract);
    const contractName = AbiParserService.getContractName(contract);
    console.log('sorted', sortedElements);
    return [];
  }
}
