import { Component, Inject, LOCALE_ID, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LOCALE_ID_NUMBERS } from '../../../locale/LIDs';
import {
  LANG_INIT_STORAGE_KEY,
  LANG_STORAGE_KEY,
  LANG_USER_IS_SWITCHING,
  LocalStorageService
} from '../../service/local-storage.service';
import { LangChangeRelayService } from '../../service/lang-change-relay.service';
import { combineLatest, forkJoin, Observable, Subscription } from 'rxjs';
import { getDelayedValueObservable, getMultiValueObservable, getSingleValueObservable } from './observ';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-chooser',
  templateUrl: './chooser.component.html',
  styles: [
    '.activated {color: yellow}'
  ],
  styleUrls: ['./chooser.component.css']
})
export class ChooserComponent implements OnInit, OnDestroy {
  langStored: boolean;
  readonly localeIdNumbers = LOCALE_ID_NUMBERS;
  readonly browserLocaleID: string;
  readonly langStoredCode: string;
  firstt: string;
  secondd: string;
  thirdd: number;
  thirdSubscription: Subscription;
  first$ = getSingleValueObservable();
  first$$ = getSingleValueObservable(10000);
  second$ = getDelayedValueObservable();
  second$$ = getDelayedValueObservable();
  third$ = getMultiValueObservable();
  third$$ = getMultiValueObservable();
  show = false;
  values$ = forkJoin<string, string>([
    getSingleValueObservable(),
    getDelayedValueObservable()])
  // getMultiValueObservable() // forkJoin on works for observables that complete
    .pipe(map(([first, second]) => {
      // forkJoin returns an array of values, here we map those values to an object
      return {first, second};
    }));
  values$$ = combineLatest<Observable<string>, Observable<string>, Observable<number>>([
    getSingleValueObservable(10000),
    getDelayedValueObservable(),
    getMultiValueObservable()])
    .pipe(
      map(([first, second, third]) => {
        // combineLatest returns an array of values, here we map those values to an object
        return {first, second, third};
      })
    );
  private title = 'Wybór';

  constructor(
    public lcr: LangChangeRelayService,
    private titleService: Title,
    @Inject(LOCALE_ID) public localeId: string,
    private storage: LocalStorageService
  ) {
    this.browserLocaleID = navigator.language.slice(0, 2);
    this.langStoredCode = this.storage.getStringStoredAtGivenKey(LANG_STORAGE_KEY);
    this.langStored = !!this.langStoredCode;
  }

  ngOnInit(): void {
    this.setTitle(this.title);
    getSingleValueObservable()
      .subscribe(value => this.firstt = value);
    getDelayedValueObservable()
      .subscribe(value => this.secondd = value);
    this.thirdSubscription = getMultiValueObservable()
      .subscribe(value => this.thirdd = value);
  }

  langStorageChanged(event: boolean) {
    this.langStored = event;
    if (event) {
      this.storage.storeStringAtGivenKey(LANG_STORAGE_KEY, this.localeId);
      this.storage.storeStringAtGivenKey(LANG_INIT_STORAGE_KEY);
    } else {
      this.storage.removeStorageAtGivenKey(LANG_STORAGE_KEY);
      this.storage.removeStorageAtGivenKey(LANG_INIT_STORAGE_KEY);
    }
  }

  switchLocaleByUser(el: HTMLAnchorElement) {
    if (this.localeId !== el.id) {
      this.storage.storeStringAtGivenKey(LANG_USER_IS_SWITCHING);
      el.href = '/' + el.id;
      el.click();
    }
  }

  ngOnDestroy() {
    this.thirdSubscription.unsubscribe();
  }

  private setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
