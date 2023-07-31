import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NotificationsService } from '../services/notifications.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const messageService = inject(NotificationsService);

  if (authService.isLoggedIn()) {
    return true;
  }

  messageService.addErrorNotification({
    title: "Autenticação",
    message: "Você precisa logar para acessar a página"
  });
  
  return router.parseUrl("/login");
};
