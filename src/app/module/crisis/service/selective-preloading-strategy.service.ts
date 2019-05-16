import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { StartRoutingModule } from '../../../start-routing.module';

@Injectable({
  providedIn: StartRoutingModule
})
export class SelectivePreloadingStrategyService implements PreloadingStrategy {
  preloadedModules: string[] = [];

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data.preload) {
      // add the route path to the preloaded module array
      this.preloadedModules.push(route.path);
      console.log('SelectivePreloadingStrategyService # preload() # route.path: ' + route.path);
      console.log('SelectivePreloadingStrategyService # preload() # load(): ' + load);
      return load();
    } else {
      return of(null);
    }
  }
}
