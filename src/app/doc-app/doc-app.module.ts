import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocAppRoutingModule } from './doc-app-routing.module';
import { DocWeb3Component } from './doc-web3/doc-web3.component';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    DocAppRoutingModule,
    MatTabsModule,
    MatListModule,
    MatToolbarModule,
    MatExpansionModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule
  ],
  declarations: [DocWeb3Component]
})
export class DocAppModule { }
