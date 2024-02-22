import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Form1Component } from './form/form1/form1.component';

const routes: Routes = [
  { path: '', component: Form1Component },
  { path: 'form1', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
  { path: 'reactive', loadChildren: () => import('./reactive-form/reactive-form.module').then(m => m.ReactiveFormModule) },
  { path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
