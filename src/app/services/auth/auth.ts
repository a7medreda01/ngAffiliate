import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http   = inject(HttpClient);
  private router = inject(Router);

   private apiUrl = 'https://localhost:44394';
  // private apiUrl = 'http://localhost:5220';

  private currentUser$ = new BehaviorSubject<any>(this.getUser());

  // ─── Login ────────────────────────────────────────────
  login(data: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/Auth/login`, data).pipe(
      tap((res: any) => {
        // الـ token جوه res.data مش في res مباشرة
        this.saveSession(res.data.token, res.data);
      })
    );
  }

  // ─── Register ─────────────────────────────────────────
  // لو role = 'trader'   → register-merchant
  // لو role = 'marketer' → register-affiliate
  // register(data: any): Observable<any> {
    
  //   const endpoint = data.role === 'trader'
  //     ? '/api/Auth/register-merchant'
  //     : '/api/Auth/register-affiliate';

  //     const {role, ...body } = data;

  //   return this.http.post(`${this.apiUrl}${endpoint}`, body).pipe(
  //     tap((res: any) => {
  //     if (res?.data?.token) {
  //   this.saveSession(res.data.token, res.data);
  //       }  
  //     })
  //   );
  // }
register(data: any): Observable<any> {
  const endpoint = data.role === 'trader'
    ? '/api/Auth/register-merchant'
    : '/api/Auth/register-affiliate';

  const { role, ...body } = data;

  return this.http.post(`${this.apiUrl}${endpoint}`, body).pipe(
    tap((res: any) => {
      // ← بس لو في token فعلاً ابعته
      if (res?.data?.token) {
        this.saveSession(res.data.token, res.data);
      }
    })
  );
}
  // ─── Logout ───────────────────────────────────────────
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.currentUser$.next(null);
    this.router.navigate(['/login']);
  }

  // ─── Helpers ──────────────────────────────────────────
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUser(): any {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  getCurrentUser(): Observable<any> {
    return this.currentUser$.asObservable();
  }

  private saveSession(token: string, user: any): void {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUser$.next(user);
  }
}


