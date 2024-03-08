import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './Auth/login.module';

const routes: Routes = [
  { path:  'login',loadChildren:() => import('./Auth/login.module').then(m => m.LoginModule)},
  { path:'',redirectTo:'login',pathMatch:'full'},
  { path:  '',loadChildren:() => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
