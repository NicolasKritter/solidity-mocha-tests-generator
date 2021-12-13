import { Injectable } from '@angular/core';
import { AbiParserService } from './abi-parser.service';
import { AbiItem, AbiInput, AbiOutput } from 'web3-utils';
import { ParsedFunction } from 'app/config/types';

@Injectable({
  providedIn: 'root'
})
export class DocWeb3WriterService {

  constructor() { }
  static writeDoc(contract: any): { contractName: string; fList: ParsedFunction[]; eList: ParsedFunction[] } {
    const sortedElements = AbiParserService.parseABIForElements(contract.abi);
    const contractName = AbiParserService.getContractName(contract);
    console.log('sorted', sortedElements);
    return {
      contractName,
      fList: DocWeb3WriterService.parseFunctions(sortedElements.fList),
      eList: DocWeb3WriterService.parseFunctions(sortedElements.eList)
    };
  }
  static getParsedElements(contract: any): any {
    return AbiParserService.parseABIForElements(contract);
  }

  static parseFunctions(functionList: AbiItem[]): ParsedFunction[] {
    const res = functionList.map((e: ParsedFunction) => {
      e.parsedInputs = DocWeb3WriterService.parseInOut(e.outputs);
      e.parsedOutputs = DocWeb3WriterService.parseInOut(e.inputs);
      switch (e.stateMutability) {
        case 'nonpayable':
          e.style = 'cost-gaz';
          break;
        case 'view':
          e.style = 'fn-view';
          break;
        case 'pure':
          e.style = 'fn-pure';
          break;
      }
      return e;
    });
    return res;
  }

  private static parseInOut(inouts: (AbiInput | AbiOutput)[]): string {
    if (!inouts || inouts.length < 1) { return '()'; }
    let str = '(';
    inouts.forEach(element => {
      str += `${element.name}: ${element.type}, `;
    });

    str = str.slice(0, str.length - 2);
    str += ')';

    return str;
  }


}
