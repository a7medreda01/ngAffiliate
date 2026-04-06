import { inject } from '@angular/core';
import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth/auth';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth  = inject(AuthService);
  const token = auth.getToken();

  // لو في token — ضيفه في كل request تلقائياً
  const authReq = token
    ? req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      })
    : req;

  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {

      // لو الـ token انتهى أو مش صالح
      if (error.status === 401) {
        auth.logout();
      }

      return throwError(() => error);
    })
  );
};