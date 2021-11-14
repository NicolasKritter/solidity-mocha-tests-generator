import { Injectable } from '@angular/core';
import { AbiParserService } from './abi-parser.service';
import { AbiItem, AbiInput, AbiOutput } from 'web3-utils';

@Injectable({
  providedIn: 'root'
})
export class DocWeb3WriterService {

  constructor() { }
  // TODO! type is contract
  static writeDoc(contract: any): { contractName: string; fList: AbiItem[]; eList: AbiItem[] } {
    const sortedElements = AbiParserService.parseABIForElements(contract);
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

  static parseFunctions(functionList: AbiItem[]) {
    const res = [];
    functionList.forEach(element => {
      const e: any = element;
      e.outputs = DocWeb3WriterService.parseInOut(element.outputs);
      e.inputs = DocWeb3WriterService.parseInOut(element.inputs);
      res.push(e);
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
