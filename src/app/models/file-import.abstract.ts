import { OnInit, ViewChild, ElementRef, Directive } from '@angular/core';


@Directive()
export abstract class FileImportAbstractComponent implements OnInit {

  @ViewChild('fileInput', { static: true }) fileInput: ElementRef;

  public abiInput: string;
  public urlContractJson: string;
  public file: File;
  public fileName: string;
  constructor() { }

  ngOnInit() {
  }

  public selectFile(): void {
    this.fileInput.nativeElement.click();
  }

  public onFileChanged(e: any): void {
    this.file = e.target.files[0];
    this.fileName = this.file.name;
    if (this.fileName.endsWith('.json')) {
      this.parseFileToContractJson();
    }

  }

  public parseFileToContractJson() {
    // const parsed = JSON.parse(this.file);
    if (!this.file) { return; }
    const fileReader = new FileReader();
    fileReader.onload = () => {
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
