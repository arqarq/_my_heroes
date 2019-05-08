import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import { LocalStorageService } from '../../../../service/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  message: string;
  temp: {[key: string]: string};
  sessionIdd: string;
  tokenn: string;
  private subscription: Subscription;

  constructor(
    public authService: AuthService,
    public router: Router,
    private storage: LocalStorageService,
    private route: ActivatedRoute
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
          console.log('AAAAAAAAAAAAAAA ' + redirect.toString());
          // this.router.navigateByUrl(redirect, navigationExtras); // TODO navigateByUrl olewa queryParams i fragment!
          this.router.navigate([redirect.toString()], navigationExtras);
        }
      });
    this.temp = this.extractObj();
    this.store(this.temp);
  }

  extractObj(): {} {
    this.sessionIdd = this.route.snapshot.queryParams.session_id;
    this.tokenn = this.route.snapshot.fragment;
    const toStore = {
      session_id: undefined,
      fragment: undefined
    };
    toStore.session_id = this.sessionIdd;
    toStore.fragment = this.tokenn;
    return toStore;
  }

  store(temp: any) {
    this.storage.storeQueryParamsAndFragment(temp);
    console.log('+++++++++++++++++' + JSON.stringify(temp));
  }

  logout() {
    this.authService.logout();
    this.storage.clearLocalStorage();
    this.setMessage();
    this.router.navigate(['/crisis'])
      .then(
        () => this.authService.redirectUrl = undefined
      );
  }

  setTemp() {
    this.temp = this.storage.getQueryParamsAndFragment();
  }

  ngOnInit(): void {
    this.setTemp();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
