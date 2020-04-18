import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemePickerComponent } from './theme-picker/theme-picker.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { MatMenuModule } from '@angular/material/menu';



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
