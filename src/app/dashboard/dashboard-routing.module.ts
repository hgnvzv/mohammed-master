import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {path:'',
  component:LayoutComponent,
   children:[
  { path: 'form1', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
  { path: 'reactivesecation', loadChildren: () => import('./reactive-form/reactive-form.module').then(m => m.ReactiveFormModule) },
  { path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) },
    
   ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
