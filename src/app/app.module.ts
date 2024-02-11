import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Form1Component } from './form1/form1.component';
import { ReactiveFormsModule,FormControl,FormGroup, FormsModule } from '@angular/forms';
import { ReactiveComponent } from './reactive/reactive.component';
import { HeaderComponent } from './header/header.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


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
    NgbModule

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
