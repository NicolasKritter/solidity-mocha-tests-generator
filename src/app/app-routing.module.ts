import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'unit-test', loadChildren: () => import('./unit-test-app/unit-test-app.module').then(m => m.UnitTestAppModule) },
  { path: 'doc', loadChildren: () => import('./doc-app/doc-app.module').then(m => m.DocAppModule) },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
