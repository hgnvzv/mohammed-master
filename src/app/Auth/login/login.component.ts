import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;
  invalidLogin = false;
  users = [{ 'email': 'mohammed@gmail.com', 'password': '12345678' }];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    const email = this.loginForm.value['email'];
    const password = this.loginForm.value['password'];

    const user = this.users.find(u => u['email'] === email && u['password'] === password);
    if (user) {
      this.invalidLogin = false;
      this.toastr.success('Login successful');
      this.router.navigateByUrl('/form1');
    } else {
      this.invalidLogin = true;
      this.toastr.error('Invalid email or password');
    }
  }
}
