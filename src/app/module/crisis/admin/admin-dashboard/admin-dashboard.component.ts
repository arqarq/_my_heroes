import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { SelectivePreloadingStrategyService } from '../../../../service/selective-preloading-strategy.service';
import { CloudFirebaseService } from '../../../../service/cloud-firebase.service';

const FIELD_NAME_IN_PERSISTENCE = 'pole';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html'
})
export class AdminDashboardComponent implements OnInit, OnDestroy {
  sessionId: Observable<string>;
  token: Observable<string>;
  modules: string[];
  pole$: Observable<string>;
  pole2$: Observable<string>;
  authState$: Observable<any>;
  docObj$: Observable<any>;
  docObj2$: Observable<any>;
  private interval;

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
    this.pole$ = this.readFromPersistence(FIELD_NAME_IN_PERSISTENCE);
    this.pole2$ = this.cloudFirebaseService.getDataFromDoc2(FIELD_NAME_IN_PERSISTENCE);
    this.authState$ = this.cloudFirebaseService.getAuthStateObserver().pipe(map((value) => {
      const obj = JSON.parse(JSON.stringify(value));
      return obj ? 'lastLoginAt: ' + obj.lastLoginAt + '/createdAt: ' + obj.createdAt : null;
    }));
    this.docObj$ = this.cloudFirebaseService.getDataObj().pipe(
      delay(2000),
      map<any, string>((value) => {
        return value ? value.ref.path : null;
      }));
    this.docObj2$ = new Observable((subscriber) => {
      this.interval = setInterval(() => {
        const doc = this.cloudFirebaseService.doc;
        const path = doc ? doc.ref.path : null;
        let data = '?';
        doc.ref.get()
          .then((value) => data = value.get(FIELD_NAME_IN_PERSISTENCE))
          .catch((reason) => data = reason.toString())
          .finally(() => subscriber.next('path: "' + path + '" / data: ' + data));
      }, 500);
    });
  }

  ngOnDestroy() {
    clearTimeout(this.interval);
  }

  private readFromPersistence(key: string) {
    return this.cloudFirebaseService.getDataFromDoc(key);
  }
}
