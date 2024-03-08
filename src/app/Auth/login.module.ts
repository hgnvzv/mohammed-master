import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ]
})
export class LoginModule { }

