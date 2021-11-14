import { AbiItem } from 'web3-utils';

export const ASSERT_BY_TYPE = {
  'uint256': 'int',
  'uint32': 'int',
  'uint8': 'int',
  'uint': 'int',
  'string': 'string',
  'bool': 'bool',
  'address': 'address'
};

export interface ParsedFunction extends AbiItem {
  parsedInputs: string;
  parsedOutputs: string;
  style: string;
}
