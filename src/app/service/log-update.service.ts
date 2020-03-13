import { Injectable, OnDestroy } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { environment } from '../../environments/environment';
import { Subscription } from 'rxjs';
import { ForServicesModule } from './for-services.module';

interface VersionTag {
  ver: string;
}

@Injectable({
  providedIn: ForServicesModule
})
export class LogUpdateService implements OnDestroy {
  private subscription = new Subscription();

  constructor(updates: SwUpdate) {
    console.log('\t\t\tLogUpdateService instantiated!!!');
    // updates.available.subscribe((event) => {
    //   console.log('current version is', event.current.hash);
    //   console.log('available version is', event.available.hash);
    // });
    this.subscription.add(updates.activated.subscribe((event) => {
      console.log('old version was', event.previous.hash);
      console.log('new version is', event.current.hash);
      alert('old version: ' + environment.VERSION +
        '\nnew version: ' + (event.current.appData as VersionTag).ver);
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
