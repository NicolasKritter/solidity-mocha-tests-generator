import { MaterialModule } from './../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnitTestRoutingModule } from './unit-test-app-routing.module';
import { UnitTestComponent } from './unit-test/unit-test.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [UnitTestComponent],
  imports: [
    CommonModule,
    UnitTestRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class UnitTestAppModule { }
