import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { SelectivePreloadingStrategyService } from '../../../../service/selective-preloading-strategy.service';
import { CloudFirebaseService } from '../../../../service/cloud-firebase.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html'
})
export class AdminDashboardComponent implements OnInit, OnDestroy {
  sessionId: Observable<string>;
  token: Observable<string>;
  modules: string[];
  pole$: Observable<string>;
  authState$: Observable<any>;
  docObj$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    public cloudFirebaseService: CloudFirebaseService,
    preloadStrategy: SelectivePreloadingStrategyService
  ) {
    this.modules = preloadStrategy.preloadedModules.sort();
  }

  ngOnInit() {
    this.sessionId = this.route.queryParamMap.pipe(map((params) => params.get('session_id') || 'None'));
    this.token = this.route.fragment.pipe(map((fragment) => fragment || 'None'));
    this.cloudFirebaseService.login();
    this.pole$ = this.readFromPersistence('pole');
    this.authState$ = this.cloudFirebaseService.getAuthStateObserver().pipe(map((value) => {
      const obj = JSON.parse(JSON.stringify(value));
      return obj ? 'lastLoginAt: ' + obj.lastLoginAt + '/createdAt: ' + obj.createdAt : null;
    }));
    this.docObj$ = this.cloudFirebaseService.getDataObj().pipe(
      delay(2000),
      map<any, string>((value) => {
        return value ? value.ref.path : null;
      }));
  }

  ngOnDestroy() {
    this.cloudFirebaseService.logout();
  }

  private readFromPersistence(key: string) {
    return this.cloudFirebaseService.getDataFromDoc(key);
  }
}
