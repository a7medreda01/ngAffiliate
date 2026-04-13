import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth/auth';
import { CartService } from '../../services/cart/cart';
import { WishlistService } from '../../services/wishlist/wishlist.service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {

  topText: string = "Summer Sale For All Swim And Free Express Delivery - OFF 50%!";
  showSearch = false;

  isAffiliate = false;
  isMerchant  = false;

  // الـ links بتتغير حسب الـ role
  homeLink    = '/affiliate/home';
  wishlistLink = '/affiliate/wishlist';
  cartLink    = '/affiliate/cart';
  accountLink = '/affiliate/account';
  ordersLink  = '/affiliate/account/my-orders';
  paymentLink = '/affiliate/account/payment';

    get wishLength() { return this.wishlistService.wishlistCount(); }
  get cartLength()  { return this.cartService.summary().itemCount; }

  constructor(
    private authService: AuthService,
    private wishlistService: WishlistService,
    private cartService:     CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const role = this.authService.getRole();
    this.isAffiliate = role === 'Affiliate';
    this.isMerchant  = role === 'Merchant';

    if (this.isMerchant) {
      this.homeLink    = '/merchant/home';
      this.accountLink = '/merchant/account';
    }
       if (this.isAffiliate) {
      this.wishlistService.getWishlist().subscribe({
        next: (res) => this.wishlistService.updateSignals(res)
      });
    }
  }

  toggleSearch() {
    this.showSearch = !this.showSearch;
  }

  logout() {
    this.authService.logout();
  }
}