import { SwUpdate } from '@angular/service-worker';
import { Injectable } from '@angular/core';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromptUpdateService {
  constructor(updates: SwUpdate) {
    console.log('\t\t\tPromptUpdateService instantiated!!!');
    const subscription = updates.available
      .pipe(finalize(() => subscription.unsubscribe()))
      .subscribe((event) => {
        console.log('current version is', event.current.hash);
        console.log('available version is', event.available.hash);
        if (PromptUpdateService.promptUser()) {
          updates.activateUpdate().then(() => document.location.reload());
        }
      });
  }

  private static promptUser() {
    let confirm = '';
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
