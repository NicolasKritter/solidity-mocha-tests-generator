import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TxDecodeAppRoutingModule } from './tx-decode-app-routing.module';
import { TxDecoderComponent } from './tx-decoder/tx-decoder.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'app/shared/material/material.module';


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
