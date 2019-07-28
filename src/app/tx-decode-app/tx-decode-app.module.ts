import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TxDecodeAppRoutingModule } from './tx-decode-app-routing.module';
import { TxDecoderComponent } from './tx-decoder/tx-decoder.component';


@NgModule({
  declarations: [TxDecoderComponent],
  imports: [
    CommonModule,
    MaterialModule,
    TxDecodeAppRoutingModule
  ]
})
export class TxDecodeAppModule { }
