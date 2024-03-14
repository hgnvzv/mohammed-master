import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./Auth/login.module').then(m => m.LoginModule) },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  
  {
    path: '',
    component: LayoutComponent,
    canActivateChild: [AdminGuard], 
    children: [
      { path: 'form1section', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
      { path: 'reactivesection', loadChildren: () => import('./reactive-form/reactive-form.module').then(m => m.ReactiveFormModule) },
      { path: 'lazysection', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
