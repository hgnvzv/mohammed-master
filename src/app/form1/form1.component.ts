import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbCalendar, NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component {
  data = { username:"password", password: 123 , Email: 'mohammed@gmail.com',textarea:'abc',choos:2,rating:50 };
  form: FormGroup = {} as FormGroup;
  model!: NgbDateStruct;
  hidePassword: boolean = true;


  selectedDateOfBirth: string = '';
currentAge: number | null = null;

calculateAge() {
  const today = new Date();
  const birthDate = new Date(this.selectedDateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();

  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  this.currentAge = age;
}

  
  constructor(private fb: FormBuilder, private modalService: NgbModal) {
    this.buildForm(); 
  }

  save(){
    this.buildForm();
  }

  show(){
  
    this.buildForm(this.data);
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
}

  openPopup(content: any) {
    this.modalService.open(content);
  }

  close() {
    this.modalService.dismissAll();
  }

  buildForm(formData?: any) {
    this.form = this.fb.group({
      UserName: [formData ? formData.username : '',[Validators.required, Validators.pattern('^[a-zA-Z_]+$')]],
      password: [formData ? formData.password :'', Validators.required,Validators.minLength(3),Validators.maxLength(10)],
      Email: [formData ? formData.Email :'', [Validators.required, Validators.email]],
      textarea: [formData ? formData.textarea :'', Validators.required],
      choos: [formData ? formData.choos : '', Validators.required],
      rating: [formData ? formData.rating:5, Validators.required],
    });
  }

  getFormControlValue(controlName:any) { 
    return this.form.get(controlName); 
  }

  getRatingMessage(): string {
    const ratingControl = this.form.get('rating');

    if (!ratingControl?.touched) {
      return '';
    }
    const rating = ratingControl.value;
    if (rating >= 5) {
      return 'Thank you';
    } else {
      return 'We will work to develop that';
    }
  }
}
