import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LogUpdateService {
  constructor(updates: SwUpdate) {
    console.log('LogUpdateService instantiated!!!');
    // updates.available.subscribe((event) => {
    //   console.log('current version is', event.current.hash);
    //   console.log('available version is', event.available.hash);
    // });
    updates.activated.subscribe((event) => {
      console.log('old version was', event.previous.hash);
      console.log('new version is', event.current.hash);
      alert('old version: ' + environment.VERSION);
    });
  }
}