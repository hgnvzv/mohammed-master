import { Component, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {
  data = { username: "mohammed", password: 123, Email: 'mohammed@gmail.com', textarea: 'abc', choos: 2, rating: 50 }
  form: FormGroup = new FormGroup({});
  hidePassword: boolean = true;
  @ViewChild('largePopup') largePopup: any;
  @ViewChild('smallPopup') smallPopup: any;
  LargeModule: any;
  SmallModule:any;
  constructor(private modalService: NgbModal) {
    this.buildForm(this.data);
  }

  openLargePopup() {
    this.LargeModule= this.modalService.open(this.largePopup, { size: 'lg' });
  }

  closeLargePopup() {
    this.LargeModule.close();
  }

  openSmallPopup() {
   this.SmallModule= this.modalService.open(this.smallPopup);
  }

  closeSmallPopup() {
    this.SmallModule.close();
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
}
closeall(){
  this.modalService.dismissAll();
}

  getdata(){
    this.buildForm(this.data);
  }
  resrtdata(){
    this.buildForm()
  }

  buildForm(formData?: any) {
    this.form = new FormGroup({
      UserName: new FormControl(formData ? formData.username : '', Validators.required),
      password: new FormControl(formData ? formData.password : '', Validators.required),
      Email: new FormControl(formData ? formData.Email : '', [Validators.required, Validators.email]),
      textarea: new FormControl(formData ? formData.textarea : '', Validators.required),
      choos: new FormControl(formData ? formData.choos : '', Validators.required),
      rating: new FormControl(formData ? formData.rating : 5, [Validators.required, Validators.min(5)])
    });
  }

  getValue(value: any) {
    return this.form.get(value);
  }
}
