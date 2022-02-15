import { Component, OnInit } from '@angular/core';
import { FileImportAbstractComponent } from 'app/models/file-import.abstract';
import { UnitTestWriterService } from 'app/services/unit-test-writer.service';

@Component({
  selector: 'app-unit-test',
  templateUrl: './unit-test.component.html',
  styles: ['']
})
export class UnitTestComponent extends FileImportAbstractComponent implements OnInit {
  public result: string;
  public events: string;

  constructor() {
    super();
  }

  override ngOnInit() {
  }

  public writeTest(abiInput: string): void {
    this.abiInput = abiInput;
    if (!this.abiInput) { return; }
    const parsedContract = JSON.parse(this.abiInput);
    // this.unitTestWriterService.test(parsedContract);
    const txtJs = UnitTestWriterService.writeTest(parsedContract);
    this.result = txtJs[0];
    this.events = txtJs[1];
  }

  public copyResultToClipBoard(): void {
    this.copyToClipboard(this.result);
  }
  public copyEventToClipBoard(): void {
    this.copyToClipboard(this.events);
  }


}
