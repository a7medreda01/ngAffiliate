import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth/auth';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
  encapsulation: ViewEncapsulation.None,
})
export class Login {
 loginForm: FormGroup;
  isLoading  = false;
  errorMessage = '';
 
  constructor(
    private fb:          FormBuilder,
    private authService: AuthService,
    private router:      Router
  ) {
    this.loginForm = this.fb.group({
      email:    ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
 
  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
 
    this.isLoading    = true;
    this.errorMessage = '';
 
this.authService.login(this.loginForm.value).subscribe({
  next: () => {
    this.isLoading = false;
    this.router.navigate(['/home']); // ← هنا
  },
  error: (err) => {
    this.errorMessage = err.error?.message || 'Email or password is incorrect';
    this.isLoading = false;
  }
});
  }
 
  get email()    { return this.loginForm.get('email');    }
  get password() { return this.loginForm.get('password'); }
}
