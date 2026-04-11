import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth/auth';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
  encapsulation: ViewEncapsulation.None,
})
export class Register {
  registerForm: FormGroup;
  isLoading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
  this.registerForm = this.fb.group({
  firstName: ['', [
    Validators.required,
    Validators.minLength(4)
  ]],
  lastName: ['', [
    Validators.required,
    Validators.minLength(4)
  ]],
  email: ['', [
    Validators.required,
    Validators.email,
    Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')
  ]],
  password: ['', [
    Validators.required,
    Validators.minLength(8),
    Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\\-=\\[\\]{};\':"\\\\|,.<>\\/?]).+$')
  ]],
  confirmPassword: ['', Validators.required],
  phoneNumber: ['', [
    Validators.required,
    Validators.pattern('^(\\+20|0)?1[0125][0-9]{8}$')
  ]],
  role: ['trader', Validators.required]
}, { validators: this.passwordMatchValidator });
  }

  // Custom validator: password === confirmPassword
 passwordMatchValidator = (group: FormGroup) => {
  const pass    = group.get('password')?.value;
  const confirm = group.get('confirmPassword')?.value;
  return pass === confirm ? null : { passwordMismatch: true };
}

  selectRole(role: 'trader' | 'marketer'): void {
    this.registerForm.patchValue({ role });
  }

onSubmit(): void {
  if (this.registerForm.invalid) return;
   console.log('Form valid:', this.registerForm.valid);
  console.log('Form errors:', this.registerForm.errors);
  console.log('Form value:', this.registerForm.value);
  
  if (this.registerForm.invalid) {
    console.log('firstName:', this.registerForm.get('firstName')?.errors);
    console.log('lastName:', this.registerForm.get('lastName')?.errors);
    console.log('email:', this.registerForm.get('email')?.errors);
    console.log('password:', this.registerForm.get('password')?.errors);
    console.log('confirmPassword:', this.registerForm.get('confirmPassword')?.errors);
    return;
  }

  this.isLoading = true;
  this.errorMessage = '';

  const formValue = this.registerForm.value;

  // حول البيانات للشكل اللي الـ API بيتوقعه
  const data = {
    fullName:        `${formValue.firstName} ${formValue.lastName}`,
    email:           formValue.email,
    password:        formValue.password,
    confirmPassword: formValue.confirmPassword,
    phoneNumber:     formValue.phoneNumber || '',
    role:            formValue.role  // محتاجه في الـ service عشان يختار الـ endpoint
  };

  this.authService.register(data).subscribe({
next: () => {
  this.isLoading = false;
  this.router.navigate(['/login']);
},
  error: (err) => {
      if (err.status === 400) {
    // لو في errors array
    if (err.error?.errors && err.error.errors.length > 0) {
      this.errorMessage = err.error.errors[0];
    }
    // لو في message مباشرة
    else if (err.error?.message) {
      this.errorMessage = err.error.message;
    }
    // لو في data.message
    else if (err.error?.data?.message) {
      this.errorMessage = err.error.data.message;
    }
    else {
      this.errorMessage = 'Registration failed. Please try again.';
    }
  } else {
    this.errorMessage = 'Something went wrong. Please try again.';
  }
  this.isLoading = false;
   
  }
});

  }

  get selectedRole() { return this.registerForm.get('role')?.value; }
}


