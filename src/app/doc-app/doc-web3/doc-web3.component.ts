import { Component, OnInit } from '@angular/core';
import { FileImportAbstractComponent } from 'app/models/file-import.abstract';
import { DocWeb3WriterService } from 'app/services/doc-web3-writer.service';
import { AbiItem } from 'web3-utils';


@Component({
  selector: 'app-doc-web3',
  templateUrl: './doc-web3.component.html',
  styleUrls: ['./doc-web3.component.css']
})
export class DocWeb3Component extends FileImportAbstractComponent implements OnInit {
  result: { fList: AbiItem[]; eList: AbiItem[] };

  constructor() {
    super();
  }

  override ngOnInit() {
  }

  public writeDoc(): void {
    if (!this.abiInput) { return; }
    const parsedContract = JSON.parse(this.abiInput);
    // this.unitTestWriterService.test(parsedContract);
    this.result = DocWeb3WriterService.writeDoc(parsedContract);
    console.log(this.result);
  }

  public filterBy(array: any[], prop: string) {
    return array.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }
}
