import { Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, forkJoin, Observable, onErrorResumeNext, Subscription } from 'rxjs';
import { getDelayedValueObservable, getMultiValueObservable, getSingleValueObservable } from './observ';
import { map, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-observ',
  templateUrl: './observ.component.html',
  styleUrls: ['./observ.component.css']
})
export class ObservComponent implements OnInit, OnDestroy {
  show = false;
  show2 = false;
  show3 = false;
  show4 = false;
  show5 = false;
  show6 = false;
  first = 'N/A';
  second = 'N/A';
  third = 9999;
  first$: Observable<string>;
  first$$: Observable<string>;
  second$: Observable<string>;
  second$$: Observable<string>;
  third$: Observable<number>;
  third$$: Observable<number>;
  values$: Observable<{first: string, second: string}>;
  values$$: Observable<{first: string, second: string, third: number}>;
  values$$$: Observable<string>;
  values$$$$: Observable<{first: number, second: number}>;
  private thirdSubscription: Subscription;

  constructor() {
    this.first$ = getSingleValueObservable();
    this.first$$ = getSingleValueObservable();
    this.second$ = getDelayedValueObservable();
    this.second$$ = getDelayedValueObservable();
    this.third$ = getMultiValueObservable();
    this.third$$ = getMultiValueObservable();
    this.values$ = forkJoin<string, string>([
      getSingleValueObservable(),
      // getMultiValueObservable()]), // forkJoin on works for observables that complete
      getDelayedValueObservable()])
      .pipe(map(([first, second]) => {
        // forkJoin returns an array of values, here we map those values to an object
        return {first, second};
      }));
    this.values$$ = combineLatest<Observable<string>, Observable<string>, Observable<number>>([
      getSingleValueObservable(),
      getDelayedValueObservable(),
      getMultiValueObservable()])
      .pipe(map(([first, second, third]) => {
        // combineLatest returns an array of values, here we map those values to an object
        return {first, second, third};
      }));
    this.values$$$ = onErrorResumeNext<string>(
      getSingleValueObservable(100),
      getMultiValueObservable().pipe(map<number, string>((el) => el + '')));
    this.values$$$$ = getMultiValueObservable(4000).pipe(
      withLatestFrom<number, {first: number, second: number}>(getMultiValueObservable(), (one, two) => {
        return {first: one, second: two};
      }));
  }

  ngOnDestroy() {
    this.thirdSubscription.unsubscribe();
  }

  ngOnInit() {
    getSingleValueObservable()
      .subscribe(value => this.first = value);
    getDelayedValueObservable()
      .subscribe(value => this.second = value);
    this.thirdSubscription = getMultiValueObservable()
      .subscribe(value => this.third = value);
  }
}
