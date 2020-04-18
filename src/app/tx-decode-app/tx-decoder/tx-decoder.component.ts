import { Component, OnInit } from '@angular/core';
import { FileImportAbstractComponent } from 'src/app/models/file-import.abstract';
import { TransactionDecoderService } from 'src/app/services/transaction-decoder.service';

@Component({
  selector: 'app-tx-decoder',
  templateUrl: './tx-decoder.component.html',
  styleUrls: ['./tx-decoder.component.css']
})
export class TxDecoderComponent extends FileImportAbstractComponent implements OnInit {
  public txData: string;
  public result: string;
  public events: string
  constructor(private txDecoder: TransactionDecoderService) {
    super();
  }

  ngOnInit() {
  }

  public loadAbi() {
    this.txDecoder.loadAbi(this.abiInput);
  }

  public decodeData() {
    this.result = this.txDecoder.parseTxInputs(this.txData);
  }

  copyResultToClipBoard(): void {
    this.copyToClipboard(this.result);
  }
  copyEventToClipBoard(): void {
    this.copyToClipboard(this.events);
  }
}
