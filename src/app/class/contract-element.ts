import { ContractInsOuts } from './contract-ins-outs';

export class ContractElement {
  name: string;
  constant: boolean;
  inputs: ContractInsOuts[];
  outputs: ContractInsOuts[];
  payable: boolean;
  stateMutability: boolean;
  type: string;
  signature: string;
}
