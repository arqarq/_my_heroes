import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { CloudFirebaseService, SelectivePreloadingStrategyService } from '../../../../service';

const FIELD_NAME_IN_PERSISTENCE = 'pole';
const FIELD_NAME_IN_PERSISTENCE2 = 'pole2';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styles: ['.confirm-signal {font-weight: bold; position: absolute; top: 5px; left: 559px}']
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
  private flag: boolean;
  private key = FIELD_NAME_IN_PERSISTENCE;

  constructor(
    private route: ActivatedRoute,
    public cloudFirebaseService: CloudFirebaseService,
    preloadStrategy: SelectivePreloadingStrategyService
  ) {
    this.modules = preloadStrategy.preloadedModules.sort();
    this.cloudFirebaseService.key = this.key;
  }

  ngOnInit() {
    this.sessionId = this.route.queryParamMap.pipe(map((params) => params.get('session_id') || 'None'));
    this.token = this.route.fragment.pipe(map((fragment) => fragment || 'None'));
    this.pole$ = this.cloudFirebaseService.getDataFromDoc();
    this.pole2$ = this.cloudFirebaseService.getDataFromDoc2(this.key);
    this.authState$ = this.cloudFirebaseService.dbAuth.authState.pipe(map((value) => {
      const obj = JSON.parse(JSON.stringify(value));
      return obj ? 'lastLoginAt: ' + obj.lastLoginAt + ' / createdAt: ' + obj.createdAt : null;
    }));
    this.docObj$ = new Observable((subscriber) => {
      subscriber.next(this.cloudFirebaseService.doc);
    }).pipe(delay(2000), map<AngularFirestoreDocument, string>((value) => {
      return value ? 'path: ' + value.ref.path : null;
    }));
    this.docObj2$ = new Observable((subscriber) => {
      function output(p, d) {
        subscriber.next('path: ' + p + ' | data: ' + d);
      }

      this.interval = setInterval(() => {
        let data = '? ';

        const doc = this.cloudFirebaseService.doc;
        const path = doc ? doc.ref.path : null;
        doc.ref.get()
          .then((value) => data = value.get(this.key))
          .catch((reason) => data += reason.toString())
          .finally(() => output(path, data));
      }, 500);
    });
  }

  ngOnDestroy() {
    clearTimeout(this.interval);
  }

  setOtherField() {
    // tslint:disable-next-line:no-conditional-assignment
    (this.flag = !this.flag) ?
      this.cloudFirebaseService.key = this.key = FIELD_NAME_IN_PERSISTENCE2 :
      this.cloudFirebaseService.key = this.key = FIELD_NAME_IN_PERSISTENCE;
    this.cloudFirebaseService.generateChangeInDB();
  }
}
