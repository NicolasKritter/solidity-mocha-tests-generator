import { Injectable } from '@angular/core';
import { ContractInsOuts } from '../model/contract-ins-outs';
import { ContractElement } from '../model/contract-element';
import { ApiParserService } from './api-parser.service';
import { ParsedOut } from '../model/parsed-out';

@Injectable({
  providedIn: 'root'
})
export class UnitTestWriterService {

  constructor() { }

  static initFile(): string {
    return `
    const Access = artifacts.require("Access");
    const assert = require("chai").assert;
    const truffleAssert = require('truffle-assertions');

    `;
  }

  static addContract(name: string): string {
   return `
    contract("${name}", (accounts) => {

      let access;
      const ownerAccount = accounts[0];

      before(async () => {
          access = await Access.new({
              from: ownerAccount
          });
      });
    `;
  }

  static closeFile(): string {
    return '});';
  }
  static  writeOutputs(outputs: ContractInsOuts[]): string {
    if (outputs.length < 1) {return '//TODO Attach Event or getter'; }
    let res = '';
    let out: ParsedOut;

    let i = 0;
    outputs.forEach( e => {
      out = ApiParserService.parseOut(e);
      res +=
       `assert.equal(result['${i}']${out.transfo}, ${out.val}, "should be ${out.val} and type ${out.realType}");
       `;
      i ++;
    });
    return res;
  }
  static writeInputs(inputs: ContractInsOuts[]): string[] {
    let s = '';
    let helper = '';
    let input: ParsedOut;
    inputs.forEach(e => {
      input = ApiParserService.parseIn(e);
      helper += ` ${input.transfo}: ${input.realType},`;
      s += `${input.val} ,`;
    });
    if (s.length) {
      s = s.slice(0, s.length - 1);
    }
    if (helper.length) {
      helper = helper.slice(0, helper.length - 1);
    }
    return [s, helper];
  }
  static writeFunctionsTest(functionList: ContractElement[]): string {
      let s = ' ';
      functionList.forEach(element => {
        s += UnitTestWriterService.writeTestForFunction(element);
      });
      return s;
  }

  static writeTestForFunction(func: ContractElement) {
    const input = UnitTestWriterService.writeInputs(func.inputs);
    const output = UnitTestWriterService.writeOutputs(func.outputs);
    const res =
    `
    it('${func.name}', async ()=>{ //TODO TOCHECK
     const result = await access.${func.name}(${input[0]}); // (${input[1]})
     ${output}
    });
    `;
    return res;
  }

  static writeEvent(event: ContractElement, s: string) {
    s = s || '';
    const input = UnitTestWriterService.writeEventInputs(event.inputs);
    s +=
    `

    `;
    return s;
  }

  static writeEventInputs(inputs: ContractInsOuts[]) {
  //   truffleAssert.eventEmitted(tu, 'LoginUser', (ev) => {
  //     return ev.userId == 0 & ev.role == roleOK;
  // });
  }
  static writeEventsTest(eventList: ContractElement[]): string {
      let s = '';
      eventList.forEach(element => {
        s += `it('${element.name}',()=>{${element.inputs}})` + '\n';
      });
      return s;
  }

  static writeTest(contract: any): string {
    ApiParserService.setContract(contract);
    const sortedElements = ApiParserService.parseABIForElements();
    const contractName = ApiParserService.getContractName();
    let s = this.initFile();
    s += this.addContract(contractName);
    s += this.writeFunctionsTest(sortedElements.fList);
    s += this.closeFile();
    return s;
  }
  test(): any {
    const sortedElements = ApiParserService.parseABIForElements();
    console.log(sortedElements.eList);
  }

}
