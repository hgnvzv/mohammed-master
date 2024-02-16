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
  @ViewChild('largePopup') L: any;
  @ViewChild('smallPopup') S: any;
  LM: any;
  SM:any;
  constructor(private modalService: NgbModal) {
    this.buildForm(this.data);
  }

  openLargePopup() {
    this.LM= this.modalService.open(this.L, { size: 'lg' });
  }

  closeLargePopup() {
    this.LM.close();
  }

  openSmallPopup() {
   this.SM= this.modalService.open(this.S);
  }

  closeSmallPopup() {
    this.SM.close();
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
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
