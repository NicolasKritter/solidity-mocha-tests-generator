import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-abi-importer',
  templateUrl: './abi-importer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AbiImporterComponent implements OnInit {
  public static abiString: string;

  @ViewChild('fileInput', { static: true }) fileInput: ElementRef;
  @Output() onContractLoaded = new EventEmitter<any>();

  public abiInput: string;
  public urlContractJson: string;
  public file: File;
  public fileName: string;
  constructor() { }

  ngOnInit() {
    this.abiInput = AbiImporterComponent.abiString || localStorage.getItem('abi');
  }

  public selectFile(): void {
    this.fileInput.nativeElement.click();
  }

  public start(): void {
    if (this.abiInput) {
      AbiImporterComponent.abiString = this.abiInput;
      localStorage.setItem('abi', this.abiInput);
      this.onContractLoaded.emit(this.abiInput);
    }
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

}
