import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  NavigationExtras,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment
} from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { CrisisModule } from '../crisis.module';

// Create a dummy session id
const sessionId = 1234567890;
// Set our navigation extras object
// that contains our global query params and fragment
export const navigationExtras: NavigationExtras = {
  queryParams: {session_id: sessionId},
  fragment: 'anchor'
};

@Injectable({
  providedIn: CrisisModule
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    const url = `/crisis/crisis-center/${route.path}`;
    console.log('AuthGuard # canLoad() # url: ' + url);
    return this.checkLogin(url);
    // if (this.authService.isLoggedIn) {
    //   console.log('AuthGuard # canLoad(): od razu true');
    //   return true;
    // }
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    console.log('AuthGuard # canActivate() # url: ' + url);
    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot): boolean {
    console.log('AuthGuard # canActivateChild() # url: ' + state.url);
    return this.canActivate(route, state);
  }

  checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) {
      console.log('AuthGuard # checkLogin(): od razu true');
      return true;
    }
    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url.split('(')[0]; // usunięcie ew. (popup:______)
    console.log('AuthGuard # checkLogin() # this.authService.redirectUrl: ' + this.authService.redirectUrl);
    const urlTree = this.router.createUrlTree(
      ['crisis', 'crisis-center', 'login'],
      {queryParamsHandling: 'preserve', preserveFragment: true});
    this.router.navigateByUrl(urlTree);
    // this.router.navigate(
    //   [url, '/crisis/crisis-center/login'],
    //   navigationExtras
    // );
    return false;
  }
}
