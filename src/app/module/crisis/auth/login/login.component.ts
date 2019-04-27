import { Component, OnDestroy } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
  message: string;
  private subscription: Subscription;

  constructor(
    public authService: AuthService,
    public router: Router
  ) {
    this.setMessage();
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in...';
    this.subscription = this.authService.login()
      .subscribe(() => {
        this.setMessage();
        if (this.authService.isLoggedIn) {
          // console.log(this.authService.redirectUrl);
          const navigationExtras: NavigationExtras = {
            queryParamsHandling: 'preserve',
            preserveFragment: true
          };
          // Get the redirect URL from our auth service
          // If no redirect has been set, use the default
          const redirect = this.authService.redirectUrl
            ? this.router.parseUrl(this.authService.redirectUrl)
            : '/crisis';
          // Redirect the user
          console.log(redirect.toString());
          // this.router.navigateByUrl(redirect, navigationExtras); // TODO navigateByUrl olewa queryParams i fragment!
          this.router.navigate([redirect.toString()], navigationExtras);
        }
      });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
    this.router.navigateByUrl('/crisis')
      .then(
        () => this.authService.redirectUrl = undefined
      );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
