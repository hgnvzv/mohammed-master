import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Form1Component } from './form1/form1.component';
import { ReactiveComponent } from './reactive/reactive.component';

const routes: Routes = [
  { path: '', component: Form1Component },
  { path: 'form1', component: Form1Component },
  { path: 'reactive', component: ReactiveComponent },
  { path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
