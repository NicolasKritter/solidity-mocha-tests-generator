import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DocWeb3WriterService } from 'src/app/services/doc-web3-writer.service';
import { FileImportAbstractComponent } from 'src/app/models/file-import.abstract';

@Component({
  selector: 'app-doc-web3',
  templateUrl: './doc-web3.component.html',
  styleUrls: ['./doc-web3.component.css']
})
export class DocWeb3Component extends FileImportAbstractComponent implements OnInit {
  result: string;

  constructor() {
    super();
   }

  ngOnInit() {
  }

  writeDoc(): void {
    if (!this.abiInput) {return; }
    const parsedContract = JSON.parse(this.abiInput);
    // this.unitTestWriterService.test(parsedContract);
    const txtJs = DocWeb3WriterService.writeDoc(parsedContract);
  }
}
