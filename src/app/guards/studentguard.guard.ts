import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const studentguardGuard: CanActivateFn = (route, state) => {
  let routes = inject(Router)
  let user = JSON.parse(localStorage.getItem('currentuser') || '{}');

  if (!user) {
    routes.navigate(['/login']);
  }

  return false;
};