import { Injectable } from '@angular/core';
import { ParsedOut } from 'app/class/parsed-out';
import { AbiInput, AbiItem, AbiOutput } from 'web3-utils';
import { AbiParserService } from './abi-parser.service';
import { formatContract } from './utils';

// TODO! check AbiInput for ContractInsOuts
@Injectable({
  providedIn: 'root'
})
export class UnitTestWriterService {
  constructor() { }

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
  static writeOutputs(outputs: (AbiInput | AbiOutput)[]): string {
    if (outputs.length < 1) {
      return '//TODO Attach Event or getter';
    }
    let res = '';
    let out: ParsedOut;

    let i = 0;
    outputs.forEach(e => {
      out = AbiParserService.parseOut(e);
      res += `assert.equal(result['${i}']${out.transfo}, ${out.val}, "should be ${out.val} and type ${out.realType}");
       `;
      i++;
    });
    return res;
  }
  static writeInputs(inputs: (AbiInput | AbiOutput)[]): any {
    let ins = '';
    let vars = '';
    let input: ParsedOut;
    inputs.forEach(e => {
      input = AbiParserService.parseIn(e);
      vars += `const ${input.transfo} = ${input.val}; // ${input.realType}` + '\n';
      ins += ` ${input.transfo},`;
    });
    if (ins.length) {
      ins = ins.slice(0, ins.length - 1);
    }

    return { ins, vars };
  }
  static writeFunctionsTest(functionList: AbiItem[]): string {
    let s = ' ';
    functionList.forEach(element => {
      s += UnitTestWriterService.writeTestForFunction(element);
    });
    return s;
  }

  static writeTestForFunction(func: AbiItem) {
    const input = UnitTestWriterService.writeInputs(func.inputs);
    const output = UnitTestWriterService.writeOutputs(func.outputs);
    const res = `
    it('${func.name}', async ()=>{ //TODO TOCHECK
    ${input.vars}
     const result = await access.${func.name}(${input.ins});
     ${output}
    });
    `;
    return res;
  }
  static writeOutputsEvent(outputs: (AbiInput | AbiOutput)[]): string[] {
    let s = '';
    let helper = '';
    let output: ParsedOut;
    outputs.forEach(element => {
      output = AbiParserService.parseIn(element);
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

  static writeEvent(event: AbiItem): string {
    const outputParsed = UnitTestWriterService.writeOutputsEvent(event.inputs);
    const s = `
            truffleAssert.eventEmitted(callThatTriggersTheEvent, '${event.name}', (ev) => {
              ${outputParsed[0]} // {${outputParsed[1]}}
              });
          `;
    return s;
  }

  static writeEventsTest(eventList: AbiItem[]): string {
    let s = '';
    eventList.forEach(element => {
      s += this.writeEvent(element);
      // s += `it('${element.name}',()=>{${element.inputs}})` + '\n';
    });
    return s;
  }
  // TODO! handle abi path
  static writeTest(contractData: any): string[] {
    const contract = formatContract(contractData);
    const sortedElements = AbiParserService.parseABIForElements(contract.abi);
    const contractName = AbiParserService.getContractName(contract);
    console.log('sorted', sortedElements);
    const eventList = UnitTestWriterService.writeEventsTest(sortedElements.eList);
    let s = this.initFile(contractName);
    s += this.addContract(contractName);
    s += this.writeFunctionsTest(sortedElements.fList);
    s += this.closeFile();
    return [s, eventList];
  }

}
