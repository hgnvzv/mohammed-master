import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyRoutingModule } from './lazy-routing.module';
import { LazycomComponent } from './lazycom/lazycom.component';


@NgModule({
  declarations: [
    LazycomComponent,
  ],
  imports: [
    CommonModule,
    LazyRoutingModule,
    
  ],

  
})
export class LazyModule { }
