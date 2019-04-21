import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocAppRoutingModule } from './doc-app-routing.module';
import { DocWeb3Component } from './doc-web3/doc-web3.component';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DocWeb3Component],
  imports: [
    CommonModule,
    DocAppRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class DocAppModule { }
