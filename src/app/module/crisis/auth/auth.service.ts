import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { CrisisModule } from '../crisis.module';
import { LocalStorageService } from './index5';

@Injectable({
  providedIn: CrisisModule
})
export class AuthService {
  isLoggedIn = false;
  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private localStore: LocalStorageService) {
    if (undefined !== this.localStore.getQueryParamsAndFragment()) {
      this.isLoggedIn = true;
    }
  }

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(() => this.isLoggedIn = true)
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
