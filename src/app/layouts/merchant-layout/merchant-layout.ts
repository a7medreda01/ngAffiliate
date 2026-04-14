import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth/auth';

@Component({
  selector: 'app-merchant-layout',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './merchant-layout.html',
  styleUrl: './merchant-layout.css',
})
export class MerchantLayout implements OnInit {
  merchantName = '';

  constructor(
    private authService: AuthService,
    private router:      Router
  ) {}

  ngOnInit(): void {
    const user = this.authService.getUser();
    this.merchantName = user?.fullName || user?.userName || 'Merchant';
  }

  logout(): void {
    this.authService.logout();
  }
}