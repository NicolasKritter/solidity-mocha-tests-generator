import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AbiImporterModule } from 'app/components/abi-importer/abi-importer.module';
import { TxDecodeAppRoutingModule } from './tx-decode-app-routing.module';
import { TxDecoderComponent } from './tx-decoder/tx-decoder.component';



@NgModule({
  declarations: [TxDecoderComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    AbiImporterModule,
    TxDecodeAppRoutingModule
  ]
})
export class TxDecodeAppModule { }
