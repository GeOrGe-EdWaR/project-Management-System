import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/modules/feature/authentication/services/auth.service';

export const employeeGuard: CanActivateFn = (route, state) => {
  const _AuthService = inject(AuthService);
  const _router = inject(Router);
  const toastr = inject(ToastrService);

  console.log('_AuthService.role', _AuthService.role);

  if (
    localStorage.getItem('userToken') !== null &&
    _AuthService.role == 'Employee'
  ) {
    return true;
  } else {
    toastr.error('You are not authorized to view this page', 'Access Denied');
    _router.navigate(['dashboard/home']);
    return false;
  }
};
