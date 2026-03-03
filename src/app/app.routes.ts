import { Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

export const routes: Routes = [
    // {
    //     path: 'users/login',
    //     component: LoginComponent
    // },
    // {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // },



    // Layout para autenticación
    {
        path: 'usuarios',
        component: AuthLayoutComponent,
        children: [
        {
            path: 'inicio-sesion',
            loadComponent: () =>
            import('./pages/auth/login/login.component').then(c => c.LoginComponent)
        }
        ]
    }
];
