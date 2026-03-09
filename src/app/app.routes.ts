import { Routes } from '@angular/router';

// Layouts
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./pages/dashboard/dashboard.component').then(c => c.DashboardComponent)
            },
            {
                path: 'residentes',
                loadComponent: () => import('./pages/residents/residents.component').then(c => c.ResidentsComponent)
            },
            {
                path: 'facturacion',
                loadComponent: () => import('./pages/billing/billing.component').then(c => c.BillingComponent)
            }
        ]
    },
    {
        path: 'usuarios',
        component: AuthLayoutComponent,
        children: [
            {
                path: 'inicio-sesion',
                loadComponent: () => import('./pages/auth/login/login.component').then(c => c.LoginComponent)
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'usuarios/inicio-sesion'
    }
];
