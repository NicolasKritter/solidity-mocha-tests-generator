import { UnitTestWriterService } from './../../services/unit-test-writer.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-unit-test',
  templateUrl: './unit-test.component.html',
  styleUrls: ['./unit-test.component.css']
})
export class UnitTestComponent implements OnInit {
  @ViewChild('fileInput')
  fileInput: ElementRef;
  result: string;
  events: string;
  abiInput: string;
  urlContractJson: string;
  file: File;
  fileName: string;
  constructor() { }

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
  selectFile(): void {
    this.fileInput.nativeElement.click();
  }

  onFileChanged(e: any): void {
    this.file = e.target.files[0];
    this.fileName = this.file.name;
    if (this.fileName.endsWith('.json')) {
      this.parseFileToContractJson();
    }

  }
  parseFileToContractJson() {
    // const parsed = JSON.parse(this.file);
    if (!this.file) { return; }
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.abiInput = fileReader.result.toString();
    };
    fileReader.readAsText(this.file);
}

copyResultToClipBoard(): void {
  this.copyToClipboard(this.result);
}
copyEventToClipBoard(): void {
  this.copyToClipboard(this.events);
}
private copyToClipboard(item: any): void {
  document.addEventListener('copy', (e: ClipboardEvent) => {
    e.clipboardData.setData('text/plain', (item));
    e.preventDefault();
    document.removeEventListener('copy', null);
  });
  document.execCommand('copy');
}
}
