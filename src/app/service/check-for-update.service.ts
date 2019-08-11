import { ApplicationRef, Injectable, OnDestroy } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { first } from 'rxjs/operators';
import { concat, interval, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckForUpdateService implements OnDestroy {
  private subscription: Subscription;

  constructor(
    appRef: ApplicationRef,
    updates: SwUpdate
  ) {
    console.log('\t\t\tCheckForUpdateService instantiated!!!');
    // Allow the app to stabilize first, before starting polling for updates with `interval()`.
    const appIsStable$ = appRef.isStable.pipe(first(isStable => isStable === true));
    const everySixHours$ = interval(15 * 1000);
    const everySixHoursOnceAppIsStable$ = concat(appIsStable$, everySixHours$);

    this.subscription = everySixHoursOnceAppIsStable$.subscribe(() => updates.checkForUpdate());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
