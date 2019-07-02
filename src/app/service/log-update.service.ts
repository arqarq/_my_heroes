import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { environment } from '../../environments/environment';
import { finalize } from 'rxjs/operators';

interface VersionTag {
  ver: string;
}

@Injectable({
  providedIn: 'root'
})
export class LogUpdateService {
  constructor(updates: SwUpdate) {
    console.log('\t\t\tLogUpdateService instantiated!!!');
    // updates.available.subscribe((event) => {
    //   console.log('current version is', event.current.hash);
    //   console.log('available version is', event.available.hash);
    // });
    const subscription = updates.activated
      .pipe(finalize(() => subscription.unsubscribe()))
      .subscribe((event) => {
        console.log('old version was', event.previous.hash);
        console.log('new version is', event.current.hash);
        alert('old version: ' + environment.VERSION +
          '\nnew version: ' + (event.current.appData as VersionTag).ver);
      });
  }
}
