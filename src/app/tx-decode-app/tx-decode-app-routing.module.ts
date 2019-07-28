import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TxDecoderComponent } from './tx-decoder/tx-decoder.component';

const routes: Routes = [{ path: '', component: TxDecoderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TxDecodeAppRoutingModule { }
