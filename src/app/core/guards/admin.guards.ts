import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../features/auth/services/auth.service';

export const adminGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.currentUser() && authService.currentUser()?.role === 'admin') {
    return true; // Accès autorisé
  } else {
    // Rediriger vers login avec l'URL de retour
    router.navigate(['/todos']);
    return false; // Accès refusé
  }
};
