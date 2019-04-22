import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, NavigationExtras, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log('AuthGuard#canActivate called');
    const url: string = state.url;
    console.log(url);
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    // Create a dummy session id
    const sessionId = 1234567890;
    // Set our navigation extras object
    // that contains our global query params and fragment
    const navigationExtras: NavigationExtras = {
      queryParams: {session_id: sessionId},
      fragment: 'anchor'
    };
    const dummy = {};

    // this.authService.isLoggedIn = true;
    if (this.authService.isLoggedIn) {
      return true;
    }
    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;
    // Navigate to the login page with extras
    this.router.navigate(
      ['/login'],
      dummy);
    return false;
  }
}
