import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Form1Component } from './form/form1/form1.component';
import { ReactiveFormsModule,FormControl,FormGroup, FormsModule } from '@angular/forms';
import { ReactiveComponent } from './reactive-form/reactive/reactive.component';
import { HeaderComponent } from './header/header.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr'
import { LazyModule } from './lazy/lazy.module';
import { FormModule } from './form/form.module';


@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    ReactiveComponent,
    HeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    NgbModule,
    ToastrModule.forRoot(),
    LazyModule,
    FormModule
    

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
