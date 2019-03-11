import { Injectable } from '@angular/core';
const contract = require('app/data/contract.json');

const TYPE_FUNCTION = 'function';
const TYPE_EVENT = 'event';
@Injectable({
  providedIn: 'root'
})
export class ApiParserService {

  constructor() {}

  private static exctractElementByTypes(abi: any) {
    const fList = [];
    const eList = [];
    abi.forEach(element => {
      if (element.type === TYPE_FUNCTION) {
        fList.push(element);
      } else if (element.type === TYPE_EVENT) {
        eList.push(element);
      }
    });
    // for (e in abi) {
    //   element = abi[e];
    //   if (element.type === TYPE_FUNCTION) {
    //     fList.push(element);
    //   } else if (element.type === TYPE_EVENT) {
    //     eList.push(element);
    //   }
    // }
    return { fList, eList };
  }

  parseABIForElements(): any {
    return ApiParserService.exctractElementByTypes(contract.abi);
  }

}
