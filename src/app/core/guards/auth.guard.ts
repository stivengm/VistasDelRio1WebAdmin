import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
    const router = inject(Router);
    const encodedToken = sessionStorage.getItem('token');
    
    if (!encodedToken) {
        router.navigate(['/usuarios/inicio-sesion']);
        return false;
    }
    
    try {
        const token = atob(encodedToken);

        const payload = JSON.parse(atob(token.split('.')[1]));

        const exp = payload.exp * 1000;

        if (Date.now() > exp) {
            sessionStorage.removeItem('token');
            router.navigate(['/usuarios/inicio-sesion']);
            return false;
        }

        return true;
    } catch (error) {
        console.error('Token inválido', error);
        sessionStorage.removeItem('token');
        router.navigate(['/usuarios/inicio-sesion']);
        return false;
    }
};