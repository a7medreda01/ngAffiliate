import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AccountService } from '../../../services/account/account';

@Component({
  selector: 'app-edit-profile',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit-profile.html',
  styleUrl: './edit-profile.css',
})
export class EditProfile {
 private fb      = inject(FormBuilder);
  private account = inject(AccountService);

  profileForm!:  FormGroup;
  passwordForm!: FormGroup;
  isLoading  = false;
  isSaving   = false;
  successMsg = '';
  errorMsg   = '';
  isSavingProfile = false;
  isSavingPassword = false;

  profileSuccess = '';
  profileError   = '';
  passwordSuccess = '';
  passwordError   = '';

  ngOnInit(): void {
    // ─── Profile Form ─────────────────────────────
    this.profileForm = this.fb.group({
      firstName:   ['', Validators.required],
      lastName:    ['', Validators.required],
      userName:    [''],
      email:       ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.pattern('^(\\+20|0)?1[0125][0-9]{8}$')]
    });

    // ─── Password Form ────────────────────────────
    this.passwordForm = this.fb.group({
      currentPassword:    ['', Validators.required],
      newPassword:        ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).+$')
      ]],
      confirmNewPassword: ['', Validators.required]
    }, { validators: this.passwordMatch });

    this.loadProfile();
  }

  passwordMatch = (group: FormGroup) => {
    const p = group.get('newPassword')?.value;
    const c = group.get('confirmNewPassword')?.value;
    return p === c ? null : { mismatch: true };
  }

  loadProfile(): void {
    this.isLoading = true;
    this.account.getMe().subscribe({
      next: (res) => {
        const data      = res.data;
        const nameParts = (data.fullName || '').split(' ');
        this.profileForm.patchValue({
          firstName:   nameParts[0] || '',
          lastName:    nameParts.slice(1).join(' ') || '',
          userName:    data.userName || '',
          email:       data.email || '',
          phoneNumber: data.phoneNumber || ''
        });
        this.isLoading = false;
      },
      error: () => { this.isLoading = false; }
    });
  }

  saveProfile(): void {
    if (this.profileForm.invalid) return;

    this.isSavingProfile = true;
    this.profileSuccess  = '';
    this.profileError    = '';

    const val = this.profileForm.value;

    this.account.updateMe({
      fullName:    `${val.firstName} ${val.lastName}`,
      userName:    val.userName,
      email:       val.email,
      phoneNumber: val.phoneNumber
    }).subscribe({
      next: () => {
        this.profileSuccess  = 'Profile updated successfully!';
        this.isSavingProfile = false;
      },
      error: (err) => {
        this.profileError    = err.error?.message || 'Update failed';
        this.isSavingProfile = false;
      }
    });
  }

     savePassword(): void {
    if (this.passwordForm.invalid) return;

    this.isSavingPassword = true;
    this.passwordSuccess  = '';
    this.passwordError    = '';

    this.account.changePassword(this.passwordForm.value).subscribe({
      next: () => {
        this.passwordSuccess  = 'Password changed successfully!';
        this.passwordForm.reset();
        this.isSavingPassword = false;
      },
      error: (err) => {
        this.passwordError    = err.error?.message || 'Password change failed';
        this.isSavingPassword = false;
      }
    });
  }
}
