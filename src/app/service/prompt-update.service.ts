import { SwUpdate } from '@angular/service-worker';
import { Injectable } from '@angular/core';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromptUpdateService {
  constructor(updates: SwUpdate) {
    console.log('PromptUpdateService instantiated!!!');
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
    while (confirm !== 'yes' && confirm !== 'no') {
      confirm = prompt('Update app? [\'yes\' or \'no\']');
    }
    return confirm === 'yes';
  }
}
