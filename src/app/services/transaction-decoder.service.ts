import { Injectable } from '@angular/core';
import Web3 from 'web3';
import { Transaction } from 'web3-core';
import { AbiInput, AbiItem, AbiOutput } from 'web3-utils';


@Injectable({
  providedIn: 'root'
})
export class TransactionDecoderService {
  public web3: Web3;
  public hashes: { name: string; hash: string; inputs: AbiInput[]; outputs: AbiOutput[] }[];
  constructor() {
    this.web3 = new Web3();
  }
  public loadAbi(abi: AbiItem[]): void {
    this.hashes = this.getFunctionHashes(abi);
  }
  // TODO add getTransationDatafromHash

  public parseTxInputs(txData: Transaction): {
    functionCalled: { name: string; hash: string; inputs: AbiInput[]; outputs: AbiOutput[] };
    parameters: { [key: string]: unknown };
  } {
    const functionCalled = this.findFunctionByHash(txData.input);
    const parameters = this.parseBlockTransactionParameters(functionCalled.inputs, txData.input);
    // TODO return parsed function as text as well
    return {
      functionCalled,
      parameters
    };
  }

  public findFunctionByHash(functionHash: string): { name: string; hash: string; inputs: AbiInput[]; outputs: AbiOutput[] } | null {
    const hash = functionHash.substring(0, 10);
    for (let i = 0; i < this.hashes.length; i++) {
      if (this.hashes[i].hash.substring(0, 10) === hash) {
        return this.hashes[i];
      }
    }
    return null;
  }

  private getFunctionHashes(abi: AbiItem[]): { name: string; hash: string; inputs: AbiInput[]; outputs: AbiOutput[] }[] {
    const hashes = [];
    for (let i = 0; i < abi.length; i++) {
      const item = abi[i];
      if (item.type === 'function') {
        const signature = `${item.name}(${item.inputs?.map((input) => input.type).join(',')})`;
        const hash = this.web3.utils.sha3(signature);
        hashes.push({
          name: item.name || '',
          hash,
          inputs: item.inputs || [],
          outputs: item.outputs || []
        });
      }
    }
    return hashes;
  }

  private parseBlockTransactionParameters(params: AbiInput[], txData: string): { [key: string]: unknown } {
    txData = txData.slice(10);
    txData = `0x${txData}`;
    return this.web3.eth.abi.decodeParameters(params, txData);
  }


}
