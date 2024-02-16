import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component {
  @ViewChild('popupContent') popupContent: any;
  salect: string = '';
  currentAge: number | null = null;
  calculateAge() {
    const today = new Date();
    const birthDate = new Date(this.salect);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    this.currentAge = age;
  }

  userData = {
    UserName: '',
    password: '',
    Email: '',
    textarea: '',
    gender: '',
    rating: ''
  };

  popupForm: FormGroup;
  hidePassword: boolean = true;

  constructor(private fb: FormBuilder, private modalService: NgbModal , private toster: ToastrService)  {
    this.popupForm = this.fb.group({
      UserName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      password: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      Email: ['', [Validators.required, Validators.email]],
      textarea: ['', Validators.required],
      gender: ['', Validators.required],
      rating: ['', Validators.required]
    });
  }

  openPopup() {
    const modalRef = this.modalService.open(this.popupContent);
  }
  
  
  openPopupo(content: any) {
    this.modalService.open(content);
  }

  

  savePopup() {
    if (this.popupForm.valid) {
      this.userData = { ...this.popupForm.value };
      this.modalService.dismissAll();
      this.toster.success('saved');
    }

    
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  close() {
    this.modalService.dismissAll();
  }
}
