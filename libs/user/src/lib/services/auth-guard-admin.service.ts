import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root',
})
class PermissionsService {
  constructor(
    private router: Router,
    private localStorageToken: LocalstorageService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    //logic
    const token = this.localStorageToken.getTokenAndRole();

    if (token.role === 'admin') {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}

export const AuthGuardAdmin: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean => {
  return inject(PermissionsService).canActivate(next, state);
};
