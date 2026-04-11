import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth/auth';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar implements OnInit {

  isAffiliate = false;
  isMerchant  = false;

  accountEditLink = '/affiliate/account/edit';
  paymentLink     = '/affiliate/account/payment';
  ordersLink      = '/affiliate/account/my-orders';

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    const role = this.auth.getRole();
    this.isAffiliate = role === 'Affiliate';
    this.isMerchant  = role === 'Merchant';

    if (this.isMerchant) {
      this.accountEditLink = '/merchant/account/edit';
    }
  }
}