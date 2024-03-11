import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazycomComponent } from './lazycom/lazycom.component';

const routes: Routes = [
  {path:'lazycomponent',component:LazycomComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
