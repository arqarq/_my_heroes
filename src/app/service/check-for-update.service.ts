import { ApplicationRef, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { finalize, first } from 'rxjs/operators';
import { concat, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckForUpdateService {
  constructor(
    appRef: ApplicationRef,
    updates: SwUpdate
  ) {
    console.log('CheckForUpdateService instantiated!!!');
    // Allow the app to stabilize first, before starting polling for updates with `interval()`.
    const appIsStable$ = appRef.isStable.pipe(first(isStable => isStable === true));
    const everySixHours$ = interval(15 * 1000);
    const everySixHoursOnceAppIsStable$ = concat(appIsStable$, everySixHours$);

    const subscription = everySixHoursOnceAppIsStable$
      .pipe(finalize(() => subscription.unsubscribe()))
      .subscribe(() => updates.checkForUpdate());
  }
}
