import { Injectable } from '@angular/core';
import { ContractElement } from '../class/contract-element';
import { ContractInsOuts } from '../class/contract-ins-outs';
import { ParsedOut } from '../class/parsed-out';
declare function require(url: string): any;
// const contract = require('../data/contract.json');
const ASSERT_BY_TYPE = require('../config/assert-by-type.json');

const TYPE_FUNCTION = 'function';
const TYPE_EVENT = 'event';
@Injectable({
  providedIn: 'root'
})
export class AbiParserService {
  constructor() { }
  // TODO https://github.com/ethereum-ts/TypeChain/blob/39cba206d406623020eb84187edc8fca923e55e6/packages/typechain-target-web3-v2/lib/generation.ts

  static parseOut(output: ContractInsOuts): ParsedOut {
    let res: ParsedOut;
    switch (ASSERT_BY_TYPE[output.type]) {
      case 'int':
        res = new ParsedOut('.toNumber()', '42', output.type);
        break;
      case 'string':
        res = new ParsedOut('', `'myString'`, output.type);
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

  static parseIn(input: ContractInsOuts): ParsedOut {
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

  private static exctractElementByTypes(abi: any) {
    const fList = [];
    const eList = [];
    if (!abi) { return { fList, eList }; }
    abi.forEach((element: ContractElement) => {
      if (element.type === TYPE_FUNCTION) {
        fList.push(element);
      } else if (element.type === TYPE_EVENT) {
        eList.push(element);
      }
    });
    return { fList, eList };
  }

  static getContractName(contract: any): string {
    if (!contract) { return; }
    return contract.contractName;
  }
  static parseABIForElements(contract: any): { fList: ContractElement[], eList: ContractElement[] } {
    if (!contract) { return null; }
    return AbiParserService.exctractElementByTypes(contract.abi);
  }

}
