import { SwUpdate } from '@angular/service-worker';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromptUpdateService {
  constructor(updates: SwUpdate) {
    console.log('PromptUpdateService instantiated!!!');
    updates.available.subscribe((event) => {
      console.log('current version is', event.current.hash);
      console.log('available version is', event.available.hash);
      if (PromptUpdateService.promptUser()) {
        updates.activateUpdate().then(() => document.location.reload());
      }
    });
  }

  private static promptUser() {
    let confirm = '';
    while (confirm !== ('yes' || 'no')) {
      confirm = prompt('Update app? [\'yes\' or \'no\']');
    }
    return confirm === 'yes';
  }
}
