import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MaterialModule } from 'app/shared/material/material.module';
import { ThemePickerComponent } from './theme-picker/theme-picker.component';



@NgModule({
  declarations: [ThemePickerComponent],
  imports: [
    CommonModule,
    MaterialModule,
    MatMenuModule
  ],
  exports: [ThemePickerComponent]
})
export class ThemePickerModule { }
