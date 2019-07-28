import { Injectable } from '@angular/core';
declare let require: any;
const Web3 = require('web3');

@Injectable({
  providedIn: 'root'
})
export class TransactionDecoderService {
  web3: any;
  functionsDatas: any[];
  constructor() {
    this.web3 = new Web3();
  }

  public loadAbi(abi: any): void {
    this.functionsDatas = this.getFunctionData(abi);
  }

  public parseTxInputs(txData): any {
    const functionCalled = this.findFunctionByHash(this.functionsDatas, txData.input);
    const parameters = this.parseBlockTransactionParameters(functionCalled.inputs, txData.input);
    return {
      functionCalled,
      parameters,
    };
  }

 private getFunctionData(abi): string[] {
    const functionData = [];
    for (const item of abi) {
      // eslint-disable-next-line security/detect-object-injection
      if (item.type === 'function') {
        const signature = `${item.name}(${item.inputs.map(input => input.type).join(',')})`;
        const hash = this.web3.utils.sha3(signature);
        functionData.push({
          name: item.name,
          hash,
          inputs: item.inputs,
          outputs: item.outputs,
        });
      }
    }
    return functionData;
  }

  private parseBlockTransactionParameters(params, txData): any {
    txData = txData.slice(10);
    txData = `0x${txData}`;
    return this.web3.eth.abi.decodeParameters(params, txData);
  }

  private findFunctionByHash(functionDatas, functionHash): any {
    for (const fn of functionDatas) {
      if (fn.hash.substring(0, 10) === functionHash.substring(0, 10)) {
        return fn;
      }
    }
    return null;
  }
}
