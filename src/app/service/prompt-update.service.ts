import { SwUpdate } from '@angular/service-worker';
import { Injectable } from '@angular/core';
import { CheckForUpdateService } from './check-for-update.service';
import { ForServicesModule } from './for-services.module';

@Injectable({providedIn: ForServicesModule})
export class PromptUpdateService {
  constructor(updates: SwUpdate) {
    console.log('\t\t\tPromptUpdateService instantiated!!!');
    CheckForUpdateService.subscription.add(updates.available.subscribe((event) => {
      console.log('current version is', event.current.hash);
      console.log('available version is', event.available.hash);
      if (PromptUpdateService.promptUser()) {
        updates.checkForUpdate().then(() => updates.activateUpdate().then(() => document.location.reload()));
        return;
      }
      CheckForUpdateService.subscription.unsubscribe();
    }));
  }

  private static promptUser() {
    let confirm;

    while (confirm !== ConfirmOptions.YES && confirm !== ConfirmOptions.NO) {
      confirm = prompt(`Update app? ['${ConfirmOptions.YES}' or '${ConfirmOptions.NO}']`);
    }
    return confirm === ConfirmOptions.YES;
  }
}

const enum ConfirmOptions {
  YES = 'y',
  NO = 'n'
}
