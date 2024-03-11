import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:  'loginsecation',loadChildren:() => import('./Auth/login.module').then(m => m.LoginModule)},
  { path:'',redirectTo:'loginsecation',pathMatch:'full'},
  { path:  '',loadChildren:() => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
