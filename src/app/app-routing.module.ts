import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'unit-test', loadChildren: './unit-test-app/unit-test-app.module#UnitTestAppModule' },
  { path: 'doc', loadChildren: './doc-app/doc-app.module#DocAppModule' },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
