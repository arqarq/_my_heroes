import { SwUpdate } from '@angular/service-worker';
import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CheckForUpdateService } from './check-for-update.service';
import { ForServicesModule } from './for-services.module';

@Injectable({
  providedIn: ForServicesModule
})
export class PromptUpdateService implements OnDestroy {
  private subscription = new Subscription();

  constructor(updates: SwUpdate) {
    console.log('\t\t\tPromptUpdateService instantiated!!!');
    this.subscription.add(updates.available.subscribe((event) => {
      console.log('current version is', event.current.hash);
      console.log('available version is', event.available.hash);
      if (PromptUpdateService.promptUser()) {
        updates.activateUpdate().then(() => document.location.reload());
        return;
      }
      CheckForUpdateService.subscription.unsubscribe();
    }));
  }

  private static promptUser() {
    let confirm = '';
    while (confirm !== ConfirmOptions.YES && confirm !== ConfirmOptions.NO) {
      confirm = prompt(`Update app? ['${ConfirmOptions.YES}' or '${ConfirmOptions.NO}']`);
    }
    return confirm === ConfirmOptions.YES;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

const enum ConfirmOptions {
  YES = 'y',
  NO = 'n'
}
