import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DocWeb3WriterService } from 'src/app/services/doc-web3-writer.service';
import { FileImportAbstractComponent } from 'src/app/models/file-import.abstract';
import { ContractElement } from 'src/app/class/contract-element';

@Component({
  selector: 'app-doc-web3',
  templateUrl: './doc-web3.component.html',
  styleUrls: ['./doc-web3.component.css']
})
export class DocWeb3Component extends FileImportAbstractComponent implements OnInit {
  result: { fList: ContractElement[], eList: ContractElement[] };

  constructor() {
    super();
  }

  ngOnInit() {
  }

  writeDoc(): void {
    if (!this.abiInput) { return; }
    const parsedContract = JSON.parse(this.abiInput);
    // this.unitTestWriterService.test(parsedContract);
    this.result = DocWeb3WriterService.writeDoc(parsedContract);
    console.log(this.result);
  }

  filterBy(array: any[], prop: string ) {
    return array.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }
}
