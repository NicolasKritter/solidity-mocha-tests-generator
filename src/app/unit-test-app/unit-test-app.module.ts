import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnitTestRoutingModule } from './unit-test-app-routing.module';
import { UnitTestComponent } from './unit-test/unit-test.component';

@NgModule({
  declarations: [UnitTestComponent],
  imports: [
    CommonModule,
    UnitTestRoutingModule
  ]
})
export class UnitTestAppModule { }
