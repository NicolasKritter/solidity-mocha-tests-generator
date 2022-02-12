import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UnitTestRoutingModule } from './unit-test-app-routing.module';
import { UnitTestComponent } from './unit-test/unit-test.component';



@NgModule({
  declarations: [UnitTestComponent],
  imports: [
    CommonModule,
    UnitTestRoutingModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule
  ]
})
export class UnitTestAppModule { }
