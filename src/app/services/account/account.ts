import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AccountService {
  private http   = inject(HttpClient);
  private apiUrl = 'https://localhost:44394';

  // جيب بيانات المستخدم الحالي
 getMe(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/Auth/me`);
  }

  // تعديل بيانات المستخدم
  updateMe(data: {
    fullName?:    string;
    userName?:    string;
    email?:       string;
    phoneNumber?: string;
  }): Observable<any> {
    return this.http.put(`${this.apiUrl}/api/Auth/me`, data);
  }

  // تغيير الباسورد
  changePassword(data: {
    currentPassword:    string;
    newPassword:        string;
    confirmNewPassword: string;
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/Auth/change-password`, data);
  }
}

