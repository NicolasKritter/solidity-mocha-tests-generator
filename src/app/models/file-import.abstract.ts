import { OnInit, ViewChild, ElementRef } from '@angular/core';


export abstract class FileImportAbstractComponent implements OnInit {

  @ViewChild('fileInput', { static: true }) fileInput: ElementRef;

  abiInput: string;
  urlContractJson: string;
  file: File;
  fileName: string;
  constructor() { }

  ngOnInit() {
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

  protected copyToClipboard(item: any): void {
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', (item));
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
  }
}
