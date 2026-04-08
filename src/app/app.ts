import { Component, signal } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainLayout } from './layouts/main-layout/main-layout';
import { Footer } from './layouts/footer/footer';
import { Navbar } from './layouts/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Footer,Navbar, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Mattger');
  constructor(private router: Router) {}

  isAuthRoute(): boolean {
    return this.router.url === '/login' || this.router.url === '/register';
    
  }
}
 
