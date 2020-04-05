import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TxDecodeAppRoutingModule } from './tx-decode-app-routing.module';
import { TxDecoderComponent } from './tx-decoder/tx-decoder.component';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [TxDecoderComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    TxDecodeAppRoutingModule
  ]
})
export class TxDecodeAppModule { }
