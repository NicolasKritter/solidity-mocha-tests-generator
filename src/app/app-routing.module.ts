import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'unit-test', loadChildren: () => import('./unit-test-app/unit-test-app.module').then(m => m.UnitTestAppModule) },
  { path: 'doc', loadChildren: () => import('./doc-app/doc-app.module').then(m => m.DocAppModule) },
  { path: 'tx-decoder', loadChildren: () => import('./tx-decode-app/tx-decode-app.module').then(m => m.TxDecodeAppModule) }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
