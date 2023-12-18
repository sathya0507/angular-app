import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthGuard } from '../core/guards/auth.guard';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  authService: AuthGuard = inject(AuthGuard);

  constructor(private _router: Router) {}

  userLogin() {
    this.authService.logIn = true;
    this._router.navigateByUrl('/user');
  }
  userLogout() {
    this.authService.logIn = false;
    this._router.navigateByUrl('/login');
  }
}
