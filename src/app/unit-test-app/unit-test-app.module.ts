import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "app/shared/material/material.module";
import { UnitTestRoutingModule } from "./unit-test-app-routing.module";
import { UnitTestComponent } from "./unit-test/unit-test.component";



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
