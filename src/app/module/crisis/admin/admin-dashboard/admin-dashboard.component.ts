import { AfterViewInit, Component, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { CloudFirebaseRepository, SelectivePreloadingStrategyService } from '../../../../service';
import { ConfirmSignalComponent } from '../../../../component';
import { CloudFirebaseService } from '../../../../service/cloud-firebase.service';
import { FormComponent } from '../../../forms-template/form.component';

const FIELD_NAME_IN_PERSISTENCE = 'pole';
const FIELD_NAME_IN_PERSISTENCE2 = 'pole2';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styles: [
    '.confirm-signal {font-weight: bold; position: absolute; top: 5px; left: 559px}',
    'button[type=button] {margin-right: 10px}',
    '.flex-breaker {flex-basis: 100%; height: 0; margin-top: 5px; margin-bottom: 5px}'
  ]
})
export class AdminDashboardComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChildren(ConfirmSignalComponent) confirmSignalElements: QueryList<ConfirmSignalComponent>;
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
    public cFRepository: CloudFirebaseRepository,
    private cFService: CloudFirebaseService,
    preloadStrategy: SelectivePreloadingStrategyService
  ) {
    this.modules = preloadStrategy.preloadedModules.sort();
    this.cFRepository.key = this.key;
  }

  ngOnInit() {
    this.sessionId = this.route.queryParamMap.pipe(map((params) => params.get('session_id') || 'None'));
    this.token = this.route.fragment.pipe(map((fragment) => fragment || 'None'));
    this.pole$ = this.cFRepository.getDataFromDoc();
    this.pole2$ = this.cFRepository.getDataFromDocRefNotChanged(this.key);
    this.authState$ = this.cFRepository.dbAuth.authState.pipe(map((value) => {
      const obj = JSON.parse(JSON.stringify(value));
      return obj ? 'lastLoginAt: ' + obj.lastLoginAt + ' / createdAt: ' + obj.createdAt : null;
    }));
    this.docObj$ = new Observable((subscriber) => {
      subscriber.next(this.cFRepository.doc);
    }).pipe(delay(2000), map<AngularFirestoreDocument, string>((value) => {
      return value ? 'path: ' + value.ref.path : null;
    }));
    this.docObj2$ = new Observable((subscriber) => {
      function output(p, d) {
        subscriber.next('path: ' + p + ' | data: ' + d);
      }

      this.interval = setInterval(() => {
        let data = '? ';

        const doc = this.cFRepository.doc;
        const path = doc ? doc.ref.path : null;
        doc.ref.get()
          .then((value) => data = value.get(this.key))
          .catch((reason) => data += reason.toString())
          .finally(() => output(path, data));
      }, 500);
    });
  }

  ngOnDestroy() {
    clearTimeout(this.interval)
  }

  setWithConfirm(nameOfKonfirm: string) {
    (this.flag = !this.flag) ? // eslint-disable-line no-cond-assign, @typescript-eslint/no-unused-expressions
      this.cFRepository.key = this.key = FIELD_NAME_IN_PERSISTENCE2 :
      this.cFRepository.key = this.key = FIELD_NAME_IN_PERSISTENCE;
    this.cFService.generateChangeInDB$()
      .then(() => this.beep(nameOfKonfirm, true))
      .catch(() => this.beep(nameOfKonfirm));
  }

  ngAfterViewInit() {
    // this.interval2 = setInterval(() => {
    //   this.confirmSignalElements.first.okOrError = !this.confirmSignalElements.first.okOrError;
    // }, 1000);
  }

  deleteDefaultDocForTemplateDrivenForm(nameOfKonfirm: string) {
    this.cFService.deleteDocumentAtIndex(FormComponent.$docIndex)
      .then(() => this.beep(nameOfKonfirm, true))
      .catch(() => this.beep(nameOfKonfirm))
  }

  private beep(nameOfKonfirm: string, success?: boolean) {
    this.confirmSignalElements.find((item) => item.name === nameOfKonfirm).start(success);
  }
}
