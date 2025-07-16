import { Routes } from '@angular/router';
import { Login } from './components/pages/login/login';
import { Register } from './components/pages/register/register';
import { DashboardAdmin } from './components/pages/dashboard-admin/dashboard-admin';
import { DashboardEmployee } from './components/pages/dashboard-employee/dashboard-employee';
import { ActivateGuard } from './guards/activate-guard';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { 
    path: 'admin-dashboard',
    component: DashboardAdmin,
    canActivate: [ActivateGuard]
  },
  { 
    path: 'employee-dashboard',
    component: DashboardEmployee,
    canActivate: [ActivateGuard]
  },
  { path: '**', redirectTo: '' }
];

