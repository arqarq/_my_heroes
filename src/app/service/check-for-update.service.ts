import { ApplicationRef, Injectable, OnDestroy } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { first } from 'rxjs/operators';
import { concat, interval, Subscription } from 'rxjs';
import { environment } from '../../environments/environment';
import { ForServicesModule } from './for-services.module';

@Injectable({providedIn: ForServicesModule})
export class CheckForUpdateService implements OnDestroy {
  static subscription = new Subscription();

  constructor(
    appRef: ApplicationRef,
    updates: SwUpdate
  ) {
    console.log('\t\t\tCheckForUpdateService instantiated!!!');

    // Allow the app to stabilize first, before starting polling for updates with `interval()`.
    const appIsStable$ = appRef.isStable.pipe(first((isStable) => isStable));
    const everySixHours$ = interval(15 * 1000);
    const everySixHoursOnceAppIsStable$ = concat(appIsStable$, everySixHours$);

    if (environment.production) {
      CheckForUpdateService.subscription.add(everySixHoursOnceAppIsStable$.subscribe(() => updates.checkForUpdate()));
    }
  }

  ngOnDestroy() {
    CheckForUpdateService.subscription.unsubscribe();
  }
}
