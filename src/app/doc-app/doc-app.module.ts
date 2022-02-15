import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AbiImporterModule } from 'app/components/abi-importer/abi-importer.module';
import { DocAppRoutingModule } from 'app/doc-app/doc-app-routing.module';
import { DocWeb3Component } from 'app/doc-app/doc-web3/doc-web3.component';



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
    FormsModule,
    AbiImporterModule,
    ReactiveFormsModule
  ],
  declarations: [DocWeb3Component]
})
export class DocAppModule { }
