import { Injectable } from '@angular/core';
import { ParsedOut } from 'app/class/parsed-out';
import { ASSERT_BY_TYPE } from 'app/config/types';
import { AbiItem, AbiInput, AbiOutput } from 'web3-utils';

const TYPE_FUNCTION = 'function';
const TYPE_EVENT = 'event';
@Injectable({
  providedIn: 'root'
})
export class AbiParserService {
  constructor() { }
  // TODO https://github.com/ethereum-ts/TypeChain/blob/39cba206d406623020eb84187edc8fca923e55e6/packages/typechain-target-web3-v2/lib/generation.ts

  static parseOut(output: AbiInput | AbiOutput): ParsedOut {
    let res: ParsedOut;
    switch (ASSERT_BY_TYPE[output.type]) {
      case 'int':
        res = new ParsedOut('.toNumber()', '42', output.type);
        break;
      case 'string':
        res = new ParsedOut('', '\'myString\'', output.type);
        break;
      case 'bool':
        res = new ParsedOut('', 'true', output.type);
        break;
      case 'adress':
        res = new ParsedOut('', '{myAddress}', output.type);
        break;
      default:
        res = new ParsedOut('', '{X}', output.type);
        break;
    }
    return res;
  }

  static parseIn(input: AbiInput | AbiOutput): ParsedOut {
    let res: ParsedOut;
    switch (ASSERT_BY_TYPE[input.type]) {
      case 'int':
        res = new ParsedOut(input.name, '42', input.type);
        break;
      case 'string':
        res = new ParsedOut(input.name, '"myString"', input.type);
        break;
      case 'bool':
        res = new ParsedOut(input.name, 'true', input.type);
        break;
      case 'adress':
        res = new ParsedOut(input.name, '{myAddress}', input.type);
        break;
      default:
        res = new ParsedOut(input.name, '{X}', input.type);
        break;
    }
    return res;
  }

  static getContractName(contract: any): string {
    if (!contract) { return ''; }
    return contract.contractName || 'My_Contract';
  }
  static parseABIForElements(contract: any): { fList: AbiItem[]; eList: AbiItem[] } {
    if (!contract) { return null; }
    return AbiParserService.exctractElementByTypes(contract.abi);
  }

  private static exctractElementByTypes(abi: any) {
    const fList = [];
    const eList = [];
    if (!abi) { return { fList, eList }; }
    abi.forEach((element: AbiItem) => {
      if (element.type === TYPE_FUNCTION) {
        fList.push(element);
      } else if (element.type === TYPE_EVENT) {
        eList.push(element);
      }
    });
    return { fList, eList };
  }

}
