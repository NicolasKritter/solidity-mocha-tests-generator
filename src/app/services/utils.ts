import { AbiItem } from 'web3-utils';

export function formatContract(contract: any): { abi: AbiItem[] } {
  if (Array.isArray(contract)) {
    return { abi: contract };
  }
  return contract;
}
