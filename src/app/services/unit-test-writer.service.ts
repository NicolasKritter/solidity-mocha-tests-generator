import { Injectable } from '@angular/core';
import { ContractInsOuts } from '../model/contract-ins-outs';
import { ContractElement } from '../model/contract-element';
import { ApiParserService } from './api-parser.service';
import { ParsedOut } from '../model/parsed-out';

@Injectable({
  providedIn: 'root'
})
export class UnitTestWriterService {
  constructor() {}

  static initFile(name: string): string {
    return `
    const ${name} = artifacts.require("${name}");
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
  static writeOutputs(outputs: ContractInsOuts[]): string {
    if (outputs.length < 1) {
      return '//TODO Attach Event or getter';
    }
    let res = '';
    let out: ParsedOut;

    let i = 0;
    outputs.forEach(e => {
      out = ApiParserService.parseOut(e);
      res += `assert.equal(result['${i}']${out.transfo}, ${out.val}, "should be ${out.val} and type ${out.realType}");
       `;
      i++;
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
    const res = `
    it('${func.name}', async ()=>{ //TODO TOCHECK
     const result = await access.${func.name}(${input[0]}); // (${input[1]})
     ${output}
    });
    `;
    return res;
  }
  static writeOutputsEvent(outputs: ContractInsOuts[]): string[] {
    let s = '';
    let helper = '';
    let output: ParsedOut;
    outputs.forEach(element => {
      output = ApiParserService.parseIn(element);
      s += ` ev.${element.name} == ${output.val} &`;
      helper += ` ${output.transfo}: ${output.realType},`;
    });
    if (s.length) {
      s = s.slice(0, s.length - 1);
      s = 'return ' + s + ';';
    }
    if (helper.length) {
      helper = helper.slice(0, helper.length - 1);
    }
    return [s, helper];
  }

  static writeEvent(event: ContractElement): string {
    const outputParsed = UnitTestWriterService.writeOutputsEvent(event.inputs);
    const s = `
            truffleAssert.eventEmitted(callThatTriggersTheEvent, '${event.name}', (ev) => {
              ${outputParsed[0]} // {${outputParsed[1]}}
              });
          `;
    return s;
  }

  static writeEventsTest(eventList: ContractElement[]): string {
    let s = '';
    eventList.forEach(element => {
      s += this.writeEvent(element);
      // s += `it('${element.name}',()=>{${element.inputs}})` + '\n';
    });
    return s;
  }

  static writeTest(contract: any): string [] {
    const sortedElements = ApiParserService.parseABIForElements(contract);
    const contractName = ApiParserService.getContractName(contract);
    const eventList = UnitTestWriterService.writeEventsTest(sortedElements.eList);
    let s = this.initFile(contractName);
    s += this.addContract(contractName);
    s += this.writeFunctionsTest(sortedElements.fList);
    s += this.closeFile();
    return [s, eventList];
  }

  test(contract: any): any {
    // const sortedElements = ApiParserService.parseABIForElements(contract);
    // console.log(UnitTestWriterService.writeEventsTest(sortedElements.eList));
  }
}
