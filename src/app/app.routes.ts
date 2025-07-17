import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { Login } from './components/pages/login/login';
import { Register } from './components/pages/register/register';
import { Pagenotfound } from './components/pages/pagenotfound/pagenotfound';
import { AdminFlights } from './components/pages/admin-flights/admin-flights';
import { Payroll } from './components/pages/payroll/payroll';
import { EmployeeFlights } from './components/pages/employee-flights/employee-flights';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'sign-in', component: Login },
  { path: 'sign-up', component: Register },
  { path: 'admin-flights', component: AdminFlights },
  { path: 'employee-flights', component: EmployeeFlights },
  { path: 'payroll', component: Payroll },
  { path: '**', component: Pagenotfound }
];