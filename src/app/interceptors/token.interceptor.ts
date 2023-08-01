import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { NotificationsService } from '../services/notifications.service';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private notificationService: NotificationsService,
    private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const bearer = this.authService.getToken();

    if (bearer) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${bearer}`}
      })
    }    
    
    return next.handle(request).pipe(
      catchError((error: any) => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 403 || error.status === 401) {
            // TODO: If i had refresh token, should be used right here
            this.authService.clearToken();
            this.notificationService.addWarningNotification({ title: "Token Expirado", message: "Seu token expirou, realize o login novamente." });
            this.router.navigateByUrl("/login");
          }
        }
        
        return throwError(() => new Error(error.message));
      })
    );
  }
}
