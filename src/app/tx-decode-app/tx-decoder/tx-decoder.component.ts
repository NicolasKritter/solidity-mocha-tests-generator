import { Component, OnInit } from '@angular/core';
import { FileImportAbstractComponent } from 'app/models/file-import.abstract';
import { TransactionDecoderService } from 'app/services/transaction-decoder.service';
import { Transaction } from 'web3-core';


@Component({
  selector: 'app-tx-decoder',
  templateUrl: './tx-decoder.component.html',
  styleUrls: ['./tx-decoder.component.css']
})
export class TxDecoderComponent extends FileImportAbstractComponent implements OnInit {
  public txData: Transaction;
  // @typescript-eslint/no-explicit-any
  public result: { functionCalled: any; parameters: any };
  public events: string;
  constructor(private txDecoder: TransactionDecoderService) {
    super();
  }

  override ngOnInit() {
  }

  public loadAbi(abiInput: string): void {
    this.abiInput = abiInput;
    this.txDecoder.loadAbi(this.abiInput);
  }

  public decodeData(): void {
    this.result = this.txDecoder.parseTxInputs(this.txData);
  }

  // TODO! use form builder and get rid of ngModel

  copyResultToClipBoard(): void {
    this.copyToClipboard(this.result);
  }
  copyEventToClipBoard(): void {
    this.copyToClipboard(this.events);
  }
}
