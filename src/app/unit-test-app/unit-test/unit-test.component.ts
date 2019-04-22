import { UnitTestWriterService } from './../../services/unit-test-writer.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FileImportAbstractComponent } from 'src/app/models/file-import.abstract';

@Component({
  selector: 'app-unit-test',
  templateUrl: './unit-test.component.html',
  styleUrls: ['./unit-test.component.css']
})
export class UnitTestComponent extends FileImportAbstractComponent implements OnInit {
  result: string;
  events: string;

  constructor() {
    super();
   }

  ngOnInit() {
  }

  writeTest(): void {
    if (!this.abiInput) {return; }
    const parsedContract = JSON.parse(this.abiInput);
    // this.unitTestWriterService.test(parsedContract);
    const txtJs = UnitTestWriterService.writeTest(parsedContract);
    this.result = txtJs[0];
    this.events = txtJs[1];
  }

copyResultToClipBoard(): void {
  this.copyToClipboard(this.result);
}
copyEventToClipBoard(): void {
  this.copyToClipboard(this.events);
}


}
