import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SigninService } from '../services/singin';

export const ActivateGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const signinService = inject(SigninService);

  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('role');
  const requiredRole = route.data?.['role'];

  if (token && userRole === requiredRole) {
    return true;
  } else {
    router.navigateByUrl('/login');
    return false;
  }
};
