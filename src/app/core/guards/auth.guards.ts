// src/app/core/guards/auth.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../features/auth/services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.currentUser()) {
    return true; // Accès autorisé
  } else {
    // Rediriger vers login avec l'URL de retour
    router.navigate(['/auth/login'], {
      queryParams: { returnUrl: state.url },
    });
    return false; // Accès refusé
  }
};
