import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const noAuthGuard: CanActivateFn = () => {
  const router = inject(Router);
  const encodedToken = sessionStorage.getItem('token');

  if (!encodedToken) return true;

  try {
    const token = atob(encodedToken);
    const payload = JSON.parse(atob(token.split('.')[1]));
    const exp = payload.exp * 1000;

    if (Date.now() > exp) {
      sessionStorage.removeItem('token');
      return true;
    }

    router.navigate(['/dashboard']);
    return false;
  } catch {

    sessionStorage.removeItem('token');
    return true;

  }
};