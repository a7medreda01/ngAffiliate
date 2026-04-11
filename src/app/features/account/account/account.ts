import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar';
import { AuthService } from '../../../services/auth/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account',
  imports: [RouterLink, RouterOutlet, Sidebar, CommonModule],
  templateUrl: './account.html',
  styleUrl: './account.css',
})
export class Account implements OnInit {
  private router = inject(Router);
  private auth   = inject(AuthService);

  userName = '';

 ngOnInit(): void {
  const user = this.auth.getUser();
  this.userName = user?.fullName || user?.userName || '';

  // ← احذف السطر القديم وضيفده
  const role = this.auth.getRole();
  if (role === 'Affiliate') {
    this.router.navigate(['/affiliate/account/edit']);
  } else if (role === 'Merchant') {
    this.router.navigate(['/merchant/account/edit']);
  }
}
}