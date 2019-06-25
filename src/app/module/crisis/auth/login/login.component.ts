import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import { LocalStorageService } from '../../../../service/local-storage.service';

const toStoreTempl: {[key: string]: string} = {
  session_id: undefined,
  fragment: undefined
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  message: string;
  temp: {[key: string]: string};
  private sessionIdd: string;
  private tokenn: string;
  private subscription: Subscription;

  constructor(
    public authService: AuthService,
    private router: Router,
    private storage: LocalStorageService,
    private route: ActivatedRoute
  ) {
    this.setMessage();
    this.temp = this.storage.getQueryParamsAndFragment();
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in...';
    this.subscription = this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        const redirect = this.authService.redirectUrl
          ? this.router.parseUrl(this.authService.redirectUrl).toString().split('?')[0]
          // ? '/crisis/crisis-center/admin'
          : '/crisis';
        console.log('LoginComponent # login() # redirect: ' + redirect);
        // Redirect the user
        // this.router.navigateByUrl(redirect, navigationExtras); // TODO navigateByUrl olewa queryParams i fragment!
        this.router.navigate(
          [...redirect.split('/')],
          {queryParamsHandling: 'preserve', preserveFragment: true});
      }
    });
    this.temp = this.extractObj();
    this.store(this.temp);
  }

  extractObj(): {} {
    this.sessionIdd = this.route.snapshot.queryParams.session_id || null;
    this.tokenn = this.route.snapshot.fragment || null;
    const toStore = toStoreTempl;
    toStore.session_id = this.sessionIdd;
    toStore.fragment = this.tokenn;
    return toStore;
  }

  store(temp: any) {
    this.storage.storeQueryParamsAndFragment(temp);
    console.log('LoginComponent # store(temp): ' + JSON.stringify(temp));
  }

  logout() {
    this.authService.logout();
    this.storage.clearLocalStorage();
    this.setMessage();
    this.router.navigate(
      ['crisis'],
      {
        queryParamsHandling: 'preserve',
        preserveFragment: true
      })
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
